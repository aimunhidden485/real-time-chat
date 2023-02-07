import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Chat_History } from "../../data/index";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMessage, Timeline } from "./MessageTypes";

const Message = () => {
	return (
		<Box p={3} sx={{height: '100%', overflowY: 'scoll'}}>
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
									return <MediaMsg el={el}/>
								case "reply":
									// img
									return <ReplyMsg el={el}/>
								case "doc":
									// doc
									return <DocMsg el={el}/>
								case "link":
									// link
									return <LinkMsg el={el}/>

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
