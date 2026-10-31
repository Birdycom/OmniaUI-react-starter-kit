import { Badge, ChartLine, Heading, Progress, StatCard, StatCardGrid, Status, Table, User } from '@birdycom/omniaui-react';
import { Head, usePage } from '@inertiajs/react';
import { BarChart3, Mail, Users } from 'lucide-react';
import { dashboard } from '@/routes';

// A starting point built from free OmniaUI React components: KPI tiles, an SVG line chart (no chart library), status
// rows and a table. Replace the sample numbers with your own data.
const signups = [
    { name: 'Ada Lovelace', plan: 'Team', variant: 'success', state: 'Active', days: 0 },
    { name: 'Alan Turing', plan: 'Pro', variant: 'success', state: 'Active', days: 3 },
    { name: 'Grace Hopper', plan: 'Free', variant: 'warning', state: 'Trial', days: 6 },
    { name: 'Linus Torvalds', plan: 'Pro', variant: 'secondary', state: 'Invited', days: 9 },
] as const;

export default function Dashboard() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Dashboard" />
            <div className="app-dashboard">
                <Heading level={1} title={`Welcome back, ${auth.user.name}`} description="Here is what happens in your app today." />

                <StatCardGrid>
                    <StatCard value="2,481" label="Visitors" trend="+12%" tone="accent" stripe icon={<Users size={20} />} />
                    <StatCard value="€ 18,240" label="Revenue" trend="+4.6%" tone="success" stripe icon={<BarChart3 size={20} />} />
                    <StatCard value="312" label="Messages" trend="-3%" trendDirection="down" tone="warning" stripe icon={<Mail size={20} />} />
                </StatCardGrid>

                <div className="app-dashboard-grid">
                    <div className="oc-card">
                        <div className="oc-card-content">
                            <ChartLine
                                title="Visitors"
                                sub="Last six months"
                                value="2,481"
                                variant="area"
                                series={[
                                    { name: 'Desktop', values: [186, 305, 237, 273, 309, 354] },
                                    { name: 'Mobile', values: [80, 200, 160, 190, 230, 262] },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="oc-card">
                        <div className="oc-card-header">
                            <h2 className="oc-card-title">System status</h2>
                            <p className="oc-card-description">Background work of this app</p>
                        </div>
                        <div className="oc-card-content flex flex-col gap-1">
                            <Status tone="done" meta="06:30">Nightly backup finished</Status>
                            <Status tone="working" meta="now">Sending the newsletter</Status>
                            <Status tone="waiting" meta="2">Jobs in the queue</Status>
                            <p className="app-fg-muted font-0.8">Storage used</p>
                            <Progress value={68} levels aria-label="Storage used" />
                        </div>
                    </div>
                </div>

                <div className="oc-card">
                    <div className="oc-card-header">
                        <h2 className="oc-card-title">Recent sign-ups</h2>
                    </div>
                    <div className="oc-card-content">
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Plan</th>
                                    <th>Status</th>
                                    <th className="text-right">Joined</th>
                                </tr>
                            </thead>
                            <tbody>
                                {signups.map((row) => (
                                    <tr key={row.name}>
                                        <td>
                                            <User name={row.name} avatarSize="sm" />
                                        </td>
                                        <td>{row.plan}</td>
                                        <td>
                                            <Badge variant={row.variant}>{row.state}</Badge>
                                        </td>
                                        <td className="text-right">{new Date(Date.now() - row.days * 864e5).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [{ title: 'Dashboard', href: dashboard() }],
};
