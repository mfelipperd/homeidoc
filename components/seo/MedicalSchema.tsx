import React from 'react';

const MedicalSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Home iDoc - Oftalmologia Domiciliar",
    "image": "https://homeidoc.com.br/images/logo.webp",
    "@id": "https://homeidoc.com.br",
    "url": "https://homeidoc.com.br",
    "telephone": "+5591991908887",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Trav. 14 de Março, 1622 – Sala 1",
      "addressLocality": "Belém",
      "addressRegion": "PA",
      "postalCode": "66055-490",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.4444, 
      "longitude": -48.4844
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://facebook.com/homeidoc",
      "https://instagram.com/homeidoc"
    ],
    "medicalSpecialty": "Ophthalmology",
    "description": "Serviços oftalmológicos premium a domicílio em Belém. Equipe altamente especializada e tecnologia de ponta no conforto do seu lar.",
    "areaServed": [
      {
        "@type": "City",
        "name": "Belém",
        "sameAs": "https://www.wikidata.org/wiki/Q155444"
      },
      {
        "@type": "Place",
        "name": "Umarizal"
      },
      {
        "@type": "Place",
        "name": "Nazaré"
      },
      {
        "@type": "Place",
        "name": "Batista Campos"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default MedicalSchema;
