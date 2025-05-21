import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const plugins = [
    {
        name: 'VoidChest',
        path: '/docs/voidchest',
        description: 'A special auto sell chest plugin. Create unique chests and get rich the smart way!',
        icon: '🖥️',
    },
];

function HeroSection() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.hero)}>
            <div className="container">
                <div className={styles.heroContent}>
                    <Heading as="h1" className={styles.heroTitle}>
                        {siteConfig.title}
                    </Heading>
                    <p className={styles.heroSubtitle}>
                        Quality Minecraft Plugins by GeorgeV22
                    </p>
                </div>
            </div>
        </header>
    );
}

function PluginGrid() {
    return (
        <section className={styles.plugins}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Available Plugins</h2>
                <div className={styles.pluginGrid}>
                    {plugins.map((plugin) => (
                        <Link
                            key={plugin.name}
                            to={plugin.path}
                            className={styles.pluginCard}>
                            <div className={styles.pluginIcon}>{plugin.icon}</div>
                            <h3>{plugin.name}</h3>
                            <p>{plugin.description}</p>
                        </Link>
                    ))}
                    <div className={styles.comingSoonCard}>
                        <div className={styles.pluginIcon}>🚧</div>
                        <h3>More Plugins Coming Soon</h3>
                        <p>Stay tuned for new releases!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="Documentation for GeorgeV22's Minecraft plugins">
            <HeroSection />
            <main>
                <PluginGrid />
            </main>
        </Layout>
    );
}