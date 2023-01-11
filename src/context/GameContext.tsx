import { createContext } from "react";
import { gameType } from "../hooks/useGame";

export const gameContext = createContext<gameType | null>(null);