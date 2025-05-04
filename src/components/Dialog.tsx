import { PropsWithChildren, useEffect, useRef } from "react";
import styles from "./Dialog.module.css";

const Dialog = ({ isOpen, onClose, children }: PropsWithChildren & { isOpen: boolean, onClose: () => void }) => {
    const ref = useRef<HTMLDialogElement>(null)

    useEffect(() => {

        if (isOpen) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }


    }, [isOpen])

    return (
        <dialog ref={ref} className={styles.Dialog}>
            <button onClick={() => {
                onClose();
            }}>close</button>
            {children}
        </dialog>
    )
}


export default Dialog;