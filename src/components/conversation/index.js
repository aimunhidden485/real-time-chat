import {  Box,Stack } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Message from "./Message";


const Conversation = () => {
	
	return (
		<Stack height={"100%"} maxHeight={"100vh"}>
			{/* header */}
			<Header/>
			{/* coversations */}
			<Box sx={{ flexGrow: 1, height: "auto" }}>
				<Message/>
			</Box>
			{/* footer */}
			<Footer/>
		</Stack>
	);
};

export default Conversation;
