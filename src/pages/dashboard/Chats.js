import { Avatar, Box, Button, Divider, IconButton, InputBase, Stack, Typography, Badge } from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { faker } from "@faker-js/faker";
import React from "react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
export const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}));
const Chats = () => {
	const theme=useTheme()
	
	const ChatBox = ({chat}) => {
		return (
			<Box sx={{  borderRadius: 1, backgroundColor: theme.palette.mode==='light'? "#fff" : theme.palette.background.default }} py={2.5}  px={1}>
				<Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
					<Stack direction={'row'} spacing={2}>
						{
							chat.online ? <StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
							<Avatar src={faker.image.avatar()} />
						</StyledBadge> : <Avatar src={faker.image.avatar()} />
						}
						<Stack spacing={0.5}>
							<Typography variant="subtitle2">{chat.name}</Typography>
							<Typography variant="caption">{chat.msg}</Typography>
						</Stack>
					</Stack>
					<Stack alignItems={'center'} spacing={1.7}>
						<Typography variant="caption">{chat.time}</Typography>
						<Badge color="primary" badgeContent={chat.unread}></Badge>
					</Stack>
				</Stack>
			</Box>
		);
	};
	const Search = styled("div")(({ theme }) => ({
		position: "relative",
		borderRadius: 20,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: alpha(theme.palette.background.default, 1),
		width: "100%",
		marginRight: theme.spacing(1),
		marginLeft: 0,
	}));
	const SearchIconWrapper = styled("div")(({ theme }) => ({
		postion: "absolute",
		height: "100%",
		padding: theme.spacing(0, 1),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		pointerEvents: "none",
	}));
	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: "inherit",
		"& .MuiInputBase-input": {
			padding: theme.spacing(1, 1, 1, 0),
			width: "100%",
		},
	}));
	
	return (
		<Box sx={{ postion: "relative",  width: 320, backgroundColor: theme.palette.mode==='light'? "#f8faff" : theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0, 0, 0.25)" }}>
			<Stack p={3} spacing={2} sx={{height: '100vh'}}>
				<Stack direction={"row"} alignItems="center" justifyContent={"space-between"}>
					<Typography variant="h4">Chats</Typography>
					<IconButton>
						<CircleDashed />
					</IconButton>
				</Stack>
				<Stack sx={{ width: "100%" }}>
					<Search>
						<SearchIconWrapper>
							<MagnifyingGlass color="#7096e6" />
						</SearchIconWrapper>
						<StyledInputBase placeholder="Search..." inputProps={{ "aria-label": "search" }} />
					</Search>
				</Stack>
				<Stack sx={{ width: "100%" }} spacing={2}>
					<Stack direction="row" alignItems={"center"} spacing={1.5}>
						<ArchiveBox />
						<Button>Archive</Button>
					</Stack>
					<Divider />
				</Stack>
				<Stack px={0.5}  direction={'column'} sx={{flexGrow: 1, overflowY: 'scroll', height: '100%'}}>
					<SimpleBarStyle timeout={500} clickOnTrack={false}>
					<Stack spacing={2}>
						<Typography variant="subtitle2">Pinned</Typography>
						{
							ChatList.filter(el=>el.pinned).map((chat, i)=>(
								<ChatBox chat={chat}/>))
						}
					</Stack>
					<Stack spacing={2} mt={2}>
						<Typography variant="subtitle2">All Chats</Typography>
						{
							ChatList.filter(el=>!el.pinned).map((chat, i)=>(
								<ChatBox chat={chat}/>))
						}
					</Stack>
					</SimpleBarStyle>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Chats;
