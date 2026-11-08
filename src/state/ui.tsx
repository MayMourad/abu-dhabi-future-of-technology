import { createContext, useContext } from 'react';

interface UiState {
  /** open the detail dialog for a center by id */
  openCenter: (id: string) => void;
}

export const UiContext = createContext<UiState>({ openCenter: () => {} });
export const useUi = () => useContext(UiContext);
