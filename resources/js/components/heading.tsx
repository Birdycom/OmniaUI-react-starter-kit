export default function Heading({
    title,
    description,
    variant = 'default',
}: {
    title: string;
    description?: string;
    variant?: 'default' | 'small';
}) {
    return (
        <header className={variant === 'small' ? '' : 'mb-2 flex flex-col gap-0.5'}>
            <h2
                className={
                    variant === 'small'
                        ? 'mb-0.1 text-base font-medium'
                        : 'font-1.2 font-semibold letterspacing-1'
                }
            >
                {title}
            </h2>
            {description && (
                <p className="font-0.8 app-fg-muted">{description}</p>
            )}
        </header>
    );
}
