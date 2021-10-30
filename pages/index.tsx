// @ts-nocheck
import type {NextPage} from 'next'
import {Container, Grid} from "@mui/material";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Name from "./Components/Name";
import Info from "./Components/Info";
import WorkWith from "./Components/WorkWith";

const Home: NextPage = () => {

    // @ts-ignore
    return (
        <>
            <Header/>
            <div>
                <Container>
                    <Grid container spacing={24}>
                        <Grid item>
                            <Name/>
                        </Grid>
                        <Grid item style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Info/>
                        </Grid>
                    </Grid>
                    <Grid>
                        <WorkWith/>
                    </Grid>
                </Container>
                <Footer/>
            </div>
        </>
    )
}

export default Home
