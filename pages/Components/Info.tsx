import {NextPage} from "next";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";

const Info: NextPage = () => {

    return (
        <Container>
            <Typography style={{fontSize: "3em"}}>Software Engineer</Typography>
            <Typography style={{fontSize: "1.2em"}}>Experienced in Cloud Technologies</Typography>
            <Typography style={{fontSize: "1.2em"}}>Interested in Opensource and Self Hosted
                technologies</Typography>
            <Typography style={{fontSize: "1.2em"}}>Based on Boston, MA, USA</Typography>
        </Container>
    )
}

export default Info
