import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Footer() {
    return (
        <Paper variant={"outlined"} style={{marginTop: 10, background: "rgb(0,0,0,0.12)"}}>
            <Box display={"block"} sx={{justifyContent: 'center'}} py={2}>
                <Grid container display={"flex"} justifyContent={"center"} spacing={0}>
                    <Grid item>
                        <IconButton color={"primary"}>
                            <Instagram/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton color={"primary"}>
                            <Twitter/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton color={"primary"}>
                            <Facebook/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Typography variant={"subtitle2"} textAlign={"center"} fontFamily={"Poppins"}
                            fontWeight={"bold"} color={"#1976d2"} mt={4}>
                    Copyright &copy; 2022
                </Typography>
            </Box>
        </Paper>
    );
}