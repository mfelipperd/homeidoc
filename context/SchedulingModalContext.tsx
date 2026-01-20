'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SchedulingModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const SchedulingModalContext = createContext<SchedulingModalContextType | undefined>(undefined);

export const SchedulingModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <SchedulingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </SchedulingModalContext.Provider>
  );
};

export const useSchedulingModal = () => {
  const context = useContext(SchedulingModalContext);
  if (context === undefined) {
    throw new Error('useSchedulingModal must be used within a SchedulingModalProvider');
  }
  return context;
};
