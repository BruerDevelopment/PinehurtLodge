import { useEffect, useState } from "react";

export function useScrollPos() {

    const [scrollPosition, setScrollPosition] = useState(0);
    
    useEffect(() => {
        setScrollPosition(window.scrollY);
        const handleScroll = (e: any) => {
            setScrollPosition(window.scrollY);
        };
        document.addEventListener('scroll', handleScroll);
        
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return scrollPosition;
}