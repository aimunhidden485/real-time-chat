import { Box, Divider, IconButton, Link, Stack, Typography, useTheme } from "@mui/material";
import { DownloadSimple, Image } from "phosphor-react";

export const TextMessage = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" width="100%" alignItems={"center"} justifyContent={el.incoming ? "start" : "end"}>
			<Box p={1.5} sx={{ width: "max-content", backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5 }}>
				<Typography variant="body2" sx={{ color: el.incoming ? theme.palette.text : "#fff" }}>
					{el.message}
				</Typography>
			</Box>
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
		</Stack>
	);
};
export const DocMsg = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" width="100%" alignItems={"center"} justifyContent={el.incoming ? "start" : "end"}>
			<Box p={1.5} sx={{ width: "max-content", backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5 }}>
				<Stack spacing={2}>
					<Stack spacing={2} direction="row" alignItems="center" justifyContent={"space-between"} sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1.5 }}>
						<Image size={48} />
						<Typography variant='caption'>Abstract.png</Typography>
<IconButton><DownloadSimple/></IconButton>
					</Stack>
					<Typography variant="body2" sx={{ color: el.incoming ? theme.palette.text : "#fff" }}>
						{el.message}
					</Typography>
				</Stack>
			</Box>
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