import type { Auth } from '@/types/auth';

declare module 'react' {
    interface InputHTMLAttributes<T> {
        passwordrules?: string;
    }

    namespace JSX {
        interface IntrinsicElements {
            'iconify-icon': HTMLAttributes<HTMLElement> & {
                icon: string;
                width?: string;
                height?: string;
                inline?: boolean;
            };
        }
    }
}

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: Auth;
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}
