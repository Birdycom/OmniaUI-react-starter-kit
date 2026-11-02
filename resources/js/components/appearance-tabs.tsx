import type { HTMLAttributes } from 'react';
import { Icon } from '@/components/icon';
import type { Appearance } from '@/hooks/use-appearance';
import { useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';

/** Light / Dark / System as the OmniaUI segmented control (radio buttons, so arrow keys work). */
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
            className={cn('oc-segmented', className)}
            role="radiogroup"
            aria-label="Appearance"
            {...props}
        >
            {tabs.map(({ value, icon, label }) => (
                <label
                    key={value}
                    className="oc-segmented-item inline-flex align-items-center gap-0.5"
                >
                    <input
                        type="radio"
                        name="appearance"
                        value={value}
                        checked={appearance === value}
                        onChange={() => updateAppearance(value)}
                    />
                    <Icon icon={icon} className="h-1 w-1" />
                    {label}
                </label>
            ))}
        </div>
    );
}
