// @ts-nocheck
import {NextPage} from "next";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import ReactWordcloud from "react-wordcloud";

const WorkWith: NextPage = () => {

    const words = [
        {
            text: 'Java',
            value: 100,
        },
        {
            text: 'Spring Boot',
            value: 100,
        },
        {
            text: 'JPA',
            value: 100,
        },
        {
            text: 'Hibernate',
            value: 100,
        },
        {
            text: 'Junit',
            value: 100,
        },
        {
            text: 'Mockito',
            value: 100,
        },
        {
            text: 'gRPC',
            value: 100,
        },
        {
            text: 'REST',
            value: 100,
        },
        {
            text: 'RabbitMQ',
            value: 100,
        },
        {
            text: 'NodeJS',
            value: 100,
        },
        {
            text: 'Express',
            value: 100,
        },
        {
            text: 'JavaScript',
            value: 100,
        },
        {
            text: 'ES6',
            value: 100,
        },
        {
            text: 'React',
            value: 100,
        },
        {
            text: 'SQL',
            value: 100,
        },
        {
            text: 'Elastic Search',
            value: 100,
        },
        {
            text: 'ELK',
            value: 100,
        },
        {
            text: 'NoSQL',
            value: 100,
        },
        {
            text: 'MongoDB',
            value: 100,
        },
        {
            text: 'Redis',
            value: 100,
        },
        {
            text: 'NoSQL',
            value: 100,
        },
        {
            text: 'Gitlab',
            value: 100,
        },
        {
            text: 'CI/CD',
            value: 100,
        },
        {
            text: 'Git',
            value: 100,
        },
        {
            text: 'Docker',
            value: 100,
        },
        {
            text: 'Helm',
            value: 100,
        },
        {
            text: 'Bash',
            value: 100,
        },
        {
            text: 'Maven',
            value: 100,
        },
        {
            text: 'Npm',
            value: 100,
        },
        {
            text: 'Kubernetes',
            value: 100,
        },
        {
            text: 'OpenShift',
            value: 100,
        },
        {
            text: 'AWS',
            value: 100,
        },
        {
            text: 'GCP',
            value: 100,
        },
        {
            text: 'Microk8s',
            value: 100,
        },
        {
            text: 'Nginx',
            value: 100,
        },
    ]

    const wordsAlt = "Software Engineer, Dev, Site, Boston, Massachusetts, USA, Startup, Java, Spring Boot, JPA, Hibernate, Junit, Mockito, gRPC, REST, RabbitMQ, NodeJS, Express, JavaScript, ES6, React, SQL, Elastic Search, ELK, NoSQL, MongoDB, Redis, NoSQL, Gitlab, CI/CD, Git, Docker, Helm, Bash, Maven, Npm, Kubernetes, OpenShift, AWS, GCP, Microk8s, Nginx"

    const options = {
        colors: ["rgba(0,0,0,0.88)"],
        enableTooltip: false,
        deterministic: false,
        fontFamily: "Roboto",
        fontSizes: [5, 60],
        fontStyle: "normal",
        fontWeight: "normal",
        padding: 10,
        rotations: 3,
        rotationAngles: [0, 90],
        scale: "sqrt",
        spiral: "archimedean",
        transitionDuration: 10000
    };

    const callbacks = {
        onWordClick: null,
        onWordMouseOver: null,
        onWordMouseOut: null,
        getWordTooltip: null
    }

    // @ts-ignore
    return (
        <Container style={{padding: "50px"}}>
            <Typography style={{textAlign: "center", fontSize: "3em"}}>I work with</Typography>
            {process.browser && <ReactWordcloud words={words} alt={wordsAlt} options={options} callbacks={callbacks}/>}
        </Container>
    )
}

export default WorkWith
