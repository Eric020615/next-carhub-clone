import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    btnType?: "button" | "submit",
    containerStyles: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
}