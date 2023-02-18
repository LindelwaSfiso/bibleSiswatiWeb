import List from "@mui/material/List";
import {availableVersions} from "./bible_data";
import Box from "@mui/material/Box";
import {Avatar, Divider} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import React from "react";
import {useNavigate} from "react-router-dom";
import Drawer from "./drawer/Drawer";
import Typography from "@mui/material/Typography";

export default function () {
    const navigate = useNavigate()

    const handleListItemClick = (event, bible) => {
        navigate(`/${bible.short}/`, {
            state: {
                "version": bible.short,
                "first_book": bible.first_book
            }
        })
    };

    return (
        <Drawer>
            <Container>
                <Typography variant="h3" color="primary" component={"h3"}>
                    Available Bible Versions.
                </Typography>
                <Typography color="gray" component={"h4"} mt={1} style={{fontWeight: "bold"}}>
                    A list of all available versions.
                </Typography>

                <List>
                    {availableVersions.map((bible, index) => {
                        return (
                            <Box key={index}>
                                <Divider/>
                                <ListItemButton
                                    onClick={(event) => handleListItemClick(event, bible)}>
                                    <ListItemAvatar>
                                        <Avatar variant={"circular"}>
                                            {bible.name}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={bible.name}
                                        secondary={bible.full_name}
                                    />
                                </ListItemButton>
                                <Divider/>
                            </Box>
                        );
                    })}
                </List>
            </Container>
        </Drawer>
    );
}