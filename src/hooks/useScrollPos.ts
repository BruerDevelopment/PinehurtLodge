import { useEffect, useState } from "react";

export function useScrollPos() {

    const [scrollPosition, setScrollPosition] = useState(0);
    
    useEffect(() => {
        setScrollPosition(document.body.scrollTop);
        const handleScroll = (e: any) => {
            setScrollPosition(document.body.scrollTop);
        };
        document.body.addEventListener('scroll', handleScroll);
        
        return () => {
            document.body.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return scrollPosition;
}