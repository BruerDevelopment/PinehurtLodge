import { RefObject, useEffect, useRef } from "react"

export type DIALOG_HOOK = [RefObject<HTMLDialogElement>, (_type: string) => void, () => void]
export function useDialog(): [RefObject<HTMLDialogElement>, (_type: string) => void, () => void] {
    let ref = useRef<HTMLDialogElement>(null);
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
                ele.close();
        });

    })
    const openFunc = (_type?: string) => {
        if (ref.current == null) return;
        if (_type == "modal") {
            ref.current.showModal();
            return;
        }
        ref.current.show();
    }
    const closeFunc = () => {
        if (ref.current == null) return;
        ref.current.close();

    }
    return [ref, openFunc, closeFunc]
}