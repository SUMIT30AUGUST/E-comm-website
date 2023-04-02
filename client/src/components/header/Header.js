

import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";

//Components
import Search from "./Search";
import Custombuttons from "./CustomButtons";


// S should be capital in styledHeader
const StyledHeader = styled(AppBar)`
background: #2874f0;
height: 55px;
`
const Component = styled(Box)`
margin-left: 12%;
line-height: 0;
`

const SubHeading = styled(Typography)`
   font-size:11px ;
   font-style: italic;
`
const PlusImage = styled('img')({
    width: 10,
    height: 10
})

const CustomButtonwrapper = styled(Box)`
  margin: 0 10% 0 auto;
`

const Header = () => {
    const logoURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
    return (<>
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <Component>
                    <img src={logoURL} style={{ width: 75 }} alt="logo"></img>
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{ color: "#FFE500" }}>Plus </Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="sub-logo" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonwrapper>
                    <Custombuttons />
                </CustomButtonwrapper>
            </Toolbar>
        </StyledHeader>
    </>
    )
}

export default Header;