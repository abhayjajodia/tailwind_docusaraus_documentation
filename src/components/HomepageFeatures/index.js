import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import home1 from "../../../static/img/home1.jpg";
import video1 from "../../../static/img/1.mp4";
import video2 from "../../../static/img/m2.mp4";
import video3 from "../../../static/img/m3.mp4";
import bg from "../../../static/img/bg3.jpg";

const FeatureList = [
  {
    title: "Built for the modern web.",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Tailwind is unapologetically modern, and takes advantage of all the
        latest and greatest CSS features to make the developer experience as
        enjoyable as possible.
      </>
    ),
  },
  {
    title: "Ship faster and smaller.",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Tailwind automatically removes all unused CSS when building for
        production, which means your final CSS bundle is the smallest it could
        possibly be. In fact, most Tailwind projects ship less than 10kB of CSS
        to the client.
      </>
    ),
  },
  {
    title: "Build whatever you want, without touching your CSS file.",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Because Tailwind is so low-level, it never encourages you to design the
        same site twice. Some of your favorite sites are built with Tailwind,
        and you probably had no idea.
      </>
    ),
  },
];

const FeatureList2 = [
  {
    video: video1,
    title: "Ui Kit",
    description: (
      <>
        Tailwind Plus is a premium version of Tailwind that includes features
        like a design system UI kit, a set of advanced plugins, and priority
        support.
      </>
    ),
  },
  {
    video: video2,
    title: "Templates",
    description: (
      <>
        Tailwind Plus is a collection of beautiful, fully responsive UI
        components, designed and developed by us, the creators of Tailwind CSS.
        It's got hundreds of ready-to-use examples to choose from, and is
        guaranteed to help you find the perfect starting point for what you want
        to build.
      </>
    ),
  },
  {
    video: video3,
    title: "Ui Blocks",
    description: (
      <>
        Tailwind is the only CSS framework you'll ever need. It's the most
        versatile, customizable, and powerful CSS framework in the world.{" "}
      </>
    ),
  },
  {
    video: video1,
    title: "Ui Kit",
    description: (
      <>
        Tailwind Plus is a premium version of Tailwind that includes features
        like a design system UI kit, a set of advanced plugins, and priority
        support.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Feature2({ video, title, description }) {
  return (
    <div className={clsx("col col--5 justify-align-center", styles.col)}>
      <div className={clsx("card", styles.card)}>
        <video
          className={styles.video}
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={video} type="video/mp4"></source>
        </video>
        <div className="card-body text--center">
          <h5 className="card-title margin-top--md ">{title}</h5>

          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.img}></div>
      <div className={clsx("container ", styles.container)}>
          <div className={clsx("row", styles.row)}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>

        <div className="margin-top--xl">
          <img className={styles.home1} src={home1}></img>
        </div>
        <section className="top">
          <div className={clsx("row", styles.row1)}>
            {FeatureList2.map((props, idx) => (
              <Feature2 key={idx} {...props} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
