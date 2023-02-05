import { Box, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/conversation";
import Chats from "./Chats";

const GeneralApp = () => {
	const theme=useTheme()
	return (
		<Stack direction="row">
			{/* Chats  */}
			<Chats />
			{/* conversations */}

			<Box sx={{ width: "calc(100vw - 420px)",
			 backgroundColor: theme.palette.mode === 'light' ?"#fff" :theme.palette.background.default, 
			 height: "100%" }}>
				<Conversation />
			</Box>
		</Stack>
	);
};

export default GeneralApp;
