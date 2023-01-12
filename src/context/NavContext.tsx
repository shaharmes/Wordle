import { createContext } from "react";
import { navType } from "../hooks/useNav";

export const navContext = createContext<navType | null>(null);