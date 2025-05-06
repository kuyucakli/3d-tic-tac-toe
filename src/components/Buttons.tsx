import { PropsWithChildren } from "react";

const Button = ({ children, onClick }: PropsWithChildren & { onClick: () => void }) => {
    <button type="button" className="headlinelarge" onClick={onClick}>
        {children}
    </button>
}

export { Button };