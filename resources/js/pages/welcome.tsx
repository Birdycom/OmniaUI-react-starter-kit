import { ButtonLink } from '@birdycom/omniaui-react';
import { Head, Link, usePage } from '@inertiajs/react';
import AppLogo from '@/components/app-logo';
import { dashboard, login } from '@/routes';
/* @chisel-registration */
import { register } from '@/routes';
/* @end-chisel-registration */

const resources = [
    { title: 'React guide', text: 'The OmniaUI React components and how they map to the HTML snippets.', href: 'https://omniaui.eu/ui/frameworks-react' },
    { title: 'Blocks', text: 'Dashboards, pricing, sign-in screens: add one with npx omniaui add.', href: 'https://omniaui.eu/ui/blocks' },
    { title: 'AI assistants', text: 'The OmniaCSS MCP server gives Claude, Cursor and Copilot the real classes.', href: 'https://omniacss.eu/docs/ai' },
];

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <header className="app-welcome-bar">
                <Link className="app-brand" href="/">
                    <AppLogo />
                </Link>
                <nav className="flex gap-0.5" aria-label="Account">
                    {auth.user ? (
                        <Link className="oc-btn oc-btn--outline oc-btn--sm" href={dashboard()}>
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link className="oc-btn oc-btn--ghost oc-btn--sm" href={login()}>
                                Log in
                            </Link>
                            {/* @chisel-registration */}
                            <Link className="oc-btn oc-btn--sm" href={register()}>
                                Register
                            </Link>
                            {/* @end-chisel-registration */}
                        </>
                    )}
                </nav>
            </header>

            <main>
                <div className="oc-block-hero">
                    <span className="oc-block-hero-badge">Laravel · Inertia · React · OmniaUI</span>
                    <h1>Your app starts here</h1>
                    <p>
                        Sign-in, two-factor, passkeys and settings are ready. Every screen is built with OmniaCSS utilities and OmniaUI React components: no
                        Tailwind, no Radix, and only the CSS your app uses.
                    </p>
                    <div className="oc-block-hero-actions">
                        <Link className="oc-btn oc-btn--lg" href={auth.user ? dashboard() : login()}>
                            Get started
                        </Link>
                        <ButtonLink variant="outline" size="lg" href="https://omniaui.eu/ui/components" target="_blank">
                            Browse components
                        </ButtonLink>
                    </div>
                </div>

                <section className="app-welcome-links" aria-label="Resources">
                    {resources.map((item) => (
                        <a key={item.title} className="oc-card app-welcome-link" href={item.href} target="_blank" rel="noopener noreferrer">
                            <div className="oc-card-header">
                                <h2 className="oc-card-title">{item.title}</h2>
                                <p className="oc-card-description">{item.text}</p>
                            </div>
                        </a>
                    ))}
                </section>
            </main>
        </>
    );
}
