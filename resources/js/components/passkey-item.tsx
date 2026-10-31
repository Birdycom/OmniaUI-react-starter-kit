import { KeyRound, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import type { Passkey } from '@/types/auth';

type Props = {
    passkey: Passkey;
    onDelete: (id: number, onError: () => void) => void;
};

export default function PasskeyItem({ passkey, onDelete }: Props) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        setIsDeleting(true);
        onDelete(passkey.id, () => setIsDeleting(false));
    };

    return (
        <div className="flex align-items-center justify-between border-b p-1">
            <div className="flex align-items-center gap-1">
                <div className="flex h-2.5 w-2.5 noshrink align-items-center justify-center round-6 app-surface-muted">
                    <KeyRound className="h-1.2 w-1.2 app-fg-muted" />
                </div>
                <div className="space-y-1">
                    <div className="flex align-items-center gap-0.6">
                        <p className="font-medium letterspacing-1">
                            {passkey.name}
                        </p>
                        {passkey.authenticator && (
                            <span className="inline-flex align-items-center gap-0.2 round-3 app-surface-muted p-inline-0.5 p-block-0.1 font-0.7 font-medium letterspacing-8 app-fg-muted uppercase">
                                {passkey.authenticator}
                            </span>
                        )}
                    </div>
                    <p className="font-0.8 app-fg-muted">
                        Added {passkey.created_at_diff}
                        {passkey.last_used_at_diff && (
                            <>
                                <span className="m-inline-0.2 app-fg-muted">
                                    /
                                </span>
                                Last used {passkey.last_used_at_diff}
                            </>
                        )}
                    </p>
                </div>
            </div>

            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="app-fg-danger app-fg-danger"
                    >
                        <Trash2 className="h-1 w-1" />
                        <span className="sr-only">Remove</span>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Remove passkey</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to remove the "{passkey.name}"
                        passkey? You will no longer be able to use it to sign
                        in.
                    </DialogDescription>
                    <DialogFooter className="gap-0.5">
                        <DialogClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </DialogClose>
                        <Button
                            variant="destructive"
                            onClick={handleDelete}
                            disabled={isDeleting}
                        >
                            {isDeleting ? 'Removing...' : 'Remove passkey'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
