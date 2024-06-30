// ToggleContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ToggleWindowContextType {
  windowIsVisible: boolean;
  toggleWindowVisibility: () => void;
}

const ToggleContext = createContext<ToggleWindowContextType | undefined>(undefined);

const ToggleWindowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [windowIsVisible, setWindowVisibility] = useState(false);

  const toggleWindowVisibility = () => {
    setWindowVisibility(prev => !prev);
    console.log("Button clicked, window visibility: ", !windowIsVisible);
  };

  return (
    <ToggleContext.Provider value={{ windowIsVisible, toggleWindowVisibility }}>
      {children}
    </ToggleContext.Provider>
  );
};

const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('useToggle must be used within a ToggleProvider');
  }
  return context;
};

export { ToggleWindowProvider, useToggle };
