"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

export function useSearchParamState():[{[key:string]:string}, (name: string, value:string)=>void] {
    // const pathname = usePathname();
    // const router = useRouter();

    // let [searchQuery, setSearchQuery] = useState<{[key:string]:string}>({});
    // const updateSearchQuery = (updatedQuery:any) => {
    //     const params = new URLSearchParams(searchParams);
    //     Object.keys(updatedQuery).forEach((key) => {
    //       if (updatedQuery[key]) {
    //         params.set(key, updatedQuery[key]);
    //       } else {
    //         params.delete(key);
    //       }
    //     });
    //     const queryString = params.toString();
    //     const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    //     router.push(updatedPath);
    // };
    // const setParam = (name: string, value:string) => {
    //     const updatedQuery = { ...searchQuery, [name]: value };
    //     setSearchQuery(updatedQuery);
    //     updateSearchQuery(updatedQuery);
    // }
    
    // return [searchQuery, setParam]
}