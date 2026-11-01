import { Link } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';

/** OmniaUI breadcrumb (oc-breadcrumb); the last item is the current page. */
export function Breadcrumbs({
    breadcrumbs,
}: {
    breadcrumbs: BreadcrumbItem[];
}) {
    if (breadcrumbs.length === 0) {
        return null;
    }

    return (
        <nav className="oc-breadcrumb" aria-label="Breadcrumb">
            {breadcrumbs.map((item, index) =>
                index === breadcrumbs.length - 1 ? (
                    <span
                        key={index}
                        className="oc-breadcrumb-item"
                        aria-current="page"
                    >
                        {item.title}
                    </span>
                ) : (
                    <Link
                        key={index}
                        className="oc-breadcrumb-item"
                        href={item.href}
                    >
                        {item.title}
                    </Link>
                ),
            )}
        </nav>
    );
}
