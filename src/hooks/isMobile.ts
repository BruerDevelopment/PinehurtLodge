import { useEffect, useState } from "react";

export let menu_listeners:((val:boolean)=>void)[] = [];
export function isMobile(): boolean {
    let [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(window.innerWidth < 600);
        const handleScroll = (e: any) => {
            setIsMobile(window.innerWidth < 600);
        };
        window.addEventListener('resize', handleScroll);
        
        return () => {
            window.removeEventListener('resize', handleScroll);
        };
    }, []);
    return isMobile;
}
