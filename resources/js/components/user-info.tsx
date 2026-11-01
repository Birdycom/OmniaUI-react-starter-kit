import { useInitials } from '@/hooks/use-initials';
import type { User } from '@/types';

/** OmniaUI user (avatar + name, optionally the email). */
export function UserInfo({
    user,
    showEmail = false,
}: {
    user: User;
    showEmail?: boolean;
}) {
    const getInitials = useInitials();

    return (
        <span className="oc-user">
            <span className="oc-avatar oc-avatar--sm">
                {user.avatar ? (
                    <img src={user.avatar} alt={user.name} />
                ) : (
                    getInitials(user.name)
                )}
            </span>
            <span className="oc-user-text">
                <span className="oc-user-name">{user.name}</span>
                {showEmail && (
                    <span className="oc-user-email">{user.email}</span>
                )}
            </span>
        </span>
    );
}
