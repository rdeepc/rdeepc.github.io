import {NextPage} from "next";
import {Container} from "@mui/material";
import {motion} from "framer-motion";
import Typography from "@mui/material/Typography";

const Name: NextPage = () => {

    return (
        <motion.div
            animate={{x: 10, y: 10, opacity: 1}}
            transition={{
                delay: 1,
                x: {type: "spring", stiffness: 100},
                default: {duration: 5},
            }}
        >
            <Container>
                <Typography style={{fontSize: "6em"}}>Saumya</Typography>
                <Typography style={{fontSize: "6em"}}>Shovan</Typography>
                <Typography style={{fontSize: "6em"}}>Roy</Typography>
            </Container>
        </motion.div>
    )
}

export default Name
