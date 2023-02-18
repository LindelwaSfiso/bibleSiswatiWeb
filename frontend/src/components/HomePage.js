import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    createTheme,
    Divider,
    Grid
} from "@mui/material";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {availableVersions} from "./bible_data";
import {Info, OpenInBrowser, OpenInBrowserRounded} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import VerseOfTheDay from "./VerseOfTheDay";
import Drawer from "./drawer/Drawer";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import IconButton from "@mui/material/IconButton";
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";


export default () => {
    const cardTheme = createTheme()
    const navigate = useNavigate()

    cardTheme.typography.h3 = {
        fontSize: '1.6rem',
        '@media (min-width: 600px)': {
            fontSize: '1.7rem',
        },
        [cardTheme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        },
    };

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
                    Welcome to SiSwati Bible Online.
                </Typography>
                <Typography color="gray" component={"h4"} mt={1} style={{fontWeight: "bold"}}>
                    This is an application for accessing the SiSwati Bible. It is free and easy to use.
                </Typography>
                <Divider sx={{mb: 4, mt: 2}}/>

                <VerseOfTheDay/>

                <Typography variant="h6" color="primary" component={"h6"} sx={{mt: 4}}>
                    Available Bible Versions
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