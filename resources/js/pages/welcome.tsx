import { ButtonLink } from '@birdycom/omniaui-react';
import { Head, Link, usePage } from '@inertiajs/react';
import AppLogo from '@/components/app-logo';
import { Icon } from '@/components/icon';
import { dashboard, login } from '@/routes';
/* @chisel-registration */
import { register } from '@/routes';
/* @end-chisel-registration */

const features = [
    {
        icon: 'mdi:account-lock-outline',
        title: 'Authentication',
        text: 'Log in, register, forgot and reset password, e-mail verification.',
    },
    {
        icon: 'mdi:shield-check-outline',
        title: 'Two-factor',
        text: 'Authenticator apps with QR code setup and recovery codes.',
    },
    {
        icon: 'mdi:fingerprint',
        title: 'Passkeys',
        text: 'Sign in with Face ID, Touch ID or a security key.',
    },
    {
        icon: 'mdi:cog-outline',
        title: 'Settings',
        text: 'Profile, password, appearance and account deletion.',
    },
    {
        icon: 'mdi:theme-light-dark',
        title: 'Light and dark',
        text: 'Follows the system, or the choice saved in the settings.',
    },
    {
        icon: 'material-symbols:interests-outline',
        title: 'Webicons',
        text: 'MDI, Material Symbols, flags, spinners and more: only the icons you use are bundled.',
    },
];

const stats = [
    { value: '0', label: 'Tailwind classes' },
    { value: '< 15 kB', label: 'CSS for the whole app, gzipped' },
    { value: '100+', label: 'OmniaUI components' },
    { value: 'MIT', label: 'Free to use' },
];

const steps = [
    {
        title: 'Install',
        text: 'One laravel new command, then composer run dev.',
    },
    {
        title: 'Brand it',
        text: 'Change colors, radius and font in resources/css/theme.css.',
    },
    {
        title: 'Add blocks',
        text: 'Pricing, FAQ or a dashboard: npx omniaui add and done.',
    },
    { title: 'Ship', text: 'The build keeps only the CSS your app uses.' },
];

const faq = [
    {
        question: 'Do I need Tailwind?',
        answer: 'No. OmniaCSS generates the utilities and OmniaUI brings the components. Tailwind class names can mean something else here (w-5 is 5rem), so do not mix them.',
    },
    {
        question: 'Where do the icons come from?',
        answer: 'From the OmniaCSS webicons: Material Design Icons and MDI Light, Material Symbols, SVG Spinners, Flags and VSCode Icons. Name an icon in a component and the build bundles it: nothing is loaded from another server.',
    },
    {
        question: 'How do I change the look?',
        answer: 'Edit the theme tokens in resources/css/theme.css. Every component reads them, in light and in dark mode.',
    },
    {
        question: 'Is it free?',
        answer: 'Yes. The kit, OmniaCSS and OmniaUI are free. OmniaUI Pro adds extra blocks if you want them.',
    },
];

const resources = [
    {
        title: 'React guide',
        text: 'The OmniaUI React components and how they map to the HTML snippets.',
        href: 'https://omniaui.eu/ui/frameworks-react',
    },
    {
        title: 'Blocks',
        text: 'Dashboards, pricing, sign-in screens: add one with npx omniaui add.',
        href: 'https://omniaui.eu/ui/blocks',
    },
    {
        title: 'AI assistants',
        text: 'The OmniaCSS MCP server gives Claude, Cursor and Copilot the real classes.',
        href: 'https://omniacss.eu/docs/ai',
    },
];

const install = `$ laravel new my-app \\
    --using=birdycom/omniaui-react-starter-kit
$ cd my-app && composer run dev

  ✓ sign-in, two-factor, passkeys
  ✓ profile, password, appearance
  ✓ 40 tests pass`;

export default function Welcome() {
    const { auth, name } = usePage().props;
    const start = auth.user ? dashboard() : login();

    return (
        <div className="app-welcome">
            <Head title="Welcome" />
            <header className="app-welcome-bar">
                <Link className="app-brand" href="/">
                    <AppLogo />
                </Link>
                <nav className="gap-0.5 flex" aria-label="Account">
                    {auth.user ? (
                        <Link
                            className="oc-btn oc-btn--outline oc-btn--sm"
                            href={dashboard()}
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                className="oc-btn oc-btn--ghost oc-btn--sm"
                                href={login()}
                            >
                                Log in
                            </Link>
                            {/* @chisel-registration */}
                            <Link
                                className="oc-btn oc-btn--sm"
                                href={register()}
                            >
                                Register
                            </Link>
                            {/* @end-chisel-registration */}
                        </>
                    )}
                </nav>
            </header>

            <main>
                {/* Hero: the pitch on the left, the install commands on the right. */}
                <section className="oc-section-pad">
                    <div className="oc-container oc-split">
                        <div>
                            <p className="oc-eyebrow">
                                Laravel · Inertia · React · OmniaUI
                            </p>
                            <h1 className="oc-display">
                                Your app starts{' '}
                                <span className="oc-text-gradient">here</span>.
                            </h1>
                            <p className="oc-lead">
                                Sign-in, two-factor, passkeys and settings are
                                ready. Every screen is built with OmniaCSS
                                utilities and OmniaUI React components: no
                                Tailwind, no Radix, and only the CSS your app
                                uses.
                            </p>
                            <div className="gap-1 mt-2 flex flex-wrap">
                                <Link
                                    className="oc-btn oc-btn--lg"
                                    href={start}
                                >
                                    Get started
                                </Link>
                                <ButtonLink
                                    variant="outline"
                                    size="lg"
                                    href="https://omniaui.eu/ui/components"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Browse components
                                </ButtonLink>
                            </div>
                        </div>
                        <div className="app-welcome-code">
                            <span
                                className="oc-icon-tile oc-icon-tile--float oc-accent--green"
                                aria-hidden="true"
                            >
                                <Icon icon="mdi:shield-check-outline" />
                            </span>
                            <span
                                className="oc-icon-tile oc-icon-tile--float oc-accent--violet"
                                aria-hidden="true"
                            >
                                <Icon icon="mdi:fingerprint" />
                            </span>
                            <span
                                className="oc-icon-tile oc-icon-tile--float oc-accent--orange"
                                aria-hidden="true"
                            >
                                <Icon icon="mdi:palette-outline" />
                            </span>
                            <div className="oc-code-window">
                                <div className="oc-code-window__bar">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <span className="oc-code-window__title">
                                        terminal
                                    </span>
                                </div>
                                <pre className="oc-code-window__body">
                                    {install}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="oc-container">
                    <div className="oc-block-stats">
                        {stats.map((item) => (
                            <div key={item.label} className="oc-block-stat">
                                <div className="oc-block-stat-value">
                                    {item.value}
                                </div>
                                <div className="oc-block-stat-label">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="oc-block-features">
                    <h2>Everything a new app needs</h2>
                    <p>
                        The boring parts are done, tested and styled, so you can
                        start on what makes your app different.
                    </p>
                    <div className="oc-block-features-grid">
                        {features.map((item) => (
                            <div
                                key={item.title}
                                className="oc-block-feature-card"
                            >
                                <div className="oc-block-feature-icon">
                                    <Icon icon={item.icon} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <section className="oc-section-pad oc-section-pad--tight">
                    <div className="oc-container">
                        <p className="oc-eyebrow">Make it yours</p>
                        <h2 className="oc-display oc-display--md">
                            From install to{' '}
                            <span className="oc-text-gradient">launch</span>.
                        </h2>
                        <ol className="oc-steps">
                            {steps.map((step) => (
                                <li key={step.title}>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section
                    className="oc-block-faq"
                    aria-labelledby="oc-faq-title"
                >
                    <div className="oc-block-faq-inner">
                        <div className="oc-block-faq-head">
                            <p className="oc-eyebrow">FAQ</p>
                            <h2
                                className="oc-block-faq-title"
                                id="oc-faq-title"
                            >
                                Frequently asked questions
                            </h2>
                            <p className="oc-block-faq-lead">
                                Short answers to what people ask first.
                            </p>
                        </div>
                        <div className="oc-accordion oc-block-faq-list">
                            {faq.map((item, index) => (
                                <details
                                    key={item.question}
                                    className="oc-accordion-item"
                                    name="oc-faq"
                                    open={index === 0}
                                >
                                    <summary className="oc-accordion-trigger">
                                        {item.question}
                                    </summary>
                                    <div className="oc-accordion-content">
                                        {item.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                        <p className="oc-block-faq-more">
                            More questions?{' '}
                            <a
                                className="oc-link-arrow"
                                href="https://omniacss.eu/docs/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read the docs
                            </a>
                        </p>
                    </div>
                </section>

                <section className="app-welcome-links" aria-label="Resources">
                    {resources.map((item) => (
                        <a
                            key={item.title}
                            className="oc-card app-welcome-link"
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="oc-card-header">
                                <h2 className="oc-card-title">{item.title}</h2>
                                <p className="oc-card-description">
                                    {item.text}
                                </p>
                            </div>
                        </a>
                    ))}
                </section>

                <div className="oc-block-cta">
                    <h2>Ready to build?</h2>
                    <p>
                        Create an account and look around: every screen in this
                        kit is yours to change.
                    </p>
                    <div className="oc-block-hero-actions">
                        <Link className="oc-btn oc-btn--lg" href={start}>
                            Get started
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="app-welcome-footer">
                <span>
                    &copy; {new Date().getFullYear()} {name}
                </span>
                <span>
                    Built with{' '}
                    <a
                        className="oc-link"
                        href="https://omniacss.eu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        OmniaCSS
                    </a>{' '}
                    and{' '}
                    <a
                        className="oc-link"
                        href="https://omniaui.eu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        OmniaUI
                    </a>
                </span>
            </footer>
        </div>
    );
}
