"use client"
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'

const queryclient=new QueryClient();

export const ReactQueryClientProvider = ({children}:{children:ReactNode}) => {
    return (
        <QueryClientProvider client={queryclient}>
        {/* <ReactQueryDevtools/> */}
            {children}
        </QueryClientProvider>
    );
}


