import { Icon } from '@/components/icon';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AlertError({
    errors,
    title,
}: {
    errors: string[];
    title?: string;
}) {
    return (
        <Alert variant="destructive">
            <Icon icon="mdi:alert-circle-outline" className="h-1 w-1" />
            <AlertTitle>{title || 'Something went wrong.'}</AlertTitle>
            <AlertDescription>
                <ul className="font-0.8 list-inside list-disc">
                    {Array.from(new Set(errors)).map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            </AlertDescription>
        </Alert>
    );
}
