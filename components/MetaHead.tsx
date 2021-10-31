import {NextPage} from "next";
import Head from "next/head";
import { GA_TRACKING_ID } from '../lib/gtag'

const MetaHead: NextPage = () => {
    return (
        <Head>
            <title>Saumya Shovan Roy</title>
            <link rel="icon" href="/image/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
            <meta name="description" content="Saumya Shovan Roy Website"/>
            <meta name="author" content="Saumya Shovan Roy"/>
            <meta name="keywords" content="Software Engineer, Dev, Site, Boston, Massachusetts, USA, Startup, Java, Spring Boot, JPA, Hibernate, Junit, Mockito, gRPC, REST, RabbitMQ, NodeJS, Express, JavaScript, ES6, React, SQL, Elastic Search, ELK, NoSQL, MongoDB, Redis, NoSQL, Gitlab, CI/CD, Git, Docker, Helm, Bash, Maven, Npm, Kubernetes, OpenShift, AWS, GCP, Microk8s, Nginx"/>
            <meta property="og:title" content="Saumya Shovan Roy" />
            <meta property="og:description" content="Saumya Shovan Roy Website" />
            <meta property="og:url" content="https://saumyaroy.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/image/favicon.ico" />

            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </Head>
    )
}

export default MetaHead
