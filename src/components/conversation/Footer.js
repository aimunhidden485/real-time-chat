import { Avatar, Box, Divider, Fab, IconButton, InputAdornment, Stack, TextField, Tooltip, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Camera, File, Image, LinkSimple, PaperPlaneTilt, Smiley, Sticker, User } from "phosphor-react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const Actions = [
	{
		color: "#4da5fe",
		icon: <Image size={24} />,
		y: 102,
		title: "Photo/Video",
	},
	{
		color: "#1b8cfe",
		icon: <Sticker size={24} />,
		y: 172,
		title: "Stickers",
	},
	{
		color: "#0172e4",
		icon: <Camera size={24} />,
		y: 242,
		title: "Image",
	},
	{
		color: "#0159b2",
		icon: <File size={24} />,
		y: 312,
		title: "Document",
	},
	{
		color: "#013f7f",
		icon: <User size={24} />,
		y: 382,
		title: "Contact",
	},
];
const Footer = () => {
	const theme = useTheme();
	const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

	const StyledInput = styled(TextField)(({ theme }) => ({
		"& .MuiInputBase-input": {
			paddigTop: "0",
			paddingBottom: "15px",
		},
	}));
	const ChatInput = ({ setOpenEmojiPicker }) => {
		const [openActions, setOpenActions]=useState(false)
		return (
			<StyledInput
				fullWidth
				placeholder="Write a message..."
				variant="filled"
				InputProps={{
					disableUnderline: true,
					startAdornment: (
						<Stack sx={{ width: "max-content" }}>
							<Stack sx={{ position: "relative" }}>
								{Actions.map((el) => (
									<Tooltip title={el.title} placement="right">
										<Fab key={el.color} sx={{display: openActions? 'inline': 'none', position: "absolute", top: -el.y, backgroundColor: el.color }}>
											{el.icon}
										</Fab>
									</Tooltip>
								))}
							</Stack>
							<InputAdornment>
								<IconButton onClick={()=>setOpenActions(prev=>!prev)}>
									<LinkSimple />
								</IconButton>
							</InputAdornment>
						</Stack>
					),
					endAdornment: (
						<InputAdornment>
							<IconButton onClick={() => setOpenEmojiPicker((prev) => !prev)}>
								<Smiley />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		);
	};
	return (
		<Box
			sx={{
				position: "sticky",
				bottom: 0,
				right: 0,
				width: "100%",
				py: 1.5,
				backgroundColor: theme.palette.mode === "light" ? "#f8faff" : theme.palette.background.paper,
				boxShadow: "0px 0px 2px rgba(0,0, 0, 0.25)",
			}}
		>
			<Stack spacing={2} height="100%" direction="row" alignItems={"center"} justifyContent={"space-between"} width="100%" px={2}>
				{/* chat input */}
				<Stack width="100%">
					<Box sx={{ display: openEmojiPicker ? "inline" : "none", position: "absolute", bottom: 81, right: 100, zIndex: 10 }}>
						<EmojiPicker theme={theme.palette.mode} height={400} width={400} onEmojiClick={() => {}} />
					</Box>
					<ChatInput setOpenEmojiPicker={setOpenEmojiPicker} />
				</Stack>
				<Box sx={{ width: 48, height: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
					<Stack height="100%" width="100%" alignItems={"center"} justifyContent="center">
						<IconButton>
							<PaperPlaneTilt color="#fff" />
						</IconButton>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
};

export default Footer;
