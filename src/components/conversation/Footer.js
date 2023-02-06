import { Avatar, Box, Divider, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";

const Footer = () => {
    const theme=useTheme()
    
const StyledInput = styled(TextField)(({ theme }) => ({
	"& .MuiInputBase-input": {
		paddigTop: "0",
		paddingBottom: "15px",
	},
}));
    return (
        <Box  sx={{ position: 'sticky',bottom: 0, right: 0, width: '100%',py: 1.5, backgroundColor: theme.palette.mode === 'light' ? "#f8faff":theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0, 0, 0.25)" }}>
				<Stack spacing={2} height="100%" direction="row" alignItems={"center"} justifyContent={"space-between"} width="100%" px={2}>
					<StyledInput 
					fullWidth 
					placeholder='Write a message...' 
					variant='filled' 
					
					InputProps={{disableUnderline: true, 
					startAdornment: <InputAdornment ><IconButton><LinkSimple/></IconButton></InputAdornment>,
					endAdornment: <InputAdornment ><IconButton><Smiley/></IconButton></InputAdornment>

					 }}/>
					 <Box sx={{width: 48, height: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5}}>
						<Stack height='100%' width='100%' alignItems={'center'} justifyContent='center'>
						<IconButton>
							<PaperPlaneTilt color='#fff'/>
						</IconButton>
						</Stack>

					 </Box>
				</Stack>
			</Box>
    );
};

export default Footer;