import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from "phosphor-react";
import React from "react";
import { StyledBadge } from "../../pages/dashboard/Chats";

const StyledInput = styled(TextField)(({ theme }) => ({
	"& .MuiInputBase-input": {
		paddigTop: "0",
		paddingBottom: "15px",
	},
}));
const Conversation = () => {
	const theme=useTheme()
	return (
		<Stack height={"100%"} maxHeight={"100vh"}>
			{/* header */}
			<Box py={2} sx={{ width: "100%", backgroundColor: theme.palette.mode === 'light' ? "#f8faff":theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0, 0, 0.25)" }}>
				<Stack height="100%" direction="row" alignItems={"center"} justifyContent={"space-between"} width="100%" px={2}>
					<Stack direction={"row"} spacing={1.5}>
						<Box>
							<StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
								<Avatar src={faker.image.avatar()} />
							</StyledBadge>
						</Box>
						<Stack>
							<Typography variant="subtitle2">{faker.name.fullName()}</Typography>
							<Typography variant="caption">Online</Typography>
						</Stack>
					</Stack>
					<Stack direction={"row"} spacing={2}>
						<IconButton>
							<VideoCamera />
						</IconButton>
						<IconButton>
							<Phone />
						</IconButton>
						<IconButton>
							<MagnifyingGlass />
						</IconButton>
						<Divider orientation="vertical" flexItem />
						<IconButton>
							<CaretDown />
						</IconButton>
					</Stack>
				</Stack>
			</Box>
			{/* coversations */}
			<Box sx={{ flexGrow: 1, height: "auto" }}></Box>
			{/* footer */}
			<Box sx={{ py: 1.5, backgroundColor: theme.palette.mode === 'light' ? "#f8faff":theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0, 0, 0.25)" }}>
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
		</Stack>
	);
};

export default Conversation;
