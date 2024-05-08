"use client"

import { ReactNode } from 'react';
import { ReactQueryDevtools, DevtoolsOptions } from 'react-query/devtools';

export const Devtools = ({children}:{children:ReactNode} & DevtoolsOptions) => {
    return (
        <>
            <ReactQueryDevtools>
                {children}
            </ReactQueryDevtools>
        </>
    );
};
