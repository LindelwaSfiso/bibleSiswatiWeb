import List from "@mui/material/List";
import {availableVersions} from "./bible_data";
import Box from "@mui/material/Box";
import {Avatar, Button, Divider} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import React from "react";
import Drawer from "./drawer/Drawer";
import Typography from "@mui/material/Typography";
import {EmailOutlined, PhoneAndroid, VerifiedUserRounded} from "@mui/icons-material";

export default function () {
    return (
        <Drawer>
            <Container>
                <Typography variant="h3" color="primary" component={"h3"}>
                    About Me.
                </Typography>
                <Typography color="gray" component={"h4"} mt={1} style={{fontWeight: "bold"}}>
                    Developer details.
                </Typography>
                <Divider sx={{mb: 4, mt: 2}}/>

                <List>
                    <Box>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar variant={"circular"}>
                                    <VerifiedUserRounded/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Developer Full Name"
                                secondary={"Dlamini Lindelwa Sifiso"}
                            />
                        </ListItemButton>
                        <Divider/>
                    </Box>

                    <Divider/>

                    <Box>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar variant={"circular"}>
                                    <EmailOutlined/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Developer Email"
                                secondary={"sfisolindelwa@gmail.com"}
                            />
                        </ListItemButton>
                        <Divider/>
                    </Box>

                    <Divider/>

                    <Box>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar variant={"circular"}>
                                    <PhoneAndroid/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Developer Phone Number"
                                secondary={"+268 7648 0479"}
                            />
                        </ListItemButton>
                        <Divider/>
                    </Box>


                </List>

                <Typography variant="h6" color="gray" component={"h6"} sx={{mt: 4}}>
                    To download the android application of this website, use the button below:
                </Typography>

                <Button sx={{mt: 2}} variant={"contained"} href={"https://login"}  target={"_blank"}>
                    Download Android App
                </Button>
            </Container>
        </Drawer>
    );
}