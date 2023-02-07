import { faker } from "@faker-js/faker";
import { Avatar, Box, Button, Divider, IconButton, Slide, Stack, Typography, useTheme } from "@mui/material";
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, XCircle } from "phosphor-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleSideInfo } from "../redux/slices/app";
import AntSwitch from "./AntSwitch";

const Contact = () => {
	const sideInfo = useSelector((state) => state.app.sideInfo);
	const theme = useTheme();
	const dispatch = useDispatch();
	// const scaleIn = keyframes`
	//   0% {

	//           -webkit-transform: scale(0);
	//           transform: scale(0);
	//   opacity: 0;
	//           width: 0
	//         }
	//         100% {
	//           -webkit-transform: scale(1);
	//           transform: scale(1);
	//   opacity: 1;
	//           width: '320px',
	//         }
	//     }`;
	// const StyledBox = styled("div")(({ theme }) => ({
	// 	width: '320px',
	// 	transition: 'all 0.3s',
	// 	animation: `${scaleIn} 0.8s ease-out both`
	// }));
	return (
		<Slide in={sideInfo.open} timeout={500}>
			<Box sx={{ height: "100vh", width: "320px" }}>
				<Stack height="100%" width="100%">
					<Box
						sx={{
							boxShadow: " 0px 0px 2px rgba(0, 0, 0, 0.25)",
							width: "100%",
							backgroundColor: theme.palette.mode === "light" ? "f8faff" : theme.palette.background,
						}}
					>
						{/* header */}
						<Stack width="100%" direction="row" alignItems={"center"} justifyContent={"start"} spacing={3} p={2}>
							<IconButton
								onClick={() => {
									dispatch(ToggleSideInfo());
								}}
							>
								<XCircle />
							</IconButton>
							<Typography variant="subtitle2">Contact info</Typography>
						</Stack>
					</Box>
					{/* body */}
					<Stack width="100%" height={"100%"} sx={{ flexGrow: 1, overflowY: "scoll" }} p={3} spacing={2}>
							{/* hero section */}
						<Stack direction="row" alignItems={"center"} spacing={2}>
							<Avatar src={faker.image.avatar()} sx={{ height: 64, width: 64 }} />
							<Stack>
								<Typography variant="article">{faker.name.fullName()}</Typography>
								<Typography variant="body2">+946 847779 00</Typography>
							</Stack>
						</Stack>
						{/* call section */}
						<Stack direction="row" justifyContent={"center"} alignItems="center" spacing={2}>
							<Stack>
								<IconButton>
									<VideoCamera />{" "}
								</IconButton>
								<Typography variant="body2">Video</Typography>
							</Stack>
							<Stack>
								<IconButton>
									<Phone />
								</IconButton>
								<Typography variant="body2">Voice</Typography>
							</Stack>
						</Stack>
						<Divider />
						{/* about section */}
						<Stack spacing={0.5}>
							<Typography variant={"subtitle2"}>About</Typography>
							<Typography variant={"article"}>Hi There, I'm using you</Typography>
						</Stack>
						<Divider />
						<Stack direction={"row"} width="100%" justifyContent={"space-between"} alignItems={"center"}>
							<Typography variant="subtitle2">Media, docs and links</Typography>
							<Button endIcon={<CaretRight />}>201</Button>
						</Stack>
						<Stack direction="row" spacing={1}>
							{[1, 2, 3].map((el) => (
								<img src={faker.image.avatar()} alt="" style={{ width: "79px", height: "79px", borderRadius: "5px" }} />
							))}
						</Stack>
						<Divider />
						<Stack direction="row" alignItems={"center"} justifyContent="space-between">
							<Stack direction="row" alignItems={"center"} spacing={1}>
								<Star size={21} />
								<Typography>Starred Message</Typography>
							</Stack>
							<IconButton>
								<CaretRight />
							</IconButton>
						</Stack>
						<Divider />
						<Stack direction="row" alignItems={"center"} justifyContent="space-between">
							<Stack direction="row" alignItems={"center"} spacing={1}>
								<Bell size={21} />
								<Typography>Mute Notifications</Typography>
							</Stack>
							<AntSwitch />
						</Stack>
            <Divider/>
            <Stack spacing={2}>
              <Typography>1 group in common</Typography>
              <Stack direction="row" alignItems={"center"} spacing={2}>
							<Avatar src={faker.image.avatar()} sx={{ height: 64, width: 64 }} />
							<Stack>
								<Typography variant="article">{faker.name.fullName()}</Typography>
								<Typography variant="body2">Owl, patrot and you</Typography>
							</Stack>
						</Stack>
            </Stack>
            <Stack direction='row' spacing={2}>
              <Button fullWidth variant='outlined' startIcon={<Prohibit/>}>Block</Button>
              <Button fullWidth variant='outlined' startIcon={<Trash/>}>Delete</Button>
            </Stack>
					</Stack>
				</Stack>
			</Box>
		</Slide>
	);
};

export default Contact;
