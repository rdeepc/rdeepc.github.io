import {NextPage} from "next";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {AiFillMediumSquare} from "react-icons/ai";

const Footer: NextPage = () => {

    const openUrl = (value: number) => {
        const url = selectUrl(value)
        window.open(url, '_blank')
    }

    const selectUrl = (selected: number) => {
        switch (selected) {
            case 0:
                return 'https://www.linkedin.com/in/saumyashovanroy/'
            case 1:
                return 'https://github.com/rdeepc/'
            case 2:
                return 'https://medium.com/@rdeep'
        }
        return ''
    }

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={5}>
            <BottomNavigation
                onChange={(event, newValue) => {
                    openUrl(newValue)
                }}
            >
                <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon/>}/>
                <BottomNavigationAction label="Github" icon={<GitHubIcon/>}/>
                <BottomNavigationAction label="Medium"
                                        icon={<AiFillMediumSquare style={{height: "50", width: "50"}}/>}/>
            </BottomNavigation>
        </Paper>
    )
}

export default Footer
