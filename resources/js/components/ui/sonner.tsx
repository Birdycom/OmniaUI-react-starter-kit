import { useEffect, useState } from 'react';

// Toasts with the OmniaUI toast markup. toast.success('Saved') anywhere; <Toaster /> renders them once in app.tsx.
type Item = { id: number; variant: 'success' | 'error' | 'info'; title: string };
type Listener = (item: Item) => void;

const listeners = new Set<Listener>();
let nextId = 1;

const push = (variant: Item['variant']) => (title: string) => listeners.forEach((listen) => listen({ id: nextId++, variant, title }));

export const toast = Object.assign(push('info'), { success: push('success'), error: push('error'), info: push('info'), warning: push('info') });

export function Toaster() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const listen: Listener = (item) => {
            setItems((current) => [...current, item]);
            window.setTimeout(() => setItems((current) => current.filter((i) => i.id !== item.id)), 4000);
        };

        listeners.add(listen);

        return () => {
            listeners.delete(listen);
        };
    }, []);

    return (
        <div className="oc-toast-container" aria-live="polite">
            {items.map((item) => (
                <div key={item.id} className={`oc-toast oc-toast--${item.variant}`} role="status">
                    <div className="oc-toast-body">
                        <p className="oc-toast-title">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
