import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";


export default function ScrollToTop() {
    const {pathname} = useLocation()

    useEffect(() => {
        const unListen = () => {
            document.documentElement.scroll(0,0)
        }
        return () => {
            unListen();
        }
    }, [pathname]);
    return null
}

