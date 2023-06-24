"use client"

import {FilterProvider} from "@/contexts/FilterContext"
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode
}

const theme = {
    desktopBreakpoint: "968px",
    tableBreakpoint: "768px",
}

export function DefaultProviders({ children } : DefaultProvidersProps){
    return(
            <FilterProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterProvider>
    )
}