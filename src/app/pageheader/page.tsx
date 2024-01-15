"use client"

import * as React from "react"
import { useDataStore } from "@/zustand/auth"
import { useRouter } from "next/navigation"
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, MenuItem, Divider, NoSsr, Stack, Button }
    from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const pages = ["Home"]

export default function PageHeader() {
    const router = useRouter()
    const { email, image } = useDataStore()

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(e.currentTarget)
    }

    const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(e.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <NoSsr>
            <AppBar position="fixed" sx={{ background: "white" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            onClick={() => router.push("/")}
                            className="text-white rounded-full h-[50px] w-[50px] hidden
                            lg:flex items-center justify-center cursor-pointer"
                            sx={{ background: "black" }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left"
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" }
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography
                                            textAlign={"center"}
                                            onClick={() => router.push("/")}
                                        >
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { md: "flex" },
                                justifyContent: "center"
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => router.push("/")}
                                    sx={{ my: 2, display: "block" }}
                                >
                                    <Typography>
                                        {page}
                                    </Typography>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }} >
                            {image === "" ? (
                                <button
                                    onClick={() => router.push("/signin")}
                                    className="rounded-full bg-primary-button text-white font-semibold 
                                    px-8 py-2 drop-shadow-3xl w-auto"
                                >
                                    Sign In
                                </button>
                            ) : (
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                                    <Avatar src={image || ""} />
                                    <ArrowDropDownIcon />
                                </IconButton>
                            )}
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <Box sx={{ width: 200, p: 2 }}>
                                    <Stack flexDirection={"column"} alignItems={"center"}>
                                        <Avatar src={image || ""} />
                                        <Typography mt={1}>{email || ""}</Typography>
                                    </Stack>
                                    <Divider sx={{ my: 2 }} />
                                    <Typography fontWeight={700}>
                                        Profile
                                    </Typography>
                                    <Typography fontWeight={700}>
                                        Logout
                                    </Typography>
                                </Box>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </NoSsr>
    )
}



