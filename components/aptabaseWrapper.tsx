'use client';

import { AptabaseProvider } from "@aptabase/react";
import { env } from "next-runtime-env";
import { ReactNode } from "react";

export const AptabaseWrapper = ({ children }: { children: ReactNode | ReactNode[] }) => {
    const APTABASE_APP_KEY = env('NEXT_PUBLIC_APTABASE_APP_KEY');
    const APTABASE_HOST = env('NEXT_PUBLIC_APTABASE_HOST');
    
    return <>
        {APTABASE_APP_KEY ?
            <AptabaseProvider appKey={APTABASE_APP_KEY} options={{ host: APTABASE_HOST }}>
                {children}
            </AptabaseProvider>
        : children}
    </>;
};