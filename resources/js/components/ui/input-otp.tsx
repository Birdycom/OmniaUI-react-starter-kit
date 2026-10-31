import { OtpInput } from '@birdycom/omniaui-react';
import type { ReactNode } from 'react';

// The input-otp API of the official kit on top of the OmniaUI one-time-code field: one real input with drawn cells.
export const REGEXP_ONLY_DIGITS = '^\\d+$';

type Props = {
    id?: string;
    name?: string;
    maxLength: number;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    autoFocus?: boolean;
    pattern?: string;
    children?: ReactNode;
};

export function InputOTP({ maxLength, pattern, children, ...props }: Props) {
    void pattern;
    void children;

    return <OtpInput length={maxLength} aria-label="One-time code" {...props} />;
}

/** The OmniaUI field draws its own cells: groups and slots are kept for compatibility and render nothing. */
export function InputOTPGroup(_props: { children?: ReactNode }) {
    return null;
}

export function InputOTPSlot(_props: { index: number }) {
    return null;
}
