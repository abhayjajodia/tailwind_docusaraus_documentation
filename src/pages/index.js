import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
// import Context from './data/context'

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import logo from "../../static/img/download.jpeg";
import video from "../../static/img/bg_video.mp4"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero ", styles.heroBanner)}>
       <video
                className={styles.video}
                playsInline="playsinline"
                autoPlay="autoplay"
                muted="muted"
                loop="loop"
              >
                <source src={video} type="video/mp4"></source>
              </video>
      <div className={clsx("container ", styles.herotext)}>
        <Heading as="h1" className={clsx("container ", styles.herotext2)}>
          <img className={clsx("logo ", styles.logo)} src={logo}></img>
          Tailwind CSS
        </Heading>
        <p className={clsx("hero_subtitle ", styles.heroSubtitle)}>
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.
        </p>
        <div className="uil-pos-absolute uil-bgp-center uil-left-0 uil-right-0 uil-d-none uil-m-auto md:uil-d-block css-1lgta2s"></div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Tailwind Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
