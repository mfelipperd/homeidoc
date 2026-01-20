'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import React from 'react';

interface ServiceDetailsProps {
  title: string;
  price: string;
  description: React.ReactNode;
}

const ServiceDetails = ({ title, price, description }: ServiceDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-lg text-primary-navy flex-1 pr-4">{title}</span>
        <div className="flex items-center gap-4">
          <span className="font-bold text-primary-green bg-primary-green/10 px-4 py-1.5 rounded-full text-sm whitespace-nowrap">{price}</span>
          <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2 leading-relaxed">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
