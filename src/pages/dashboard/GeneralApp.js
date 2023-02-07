import { Box, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/conversation";
import Chats from "./Chats";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
	const theme = useTheme();
	const sideInfo = useSelector((state) => state.app.sideInfo);

	return (
		<Stack direction="row">
			{/* Chats  */}
			<Chats />
			{/* conversations */}
			<Box
				sx={{
					// width: sideInfo.open ? "calc(100vw - 740px)" : "calc(100vw- 420px)",
					flexGrow: 1,
					backgroundColor: theme.palette.mode === "light" ? "#f0f4fa" : theme.palette.background.default,
					position: "relative",
					height: "100vh",
					overflowY: "scroll",
				}}
			>
				<Conversation />
			</Box>
			{
				sideInfo.open && <Contact />
			}
			
		</Stack>
	);
};

export default GeneralApp;
