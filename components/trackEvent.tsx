'use client';

import { useAptabase } from "@aptabase/react";
import { env } from "next-runtime-env";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const TrackPageViews = () => {
    const APTABASE_APP_KEY = env('NEXT_PUBLIC_APTABASE_APP_KEY');
    const pathname = usePathname();
    const { trackEvent } = useAptabase();

    useEffect(() => {
        if(APTABASE_APP_KEY) {
            setTimeout(() => {
                trackEvent("view", {
                    page: pathname,
                });
            }, 0);
        }
    }, [trackEvent, pathname, APTABASE_APP_KEY]);

    return null;
}