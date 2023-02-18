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

    return (
        <Drawer>
            <Container>
                <Typography variant="h3" color="primary" component={"h3"}>
                    Verse of the Day.
                </Typography>
                <Divider sx={{mb: 4, mt: 2}}/>

                <VerseOfTheDay/>

            </Container>
        </Drawer>
    );
}