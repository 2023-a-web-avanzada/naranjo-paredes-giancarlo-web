// h_mui_konsta/components/EjemploKonsta.tsx
import {App, BlockTitle, List, ListItem, Navbar, Page} from "konsta/react";
import React from "react";
import {Button} from "@mui/material";
export default function EjemploKonsta(){
    return (<>
        <App theme="material">
            <Page>
                <Navbar
                    title="List"
                />
                <BlockTitle>Links, Header, Footer</BlockTitle>
                <List strongIos outlineIos>
                    <ListItem
                        link
                        header={
                            <Button variant='outlined'>
                                HOLA MUI
                            </Button>
                        }
                        title="John Doe"
                        after="Edit"
                    />
                </List>
            </Page>
        </App>
    </>)
}