import { Link, router, usePage } from '@inertiajs/react';
import { BookOpen, ChevronsUpDown, FolderGit2, LayoutGrid, LogOut, Settings } from 'lucide-react';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { useInitials } from '@/hooks/use-initials';
import { dashboard, logout } from '@/routes';
import { edit } from '@/routes/profile';
import type { NavItem } from '@/types';

// The navigation of the app: used by the sidebar layout, the mobile sheet and the header layout. Add items here.
export const mainNavItems: NavItem[] = [{ title: 'Dashboard', href: dashboard(), icon: LayoutGrid }];

export const footerNavItems: NavItem[] = [
    { title: 'Repository', href: 'https://github.com/Birdycom/omniaui-react-starter-kit', icon: FolderGit2 },
    { title: 'Documentation', href: 'https://omniaui.eu/ui/frameworks-react', icon: BookOpen },
];

/** OmniaUI sidebar groups (oc-sidebar-group / oc-sidebar-menu). */
export function NavGroups() {
    const { isCurrentUrl } = useCurrentUrl();

    return (
        <>
            <div className="oc-sidebar-group">
                <div className="oc-sidebar-group-label">Platform</div>
                <ul className="oc-sidebar-menu">
                    {mainNavItems.map((item) => (
                        <li key={item.title}>
                            <Link className="oc-sidebar-menu-button" href={item.href} prefetch aria-current={isCurrentUrl(item.href) ? 'page' : undefined}>
                                {item.icon && <item.icon className="oc-sidebar-menu-icon" />}
                                <span className="oc-sidebar-menu-label">{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="oc-sidebar-separator" />
            <div className="oc-sidebar-group">
                <ul className="oc-sidebar-menu">
                    {footerNavItems.map((item) => (
                        <li key={item.title}>
                            <a className="oc-sidebar-menu-button" href={typeof item.href === 'string' ? item.href : item.href.url} target="_blank" rel="noopener noreferrer">
                                {item.icon && <item.icon className="oc-sidebar-menu-icon" />}
                                <span className="oc-sidebar-menu-label">{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

/** The signed-in user with a popover menu (settings, log out). compact: avatar only, for the top bar. */
export function UserMenu({ id, compact = false }: { id: string; compact?: boolean }) {
    const { auth } = usePage().props;
    const initials = useInitials();

    if (!auth.user) {
        return null;
    }

    const user = (
        <span className="oc-user">
            <span className="oc-avatar oc-avatar--sm">{auth.user.avatar ? <img src={auth.user.avatar} alt="" /> : initials(auth.user.name)}</span>
            <span className="oc-user-text">
                <span className="oc-user-name">{auth.user.name}</span>
                <span className="oc-user-email">{auth.user.email}</span>
            </span>
        </span>
    );

    return (
        <>
            {compact ? (
                <button type="button" className="oc-btn oc-btn--ghost oc-btn--icon" popoverTarget={id} aria-label="User menu" data-test="sidebar-menu-button">
                    <span className="oc-avatar oc-avatar--sm">{initials(auth.user.name)}</span>
                </button>
            ) : (
                <button type="button" className="oc-sidebar-menu-button oc-sidebar-menu-button--lg" popoverTarget={id} data-test="sidebar-menu-button">
                    {user}
                    <ChevronsUpDown className="ml-auto" size={16} />
                </button>
            )}
            <div className="oc-dropdown-menu app-user-menu" id={id} popover="auto">
                <div className="oc-dropdown-label">{user}</div>
                <div className="oc-dropdown-separator" />
                <Link className="oc-dropdown-item" href={edit()} prefetch>
                    <Settings size={16} /> Settings
                </Link>
                <Link className="oc-dropdown-item w-full" href={logout()} as="button" onClick={() => router.flushAll()} data-test="logout-button">
                    <LogOut size={16} /> Log out
                </Link>
            </div>
        </>
    );
}
