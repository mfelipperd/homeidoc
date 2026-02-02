'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RentalModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const RentalModalContext = createContext<RentalModalContextType | undefined>(undefined);

export const RentalModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <RentalModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </RentalModalContext.Provider>
  );
};

export const useRentalModal = () => {
  const context = useContext(RentalModalContext);
  if (context === undefined) {
    throw new Error('useRentalModal must be used within a RentalModalProvider');
  }
  return context;
};
