import { Box, Stack } from "@mui/material";
import React from "react";
import Conversation from "../../components/conversation";
import Chats from "./Chats";

const GeneralApp = () => {
	return (
		<Stack direction="row">
			{/* Chats  */}
			<Chats />
			{/* conversations */}
			<Box sx={{ width: "calc(100vw - 420px)", backgroundColor: "#fff", height: "100%" }}>
				<Conversation />
			</Box>
		</Stack>
	);
};

export default GeneralApp;
