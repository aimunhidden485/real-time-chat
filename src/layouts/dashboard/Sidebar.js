import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import AntSwitch from "../../components/AntSwitch";
import useSettings from "../../hooks/useSettings";
import logo from "../../assets/Images/logo.ico";

const Sidebar = () => {
	const [selected, setSelected] = useState(0);
	const theme = useTheme();
	const { onToggleMode } = useSettings();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box p={2} sx={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", width: 100, height: "100vh", backgroundColor: theme.palette.background.paper }}>
			<Stack direction="column" alignItems="center" sx={{ width: "100%", height: "100%" }} spacing={3} justifyContent="space-between">
				<Stack spacing={3} alignItems={"center"}>
					{/* logo */}
					<Box sx={{ backgroundColor: theme.palette.primary.main, height: 64, width: 64, borderRadius: 1.5 }}>
						<img src={logo} alt="Logo" />
					</Box>
					{/* nav items */}
					<Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
						{Nav_Buttons.map((el) =>
							el.index === selected ? (
								<Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
									<IconButton sx={{ width: "max-content", color: "#fff" }} key={el.index}>
										{el.icon}
									</IconButton>
								</Box>
							) : (
								<IconButton
									onClick={() => setSelected(el.index)}
									sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
									key={el.index}
								>
									{el.icon}
								</IconButton>
							)
						)}
						<Divider sx={{ width: "48px" }} />
						{selected === 3 ? (
							<Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
								<IconButton sx={{ width: "max-content", color: "#fff" }}>
									<Gear />
								</IconButton>
							</Box>
						) : (
							<IconButton
								onClick={() => setSelected(3)}
								sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
							>
								<Gear />
							</IconButton>
						)}
					</Stack>
				</Stack>
				<Stack alignItems={"center"} spacing={3}>
					{/* switch button */}
					<AntSwitch
						onChange={() => {
							onToggleMode();
						}}
					/>
					<Avatar
						id="demo-positioned-button"
						aria-controls={open ? "demo-positioned-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
						src={faker.image.avatar()}
					/>
					<Menu
						id="demo-positioned-menu"
						aria-labelledby="demo-positioned-button"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
					>
						{Profile_Menu.map((el) => (
							<MenuItem onClick={handleClose}><Stack spacing={2} direction='row' sx={{width: 100}}><span>{el.icon}</span><span>{el.title}</span></Stack></MenuItem>
						))}
					</Menu>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Sidebar;
