'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const InteractiveBackgroundGreenFocus = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Custom shader for ophthalmology focus effect with GREEN theme
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      varying vec2 vUv;
      
      // Smooth noise function for organic movement
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
      
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }
      
      void main() {
        vec2 uv = vUv;
        
        // Create diagonal gradient (bottom-left to top-right)
        // 0.0 = bottom-left (green), 1.0 = top-right (white)
        float diagonal = uv.x + uv.y;
        diagonal *= 0.5; // Normalize to 0-1 range
        
        // Add pulsing effect using time
        float pulse = sin(uTime * 0.8) * 0.5 + 0.5; // Oscillates between 0 and 1
        float pulseStrength = pulse * 0.1; // 10% intensity variation
        
        // Apply pulse to gradient position
        float gradientPos = diagonal + pulseStrength;
        gradientPos = clamp(gradientPos, 0.0, 1.0);
        
        // Define colors: brand green to white
        vec3 greenColor = vec3(0.341, 0.761, 0.490); // #57C27D - Brand green
        vec3 tealColor = vec3(0.243, 0.812, 0.627);  // #3ECFA0 - Brand teal
        vec3 lightGreen = vec3(0.820, 0.980, 0.898); // #D1FAE5 - Very light green
        vec3 whiteColor = vec3(1.000, 1.000, 1.000); // #FFFFFF - Pure white
        
        // Create smooth gradient from green to white
        vec3 finalColor;
        if (gradientPos < 0.33) {
          // Bottom-left: green to teal
          finalColor = mix(greenColor, tealColor, gradientPos * 3.0);
        } else if (gradientPos < 0.66) {
          // Middle: teal to light green
          finalColor = mix(tealColor, lightGreen, (gradientPos - 0.33) * 3.0);
        } else {
          // Top-right: light green to white
          finalColor = mix(lightGreen, whiteColor, (gradientPos - 0.66) * 3.0);
        }
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    // Create shader material
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    // Create plane
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Handle resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.01;
      
      // Update time uniform for pulsing effect
      material.uniforms.uTime.value = time;
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};

export default InteractiveBackgroundGreenFocus;
