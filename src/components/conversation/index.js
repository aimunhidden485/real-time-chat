import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CaretDown, MagnifyingGlass, Phone, PhoneCall, VideoCamera } from "phosphor-react";
import React from "react";
import { StyledBadge } from "../../pages/dashboard/Chats";

const StyledInput = styled(TextField)(({ theme }) => ({
	"&. MuiInputBase-input": {
		paddignTop: "12px",
		paddingBottom: "12px",
	},
}));
const Conversation = () => {
	return (
		<Stack height={"100%"} maxHeight={"100vh"}>
			{/* header */}
			<Box py={2} sx={{ width: "100%", backgroundColor: "#f8faff", boxShadow: "0px 0px 2px rgba(0,0, 0, 0.25)" }}>
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
			<Box sx={{ height: 100, backgroundColor: "#f8faff", boxShadow: "0px 0px 2px rgba(0,0, 0, 0.25)" }}>
				<Stack height="100%" direction="row" alignItems={"center"} justifyContent={"space-between"} width="100%" px={2}>
					<StyledInput fullWidth placeholder='Write a message' variant='filled' inputProps={{disableUnderline: true, }}/>
				</Stack>
			</Box>
		</Stack>
	);
};

export default Conversation;
