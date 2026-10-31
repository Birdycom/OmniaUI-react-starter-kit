import { createContext, useCallback, useContext, useEffect, useId, useRef, useState } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { Slot } from '@/components/ui/slot';
import { cn } from '@/lib/utils';

// The shadcn Dialog API on top of a native <dialog class="oc-modal">: focus trap, Esc and the backdrop come from the
// browser. Controlled (open / onOpenChange) or uncontrolled (DialogTrigger / DialogClose).
type DialogState = { open: boolean; setOpen: (open: boolean) => void; titleId: string };

const DialogContext = createContext<DialogState | null>(null);

const useDialog = () => {
    const state = useContext(DialogContext);

    if (!state) {
        throw new Error('Dialog parts must be used inside <Dialog>.');
    }

    return state;
};

export function Dialog({ open, onOpenChange, children }: { open?: boolean; onOpenChange?: (open: boolean) => void; children: ReactNode }) {
    const [inner, setInner] = useState(false);
    const isOpen = open ?? inner;
    const titleId = useId();
    const setOpen = useCallback(
        (next: boolean) => {
            setInner(next);
            onOpenChange?.(next);
        },
        [onOpenChange],
    );

    return <DialogContext.Provider value={{ open: isOpen, setOpen, titleId }}>{children}</DialogContext.Provider>;
}

export function DialogTrigger({ asChild, ...props }: ComponentProps<'button'> & { asChild?: boolean }) {
    const { setOpen } = useDialog();
    const Comp = asChild ? Slot : 'button';

    return <Comp {...props} onClick={() => setOpen(true)} />;
}

export function DialogClose({ asChild, ...props }: ComponentProps<'button'> & { asChild?: boolean }) {
    const { setOpen } = useDialog();
    const Comp = asChild ? Slot : 'button';

    return <Comp {...props} onClick={() => setOpen(false)} />;
}

export function DialogContent({ className, children }: { className?: string; children: ReactNode }) {
    const { open, setOpen, titleId } = useDialog();
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = ref.current;

        if (!dialog) {
            return;
        }

        if (open && !dialog.open) {
            dialog.showModal();
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    return (
        <dialog
            ref={ref}
            className="oc-modal"
            aria-labelledby={titleId}
            onClose={() => setOpen(false)}
            onClick={(event) => event.target === ref.current && setOpen(false)}
        >
            <div className={cn('oc-modal-content', className)}>{open && <div className="oc-modal-body flex flex-col gap-1">{children}</div>}</div>
        </dialog>
    );
}

export function DialogHeader({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('oc-modal-header', className)} {...props} />;
}

export function DialogTitle({ className, ...props }: ComponentProps<'h2'>) {
    const { titleId } = useDialog();

    return <h2 id={titleId} className={cn('oc-modal-title', className)} {...props} />;
}

export function DialogDescription({ className, ...props }: ComponentProps<'p'>) {
    return <p className={cn('oc-modal-description', className)} {...props} />;
}

export function DialogFooter({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('oc-modal-footer', className)} {...props} />;
}
