import type { HTMLAttributes } from 'react';
import { Icon } from '@/components/icon';
import type { Appearance } from '@/hooks/use-appearance';
import { useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';

export default function AppearanceToggleTab({
    className = '',
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { appearance, updateAppearance } = useAppearance();

    const tabs: { value: Appearance; icon: string; label: string }[] = [
        { value: 'light', icon: 'mdi:white-balance-sunny', label: 'Light' },
        { value: 'dark', icon: 'mdi:weather-night', label: 'Dark' },
        { value: 'system', icon: 'mdi:monitor', label: 'System' },
    ];

    return (
        <div
            className={cn(
                'gap-0.2 rounded-lg bg-linen-20 p-0.2 dark:bg-neutral-800 inline-flex',
                className,
            )}
            {...props}
        >
            {tabs.map(({ value, icon, label }) => (
                <button
                    key={value}
                    onClick={() => updateAppearance(value)}
                    className={cn(
                        'align-items-center round-3 p-inline-0.8 p-block-0.3 flex transition-colors',
                        appearance === value
                            ? 'bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
                            : 'text-black-2 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60',
                    )}
                >
                    <Icon icon={icon} className="h-1 w-1" />
                    <span className="ml-0.3 font-0.8">{label}</span>
                </button>
            ))}
        </div>
    );
}
