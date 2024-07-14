"use client";

import { useEffect } from "react";


export default () => {
    useEffect(() => {
        if (window.location.host.includes("localhost")) return;
        //@ts-ignore
        window.dataLayer = window.dataLayer || [];
        //@ts-ignore
        function gtag(){dataLayer.push(arguments);}
        //@ts-ignore
        gtag('js', new Date());
        
        //@ts-ignore
        gtag('config', 'G-XPH2SKLJ7P');
      }, [])
    return (
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XPH2SKLJ7P"></script>
    )
}