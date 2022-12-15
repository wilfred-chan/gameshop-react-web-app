import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Routes, Route, useParams, Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import {useContext, useEffect, useState} from "react";
import {UIContext} from "../../context/ui";
import axios from "axios";
import './index.css'
import {ImageList, ImageListItem} from "@mui/material";
import { UserContext } from '../../context/user';

const ProductPage = () => {
    const { game_id } = useParams();
    const [game, setGame] = useState({});
    const { user } = useContext(UserContext);
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
            <Grid item xs={7}>
                <header>
                    <Link to="/profile"><button className="btn btn-secondary">Back to Profile</button></Link>
                </header>
                <div className="product-page-card-img">
                    <div className="row">
                        <div className="col-12">
                            <img src={game.cover_image}></img>
                        </div>
                    </div>
                </div>

                <ImageList sx={{ width: 1120, height: 450 }} cols={6} rowHeight={164}>
                    {game.screenshots && game.screenshots.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
            <Grid item xs={5}>
                <List sx={{ marginTop:5, width: '100%', maxWidth: 800}}>
                    <div className="product-page-card-info">
                        <ListItem>
                            <div className="col-6 center">
                                <div className="p-3 mb-2 bg-light text-dark">
                                    <span><ListItemText primary="Game" secondary={game.title} /></span>
                                </div>
                            </div>

                            <div className="col-6 center">
                                <div className="p-3 mb-2 bg-light text-dark">
                                    <ListItemText primary="Price" secondary={"$"+game.price} />
                                </div>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div className="col-6 center">
                                <div className="p-3 mb-2 bg-light text-dark">
                                    <ListItemText primary="Rate" secondary={game.rating} />
                                </div>
                            </div>

                            <div className="col-6 center">
                                <div className="p-3 mb-2 bg-light text-dark">
                                    <ListItemText primary="ESRB rate" secondary={game.esrb_rating} />
                                </div>
                            </div>
                        </ListItem>
                    </div>

                    <div className="product-page-card-info">
                        <ListItem>
                            <div className="col-lg-12 center">
                                <div className="p-3 mb-2 bg-light text-dark">
                                    <span><ListItemText primary="Description" secondary={game.description} /></span>
                                </div>
                            </div>
                        </ListItem>
                    </div>
                </List>
            </Grid>
        </Grid>

    );
};
export default ProductPage;