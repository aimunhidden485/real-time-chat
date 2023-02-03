import { Avatar, Box, Button, Divider, IconButton, InputBase, Stack, Typography, Badge } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { faker } from "@faker-js/faker";
import React from "react";

const Chats = () => {
	const StyledBadge = styled(Badge)(({ theme }) => ({
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
	const ChatBox = () => {
		return (
			<Box sx={{  borderRadius: 1, backgroundColor: "#fff" }} py={2.5}  px={1}>
				<Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
					<Stack direction={'row'} spacing={2}>
						<StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
							<Avatar src={faker.image.avatar()} />
						</StyledBadge>
						<Stack spacing={0.5}>
							<Typography variant="subtitle2">Rafi chowdhury</Typography>
							<Typography variant="caption">how are you?</Typography>
						</Stack>
					</Stack>
					<Stack alignItems={'center'} spacing={1.7}>
						<Typography variant="caption">9.36</Typography>
						<Badge color="primary" badgeContent={2}></Badge>
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
		backgroundColor: alpha(theme.palette.background.paper, 1),
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
		<Box sx={{ postion: "relative", height: "100vh", width: 320, backgroundColor: "#f8faff", boxShadow: "0px 0px 2px rgba(0,0, 0, 0.25)" }}>
			<Stack p={3} spacing={2}>
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
				<Stack direction={'column'}>
					<Stack>
						<Typography variant="subtitle2">Pinned</Typography>
						<ChatBox />
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Chats;
