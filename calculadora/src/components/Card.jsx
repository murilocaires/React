

export function Card({children, className, ...props}){
    return (
        <div className={` rounded-2xl bg-(--background) shadow-(--shadow)  ${className ? className : ""}`} {...props}>
            {children}
        </div>
    )
}