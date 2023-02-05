import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Chat_History } from "../../data/index";
import { TextMessage, Timeline } from "./MessageTypes";

const Message = () => {
	return (
		<Box p={3}>
			<Stack direction={"column"} spacing={3}>
				{Chat_History.map(el=> {
                    
					switch (el.type) {
						case "divider":
							// timeline component
                            return <Timeline el={el}/>
						case "msg":
							switch (el.subtype) {
								case "img":
									// img
									break;
								case "doc":
									// doc
									break;
								case "link":
									// link
									break;

								default:
									 return<TextMessage el={el}/>
							}
							break;

						default:
							<></>;
					}
				})}
			</Stack>
		</Box>
	);
};

export default Message;
