import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<'a'> {
    children: string
    classe: string
}

export function NavLink(props: NavLinkProps) {
    return (
        <a {...props} className={`${props.classe} font-medium text-sm`}>
            {props.children}
        </a>
    )
}