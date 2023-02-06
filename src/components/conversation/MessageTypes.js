import { Box, Divider, IconButton, Link, Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import { useState } from "react";
import { Message_options } from "../../data";

export const MsgOptions = ({ el }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<IconButton
				id="demo-positioned-button"
				aria-controls={open ? "demo-positioned-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<DotsThreeVertical />
			</IconButton>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
			>
				<Stack>
					{Message_options.map((el) => (
						<MenuItem onClick={handleClose} key={el.title}>{el.title}</MenuItem>
					))}
				</Stack>
			</Menu>
		</>
	);
};

export const TextMessage = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" width="100%" alignItems={"center"} justifyContent={el.incoming ? "start" : "end"}>
			<Box p={1.5} sx={{ width: "max-content", backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5 }}>
				<Typography variant="body2" sx={{ color: el.incoming ? theme.palette.text : "#fff" }}>
					{el.message}
				</Typography>
			</Box>
			<MsgOptions />
		</Stack>
	);
};
export const MediaMsg = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" width="100%" alignItems={"center"} justifyContent={el.incoming ? "start" : "end"}>
			<Box p={1.5} sx={{ width: "max-content", backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5 }}>
				<Stack spacing={1}>
					<img src={el.img} alt={el.msg} style={{ maxHeight: "210px", borderRadius: 1.5 }} />
					<Typography variant="body2" sx={{ color: el.incoming ? theme.palette.text : "#fff" }}>
						{el.message}
					</Typography>
				</Stack>
			</Box>
			<MsgOptions/>
		</Stack>
	);
};
export const DocMsg = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" width="100%" alignItems={"center"} justifyContent={el.incoming ? "start" : "end"}>
			<Box p={1.5} sx={{ width: "max-content", backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5 }}>
				<Stack spacing={2}>
					<Stack
						p={1}
						spacing={2}
						direction="row"
						alignItems="center"
						justifyContent={"space-between"}
						sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1.5 }}
					>
						<Image size={48} />
						<Typography variant="caption">Abstract.png</Typography>
						<IconButton>
							<DownloadSimple />
						</IconButton>
					</Stack>
					<Typography variant="body2" sx={{ color: el.incoming ? theme.palette.text : "#fff" }}>
						{el.message}
					</Typography>
				</Stack>
			</Box>
			<MsgOptions/>
		</Stack>
	);
};
export const ReplyMsg = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" width="100%" alignItems={"center"} justifyContent={el.incoming ? "start" : "end"}>
			<Box p={1.5} sx={{ width: "max-content", backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5 }}>
				<Stack spacing={2}>
					<Stack p={2} sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1.5 }}>
						<Typography variant="body2" sx={{ color: theme.palette.text }}>
							{el.message}
						</Typography>
					</Stack>
					<Typography variant="body2" sx={{ color: el.incoming ? theme.palette.text : "#fff" }}>
						{el.reply}
					</Typography>
				</Stack>
			</Box>
			<MsgOptions/>
		</Stack>
	);
};
export const LinkMsg = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" width="100%" alignItems={"center"} justifyContent={el.incoming ? "start" : "end"}>
			<Box p={1} sx={{ width: "max-content", backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5 }}>
				<Stack p={1} direction="column" alignItems={"center"} sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
					<Stack>
						<img src={el.preview} alt={el.msg} style={{ maxHeight: "210px", borderRadius: 1.5 }} />
					</Stack>
					<Stack>
						<Typography variant="body2" sx={{ color: el.incoming ? theme.palette.text : "#fff" }}>
							Creating chat app
						</Typography>
						<Typography component={Link} to="//https://youtube.com">
							https://youtube.com
						</Typography>
					</Stack>
					<Typography variant="body2" sx={{ color: theme.palette.text }}>
						{el.message}
					</Typography>
				</Stack>
			</Box>
			<MsgOptions/>
		</Stack>
	);
};

export const Timeline = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" width="100%" alignItems={"center"} justifyContent="space-between">
			<Divider width="46%" />
			<Typography variant="caption" sx={{ color: theme.palette.text }}>
				{el.text}
			</Typography>
			<Divider width="46%" />
		</Stack>
	);
};
