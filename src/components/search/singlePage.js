import {
  Container,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function SearchPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Link to="/">Back to home</Link>
      <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
        Search Games
      </Typography>
      <Container
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          id="input"
          label="Search anything..."
          name="input"
          autoFocus
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mx: 3 }}>
          Search
        </Button>
        <Grid container>
          <Grid item xs></Grid>
        </Grid>
      </Container>
    </Container>
  );
}
