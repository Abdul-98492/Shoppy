import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Search from "./Search";

import AddToCart from "./AddToCart";


const Component = styled(Box)`
  margin-left: 12%;
`;

const Bar = styled(AppBar)`
background-color:black;
`

const Header = () => {
  const logoURL =
    "https://us.123rf.com/450wm/jovanas/jovanas2104/jovanas210400390/167661471-sopping-logo-isolated-on-black-background.jpg?ver=6";


  return (
    <Bar>
      <Toolbar style={{ minHeight: 55 }}>
        <Component style={{ display: "flex" }}>
          <img src={logoURL} alt="logo" style={{ width: 50 }} /><p style={{ fontVariant: "small-caps" }}>Shoppy</p>
          <Box style={{ display: "flex" }}>

          </Box>
        </Component>
        <Search />
        <Box>
          <AddToCart />
        </Box>
      </Toolbar>
    </Bar>
  );
};

export default Header;
