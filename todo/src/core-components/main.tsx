import { cx } from "class-variance-authority";
import type React from "react";

interface MainProps extends React.ComponentProps<"main">{}


export function Main({children, className, ...props}:MainProps){
    return (
        <main className={cx("mt-4 md:mt-8", className)} {...props}>
            {children}
        </main>
    )
}