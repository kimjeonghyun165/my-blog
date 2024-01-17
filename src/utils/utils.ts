import { useEffect, useState } from "react";

export const throttle = (callback: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return () => {
        if (timer) return;
        timer = setTimeout(() => {
            callback();
            timer = null;
        }, delay);
    };
};

export const cls = (...classnames: string[]) => {
    return classnames.join(' ');
};


export const formatDateString = (inputDate: string) => {
    const dateObject = new Date(inputDate);
    const formattedDate = `${dateObject.getFullYear().toString().slice(2)}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}`;
    return formattedDate;
}


export function toLowerCaseString(inputString: string) {
    return inputString.toLowerCase();
}