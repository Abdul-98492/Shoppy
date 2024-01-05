import NavigationBar from "./NavigationBar";
import Banner from "./Banner"
import {Box,styled} from "@mui/material";

const Component=styled(Box)`
padding:10px;
background:#F2F2F2;
`;

const Home=()=>{
    return(
        <div>
        <NavigationBar />
        <Component>
        <Banner />
        </Component>
        </div>
    )
}

export default Home;