import React from 'react';
import { Avatar, Box, Divider, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledBadge } from "../../pages/dashboard/Chats";
import { faker } from '@faker-js/faker';
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';
const Header = () => {
    const theme=useTheme()
    return (
        <Box py={2} sx={{ width: "100%", backgroundColor: theme.palette.mode === 'light' ? "#f8faff":theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0, 0, 0.25)" }}>
				<Stack height="100%" direction="row" alignItems={"center"} justifyContent={"space-between"} width="100%" px={2}>
					<Stack direction={"row"} spacing={1.5}>
						<Box>
							<StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
								<Avatar src={faker.image.avatar()} />
							</StyledBadge>
						</Box>
						<Stack>
							<Typography variant="subtitle2">{faker.name.fullName()}</Typography>
							<Typography variant="caption">Online</Typography>
						</Stack>
					</Stack>
					<Stack direction={"row"} spacing={2}>
						<IconButton>
							<VideoCamera />
						</IconButton>
						<IconButton>
							<Phone />
						</IconButton>
						<IconButton>
							<MagnifyingGlass />
						</IconButton>
						<Divider orientation="vertical" flexItem />
						<IconButton>
							<CaretDown />
						</IconButton>
					</Stack>
				</Stack>
			</Box>
    );
};

export default Header;