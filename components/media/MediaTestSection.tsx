'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Camera, Mic, CameraOff, MicOff, CheckCircle2, AlertCircle, RefreshCcw } from 'lucide-react';

const MediaTestSection = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [micLevel, setMicLevel] = useState(0);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Stop everything when component unmounts
  useEffect(() => {
    return () => {
      stopAll();
    };
  }, []);

  const stopAll = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    setCameraActive(false);
    setMicActive(false);
  };

  const startTest = async (type: 'camera' | 'mic') => {
    try {
      setError(null);

      // Check if mediaDevices API is available
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setError('O seu navegador não suporta o acesso à câmera ou microfone através de conexões não seguras (HTTP) ou é um navegador antigo. Por favor, tente usar HTTPS ou um navegador moderno como Chrome, Firefox ou Edge.');
        return;
      }
      
      const constraints = {
        video: type === 'camera' || cameraActive,
        audio: type === 'mic' || micActive,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (type === 'camera' || cameraActive) {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setCameraActive(true);
      }

      if (type === 'mic' || micActive) {
        setupAudioVisualizer(stream);
        setMicActive(true);
      }
    } catch (err: any) {
      console.error('Error accessing media devices:', err);
      if (err.name === 'NotAllowedError') {
        setError('Permissão negada. Por favor, habilite o acesso à câmera/microfone nas configurações do seu navegador.');
      } else {
        setError('Não foi possível acessar os dispositivos. Verifique se eles estão conectados corretamente.');
      }
    }
  };

  const setupAudioVisualizer = (stream: MediaStream) => {
    if (audioContextRef.current) audioContextRef.current.close();
    
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    
    analyser.fftSize = 256;
    source.connect(analyser);
    
    audioContextRef.current = audioContext;
    analyserRef.current = analyser;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const updateLevel = () => {
      if (!analyserRef.current) return;
      analyserRef.current.getByteFrequencyData(dataArray);
      
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      const average = sum / bufferLength;
      setMicLevel(average / 128); // Normalize to 0-1
      
      animFrameRef.current = requestAnimationFrame(updateLevel);
    };

    updateLevel();
  };

  return (
    <div className="animate-fade-in-up animation-delay-300">
      <h3 className="text-2xl md:text-3xl font-extrabold text-primary-navy mb-8 text-center">
        Teste sua camera e microfone no nosso site:
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {/* Camera Test Box */}
        <div className="glass-card-strong rounded-3xl p-6 flex flex-col items-center justify-center min-h-[300px] border border-white/40 shadow-xl overflow-hidden group">
          <div className="relative w-full aspect-video bg-gray-900/5 rounded-2xl mb-6 overflow-hidden flex items-center justify-center border border-gray-100">
            {cameraActive ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover scale-x-[-1]"
              />
            ) : (
              <div className="flex flex-col items-center gap-3 text-gray-400">
                <CameraOff className="w-16 h-16 opacity-20" />
                <span className="text-sm font-medium">Câmera desligada</span>
              </div>
            )}
            
            {cameraActive && (
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary-green/90 text-[#FFFFFF] px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                AO VIVO
              </div>
            )}
          </div>

          <button
            onClick={() => (cameraActive ? stopAll() : startTest('camera'))}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
              cameraActive 
                ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                : 'bg-primary-navy text-[#FFFFFF] hover:bg-navy-alt shadow-lg shadow-primary-navy/20 active:scale-95'
            }`}
            style={!cameraActive ? { color: '#FFFFFF' } : {}}
          >
            {cameraActive ? (
              <>
                <RefreshCcw className="w-5 h-5" />
                Desligar Câmera
              </>
            ) : (
              <>
                <Camera className="w-5 h-5" />
                Testar Câmera
              </>
            )}
          </button>
        </div>

        {/* Mic Test Box */}
        <div className="glass-card-strong rounded-3xl p-6 flex flex-col items-center justify-center min-h-[300px] border border-white/40 shadow-xl group">
          <div className="w-full mb-6 flex flex-col items-center justify-center gap-8 flex-grow">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
              micActive ? 'bg-primary-green/10 text-primary-green scale-110 shadow-lg shadow-primary-green/10' : 'bg-gray-100 text-gray-400'
            }`}>
              {micActive ? <Mic className="w-12 h-12" /> : <MicOff className="w-12 h-12 opacity-20" />}
            </div>

            <div className="w-full max-w-xs space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-tighter">
                <span>Nível de Áudio</span>
                <span>{micActive ? (micLevel > 0.1 ? 'Capturando' : 'Silêncio') : 'Inativo'}</span>
              </div>
              <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden p-1 border border-white/40">
                <div 
                  className={`h-full rounded-full transition-all duration-75 ${
                    micLevel > 0.5 ? 'bg-primary-green' : (micLevel > 0.2 ? 'bg-primary-teal' : 'bg-primary-navy/40')
                  }`}
                  style={{ width: `${Math.min(micLevel * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            
            {micActive && micLevel > 0.05 && (
               <p className="text-sm font-semibold text-primary-green flex items-center gap-1 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4" />
                  Microfone funcionando corretamente
               </p>
            )}
          </div>

          <button
            onClick={() => (micActive ? stopAll() : startTest('mic'))}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
              micActive 
                ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                : 'bg-primary-navy text-[#FFFFFF] hover:bg-navy-alt shadow-lg shadow-primary-navy/20 active:scale-95'
            }`}
            style={!micActive ? { color: '#FFFFFF' } : {}}
          >
            {micActive ? (
              <>
                <RefreshCcw className="w-5 h-5" />
                Desligar Microfone
              </>
            ) : (
              <>
                <Mic className="w-5 h-5" />
                Testar Microfone
              </>
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="max-w-2xl mx-auto mt-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center gap-3 animate-fade-in">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <div className="max-w-md mx-auto mt-12 grid grid-cols-2 gap-4">
          <div className="bg-white/50 p-4 rounded-2xl border border-white/40 text-center">
              <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Privacidade</span>
              <p className="text-[10px] text-gray-500 leading-tight">Nenhum dado de áudio ou vídeo é gravado ou enviado para nossos servidores.</p>
          </div>
          <div className="bg-white/50 p-4 rounded-2xl border border-white/40 text-center">
              <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Suporte</span>
              <p className="text-[10px] text-gray-500 leading-tight">Certifique-se de que outros aplicativos não estejam usando sua câmera.</p>
          </div>
      </div>
    </div>
  );
};

export default MediaTestSection;
