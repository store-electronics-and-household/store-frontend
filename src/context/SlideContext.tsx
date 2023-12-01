import React, {
  createContext,
  useContext,
  type ReactNode,
  useState,
} from 'react';

interface SlideContextProps {
  isLight: boolean;
  setLight: (isLight: boolean) => void;
}

const SlideContext = createContext<SlideContextProps | undefined>(undefined);

export const SlideContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLight, setIsLight] = useState<boolean>(false);

  const setLight = (newIsLight: boolean): void => {
    setIsLight(newIsLight);
  };

  return (
    <SlideContext.Provider value={{ isLight, setLight }}>
      {children}
    </SlideContext.Provider>
  );
};

export const useSlideContext = (): SlideContextProps | undefined => {
  const context = useContext(SlideContext);
  return context;
};
