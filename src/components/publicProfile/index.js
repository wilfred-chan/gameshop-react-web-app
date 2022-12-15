import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Avatar,
} from '@mui/material';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PublicProfileScreen = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});

  const FavoriteListItem = ({ game }) => {
    return (
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary={game} />
        </ListItemButton>
      </ListItem>
    );
  };

  useEffect(async () => {
    const response = await axios.get(
      `https://gameshop.herokuapp.com/api/users/${username}`
    );
    setUser(response.data);
  }, []);

  return (
    <Container>
        <Typography variant="h3" gutterBottom>
          {user.firstname} {user.lastname}'s Public Profile
        </Typography>
        <Grid container spacing={2} className="p-3 mb-2 bg-light text-dark">
          <Grid item xs={4}>
            <Avatar
              alt={`${user.firstname} ${user.lastname}'s avatar`}
              src={user.image_url}
              sx={{ width: 256, height: 256 }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" gutterBottom>
              {user.bio}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Here are my favorited games:
            </Typography>
            <List>
              {user.favorites &&
                user.favorites.map((game) => <FavoriteListItem game={game} />)}
            </List>
          </Grid>
        </Grid>
    </Container>
  );
};

export default PublicProfileScreen;
