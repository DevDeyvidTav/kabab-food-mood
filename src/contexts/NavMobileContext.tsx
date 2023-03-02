import { createContext, useState, ReactNode } from "react";

interface NavMobileContextData {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export const NavMobileContext = createContext<NavMobileContextData>(
    {} as NavMobileContextData
);

export function NavMobileProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <NavMobileContext.Provider value={{ open, setOpen }}>
            {children}
        </NavMobileContext.Provider>
    );
}


