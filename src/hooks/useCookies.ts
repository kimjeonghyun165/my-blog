import { useEffect, useState } from "react";

export function useCookie() {
    useEffect(() => {
        if (typeof document !== "undefined") {
            document.cookie = "mode=cupcake; max-age=" + 3600 * 24 * 400;
        }
    }, []);
}
