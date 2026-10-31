import { Link, usePage } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import { useRef } from 'react';
import { NavGroups, UserMenu } from '@/components/app-nav';
import AppLogo from '@/components/app-logo';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { dashboard } from '@/routes';
import type { AppLayoutProps } from '@/types';

/**
 * OmniaUI app shell: sidebar + header bar + scrolling content. The checkbox collapses the sidebar to icons (CSS only,
 * remembered in the sidebar_state cookie like the official kit); below 48rem the navigation opens in a sheet.
 */
export default function AppSidebarLayout({ children, breadcrumbs = [] }: AppLayoutProps) {
    const { sidebarOpen, name } = usePage().props;
    const sheet = useRef<HTMLDialogElement>(null);

    const remember = (collapsed: boolean) => {
        document.cookie = `sidebar_state=${!collapsed}; path=/; max-age=${60 * 60 * 24 * 7}`;
    };

    return (
        <div className="oc-block-shell">
            <input
                className="oc-block-shell-toggle"
                type="checkbox"
                id="app-sidebar-toggle"
                aria-label="Collapse sidebar"
                defaultChecked={sidebarOpen === false}
                onChange={(event) => remember(event.target.checked)}
            />

            <aside className="oc-sidebar" aria-label="Main navigation">
                <div className="oc-sidebar-header">
                    <Link className="oc-sidebar-menu-button oc-sidebar-menu-button--lg" href={dashboard()} prefetch>
                        <AppLogo />
                    </Link>
                </div>
                <div className="oc-sidebar-content">
                    <NavGroups />
                </div>
                <div className="oc-sidebar-footer">
                    <UserMenu id="user-menu-sidebar" />
                </div>
            </aside>

            <div className="oc-block-shell-main">
                <header className="oc-block-appbar">
                    <button className="oc-btn oc-btn--ghost oc-btn--icon oc-block-shell-menu-button" type="button" aria-label="Open menu" onClick={() => sheet.current?.showModal()}>
                        <Menu size={20} />
                    </button>
                    <label className="oc-btn oc-btn--ghost oc-btn--icon app-collapse" htmlFor="app-sidebar-toggle" title="Collapse sidebar">
                        <Menu size={20} />
                        <span className="oc-visually-hidden">Collapse sidebar</span>
                    </label>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <div className="oc-block-appbar-actions app-mobile-only">
                        <UserMenu id="user-menu-appbar" compact />
                    </div>
                </header>

                <main className="oc-block-shell-content">{children}</main>
            </div>

            <dialog ref={sheet} className="oc-sheet oc-sheet--left" closedby="any" aria-label={name}>
                <div className="oc-sheet-content">
                    <button className="oc-sheet-close" type="button" aria-label="Close" onClick={() => sheet.current?.close()}>
                        &times;
                    </button>
                    <div className="oc-sheet-header">
                        <h2 className="oc-sheet-title">{name}</h2>
                    </div>
                    <nav className="oc-sidebar app-sheet-nav" aria-label="Main navigation" onClick={() => sheet.current?.close()}>
                        <div className="oc-sidebar-content">
                            <NavGroups />
                        </div>
                    </nav>
                </div>
            </dialog>
        </div>
    );
}
