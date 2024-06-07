import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { useAppSelector } from '../../app/store/configureStore';
import BasketTable from './BasketTable';

export default function BasketPage() {
    const { basket } = useAppSelector(state => state.basket);

    if (!basket) return <Typography variant="h3">Your basket is empty</Typography>

    return (
        <>
            <BasketTable items={basket.items} />
            <Grid container>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>  
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
          <TextField label="Enter something" variant="outlined" sx={{ mr: 1 }} />
          <Button
            variant="contained"
            component={RouterLink}
            to="/calendar"
          >
            Go to Calendar
          </Button>
        </Box>
        </>

    )
}