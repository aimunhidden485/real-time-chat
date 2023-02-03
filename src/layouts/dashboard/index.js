import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Switch, useTheme, styled } from "@mui/material";
import { Stack } from "@mui/system";
import { Gear } from "phosphor-react";
import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import useSettings from "../../hooks/useSettings";

const DashboardLayout = () => {
	const theme = useTheme();
	const [selected, setSelected] = useState(0);
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 16,
      height: 16,
      borderRadius: 8,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 20 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

const {onToggleMode}=useSettings()


	return (
		<Stack direction={'row'}>
			<Box p={2} sx={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", width: 100, height: "100vh", backgroundColor: theme.palette.background.paper }}>
				<Stack direction="column" alignItems="center" sx={{ width: "100%", height: '100%'}} spacing={3} justifyContent='space-between'>
					<Stack spacing={3} alignItems={'center'}>
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
								<IconButton onClick={() => setSelected(el.index)} sx={{ width: "max-content", color: theme.palette.mode==='light' ?"#000" : theme.palette.text.primary }} key={el.index}>
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
							<IconButton onClick={() => setSelected(3)} sx={{ width: "max-content", color: theme.palette.mode==='light' ?"#000" : theme.palette.text.primary }}>
								<Gear />
							</IconButton>
						)}
					</Stack>
          </Stack>
          <Stack alignItems={'center'} spacing={3}>
            {/* switch button */}
            <AntSwitch  onChange={()=>{onToggleMode()}} />
          <Avatar src={faker.image.avatar()}/>
          </Stack>
				</Stack>
			</Box>
			<Outlet />
		</Stack>
	);
};

export default DashboardLayout;
