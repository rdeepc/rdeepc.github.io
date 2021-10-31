// @ts-nocheck
import type {NextPage} from 'next'
import {Container, Grid} from "@mui/material";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import MetaHead from "../components/MetaHead";
import Footer from "../components/Footer";
import Name from "../components/Name";
import Info from "../components/Info";
import WorkWith from "../components/WorkWith";

const Home: NextPage = () => {

    // @ts-ignore
    return (
        <>
            <MetaHead/>
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
