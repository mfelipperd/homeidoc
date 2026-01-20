'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  question: string;
  answer: string;
  videoUrl?: string | null;
}

const FAQAccordion = ({ question, answer, videoUrl }: FAQAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-lg text-primary-navy flex-1 pr-4">{question}</span>
        <div className={`p-1 rounded-full transition-colors ${isOpen ? 'bg-primary-green/10' : 'bg-gray-100'}`}>
          <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-green' : ''}`} />
        </div>
      </button>
      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2 leading-relaxed space-y-4">
            <p className="whitespace-pre-line">{answer}</p>
            {videoUrl && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src={videoUrl}
                  title={question}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
