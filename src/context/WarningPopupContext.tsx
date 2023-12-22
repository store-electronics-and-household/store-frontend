import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from 'react';

interface WarningPopupProviderProps {
  children: ReactNode;
}

interface WarningPopupContextType {
  handleOpenWarningPopup: (warningPopupText: string) => void;
  handleCloseWarningPopup: () => void;
  isWarningPopupOpen: boolean;
  warningPopupText: string;
}

const WarningPopupContext = createContext<WarningPopupContextType>({
  handleOpenWarningPopup: (warningPopupText: string) => null,
  handleCloseWarningPopup: () => null,
  isWarningPopupOpen: false,
  warningPopupText: '',
});

export function useWarningPopupContext (): WarningPopupContextType {
  const context = useContext(WarningPopupContext);
  return context;
}

export function WarningPopupProvider ({ children }: WarningPopupProviderProps): JSX.Element {
  const [isWarningPopupOpen, setWarningPopupOpen] = useState<boolean>(false);
  const [warningPopupText, setWarningPopupText] = useState<string>('');

  const handleOpenWarningPopup = (warningText: string): void => {
    setWarningPopupOpen(true);
    setWarningPopupText(warningText);
  };

  const handleCloseWarningPopup = (): void => {
    setWarningPopupOpen(false);
  };

  return (
    <WarningPopupContext.Provider
      value={{
        handleOpenWarningPopup,
        handleCloseWarningPopup,
        isWarningPopupOpen,
        warningPopupText
      }}
    >
      {children}
    </WarningPopupContext.Provider>
  );
}
