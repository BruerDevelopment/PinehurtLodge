import { useState } from "react";

export let menu_listeners:((val:boolean)=>void)[] = [];
export function useMenuState():[boolean, (val:boolean)=>void] {
    let [menuOpen, setMenuOpen] = useState(false);
    return [menuOpen, (val:boolean) => {
        for (let i = 0; i < menu_listeners.length; i++) {
            menu_listeners[i](val);
        }
        setMenuOpen(val);
    }]
}

export function addMenuStateListener(listener:(val:boolean)=>void) {
    menu_listeners.push(listener)
}