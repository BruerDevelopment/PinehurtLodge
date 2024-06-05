import { RefObject, useEffect, useRef } from "react"

export type DIALOG_HOOK = {
    ref: RefObject<HTMLDialogElement>,
    open: (_type: string) => void,
    close: () => void,
    addEventListener: (_type:"open"|"close", func:()=>void) => void,
}
export function useDialog(): DIALOG_HOOK {
    let ref = useRef<HTMLDialogElement>(null);
    let events:{
        "open": (()=>void)[],
        "close":(()=>void)[]
    } = {
        "open": [],
        "close":[]
    }
    const openFunc = (_type?: string) => {
        if (ref.current == null) return;
        for (let i = 0; i < events.open.length; i++) {
            events.open[i]()
        }
        if (_type == "modal") {
            ref.current.showModal();
            return;
        }
        ref.current.show();
    }
    const closeFunc = () => {
        if (ref.current == null) return;
        for (let i = 0; i < events.close.length; i++) {
            events.close[i]()
        }
        ref.current.close();

    }
    useEffect(() => {
        if (ref.current == null) return;
        
        let dialog = ref.current;
        ref.current.addEventListener('click', (e) => {
            
            if (e == null || e.target == null) //This prevents issues with forms
                return;
            
            let ele: HTMLDialogElement = e.target as HTMLDialogElement; 
            if (ele.tagName !== 'DIALOG') //This prevents issues with forms
                return;
            const rect = ele.getBoundingClientRect();

            const clickedInDialog = (
                rect.top <= e.clientY &&
                e.clientY <= rect.top + rect.height &&
                rect.left <= e.clientX &&
                e.clientX <= rect.left + rect.width
            );

            if (clickedInDialog === false)
                closeFunc();
        });

    })
    
    const addEventListener = (_type:"open"|"close", func:()=>void) => {
        events[_type].push(func);
    }
    return {
        ref,
        open: openFunc,
        close: closeFunc,
        addEventListener
    }
}