import { PropsWithChildren, useEffect, useRef } from "react";
import styles from "./Dialog.module.css";
import { IconClose } from "./Icons";

const Dialog = ({ isOpen, isModal = false, hasCloseButton = true, onClose, children }: PropsWithChildren & { isOpen: boolean, onClose?: () => void, isModal?: boolean, hasCloseButton?: boolean }) => {
    const ref = useRef<HTMLDialogElement>(null)

    const handleAnimationEnd = (e: AnimationEvent) => {
        const animName = e.animationName;

        if (animName == styles["slide-out"]) {
            ref.current?.close();
        }
    }

    useEffect(() => {
        ref.current?.addEventListener("animationend", handleAnimationEnd);
        if (isOpen) {
            isModal ? ref.current?.showModal() : ref.current?.show();
            ref.current?.classList.add(styles.DialogOpen);
            ref.current?.classList.remove(styles.DialogClose);

        } else {
            ref.current?.classList.add(styles.DialogClose);
            ref.current?.classList.remove(styles.DialogOpen);
        }

        return () => {
            ref.current?.removeEventListener("animationend", handleAnimationEnd);
        }

    }, [isOpen])

    return (
        <dialog ref={ref} className={styles.Dialog} data-is-modal={isModal} >
            {hasCloseButton && <button onClick={() => {
                onClose && onClose();
            }}>
                <IconClose />
            </button>}
            {children}
        </dialog>
    )
}


export default Dialog;