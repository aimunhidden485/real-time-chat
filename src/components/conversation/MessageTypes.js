import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";

export const TextMessage = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" width="100%" alignItems={"center"} justifyContent={el.incoming ? "start" : "end"}>
			<Box p={1.5} sx={{ width: "max-content", backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5 }}>
				<Typography variant="body2" sx={{ color: el.incoming ? theme.palette.text : "#fff" }}>{el.message}</Typography>
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
