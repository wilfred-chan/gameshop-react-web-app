import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Routes, Route, useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import {useContext, useEffect, useState} from "react";
import {UIContext} from "../../context/ui";
import axios from "axios";

const ProductPage = () => {
    const { game_id } = useParams();
    const [game, setGame] = useState({});
    useEffect(
        ()=>{
            const getGameDetails = async () => {
                const response = await axios.get("https://gameshop.herokuapp.com/api/games/" + game_id);
                setGame(response.data);
            };

            try {
                getGameDetails();
            } catch (error) {
                console.log(error);
    }},[]);


    return (
        <Grid container>
            <Grid item xs={6}>
                <div className="product_page">
                    <div className="row">
                        <div className="col-5">
                            <img src={game.cover_image}></img>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText primary="Game" secondary={game.title} />
                        <ListItemText primary="Price" secondary={game.price} />
                        <ListItemText primary="Description" secondary={game.price} />
                    </ListItem>
                </List>
            </Grid>
        </Grid>

    );
};
export default ProductPage;