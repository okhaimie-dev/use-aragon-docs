import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        useAragon is a library of React hooks that make it easy to integrate
        your Aragon OSx DAO directly into your dApps UI.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Using the useAragon library, developers can easily create highly
        performant and responsive web applications that interact with Aragon
        DAOs, without having to worry about the intricacies of interacting with
        the contracts.
      </>
    ),
  },
  {
    title: "Simplify Aragon SDK",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        useAragon further simplifies the process by providing a set of hooks
        that encapsulate common interactions, managing state, caching, deduping,
        lazy loading, dev tools, and a bunch more optimizations.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
