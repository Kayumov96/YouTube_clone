import React, {createContext} from "react";
import { flowers } from "../mock/mock";
import navbar from "../Utils/Navbar"

export const FlowerContext = createContext()

export const Flower = ( { children } ) => {
    return (
        <FlowerContext.Provider value={ flowers } >
            {children}
        </FlowerContext.Provider>
    );
};