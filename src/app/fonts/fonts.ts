import {Oswald} from "next/font/google"; 
import localFont from "next/font/local";

export const satoshi = localFont({
    src:[
        {
            path:'../../../public/assets/fonts/Satoshi-Regular.woff2',
            weight:'400',
        },
        {
            path:'../../../public/assets/fonts/Satoshi-Bold.woff2',
            weight:'700',
        },
    ],
    display:'swap',
    variable:'--body-font',
})


export const oswald = Oswald({
    weight:['400','700'],
    subsets:['latin'],
    display:'swap',
    variable:'--heading-font',
})

