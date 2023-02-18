import React, {Fragment} from "react";
import ChangeBibleVersionForm from "./ChangeBibleVersionForm";
import Container from "@mui/material/Container";
import Verses from "./Verses";
import Drawer from "./drawer/Drawer"

export default class ReadBible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            version: window.location.pathname.replaceAll('/', "")
        }
    }

    render() {
        return (
            <Drawer>
                <Container>
                    <ChangeBibleVersionForm />
                    <Verses version={this.state.version}/>
                </Container>
            </Drawer>
        );
    }

}
