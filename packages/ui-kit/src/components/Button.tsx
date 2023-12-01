import React from 'react';

type ButtonProps = React.PropsWithChildren<
    {
        onClick: () => void;
        color?: "main" | "sub"
    }>

const Button: React.FC<ButtonProps> = ({ onClick, children, color = "main" }) => {
    return <button style={{ backgroundColor: color === "main" ? 'pink' : 'blue' }} onClick={onClick}>{children}</button>
}

export default Button;