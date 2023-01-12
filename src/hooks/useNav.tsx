import { useState } from "react";

export type navType = {
    user : string | null,
    setUser: React.Dispatch<React.SetStateAction<string | null>>,
    showLogin: boolean,
    setShowLogin: React.Dispatch<React.SetStateAction<boolean>>,
    handleShowLogin: () => void,
    handleCloseLogin: () => void,
    showHelp: boolean,
    setShowHelp: React.Dispatch<React.SetStateAction<boolean>>,
    handleShowHelp: () => void,
    handleCloseHelp: () => void
}

export type FormData = {
    Name: string;
    Password: string;
};

export function useNav(): navType {

    const [user, setUser] = useState<string | null>('');

    const [showLogin, setShowLogin] = useState<boolean>(false);

    const [showHelp, setShowHelp] = useState<boolean>(false);

    const handleShowLogin = () => setShowLogin(true);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowHelp = () => setShowHelp(true);
    const handleCloseHelp = () => setShowHelp(false);


    return {
        user,
        setUser,
        showLogin,
        setShowLogin,
        handleShowLogin,
        handleCloseLogin,
        showHelp,
        setShowHelp,
        handleShowHelp,
        handleCloseHelp
    }

}