import React from 'react';
import { Container, Typography, Box, Paper, Link, Grid, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MapIcon from '@mui/icons-material/Map';

const ContactPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Pentru orice detaliu contacteaza-ne pe unul dintre aplicatiile prezentate mai jos sau telefon la 0724013053!
        </Typography>

        <Box my={4}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <IconButton component={Link} href="https://www.instagram.com/isellstorevalcea?igsh=bXA5bmpsYjZheHI3" target="_blank" color="inherit">
                <InstagramIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton component={Link} href="https://www.facebook.com/isellstorevalceaa" target="_blank" color="inherit">
                <FacebookIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton component={Link} href="https://www.csac.ro" target="_blank" color="inherit">
                <MapIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton component={Link} href="https://scanstart.ro/" target="_blank" color="inherit">
                <MapIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton component={Link} href="https://graffino.com/" target="_blank" color="inherit">
                <MapIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Box>

        <Box my={4}>
          <Typography variant="h6" component="h2" gutterBottom>
            Locatia noastra
          </Typography>
          <Box component="iframe"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2815.6200370775496!2d24.36786257661516!3d45.113769856751276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474d38b62d6b120b%3A0x581c28faa86aa607!2sStrada%20Matei%20Basarab%2021%2C%20R%C3%A2mnicu%20V%C3%A2lcea%20240616!5e0!3m2!1sro!2sro!4v1717711411575!5m2!1sro!2sro"
               width="100%" 
               height="400" 
               style={{ border: 0 }}
               allowFullScreen={false}
               loading="lazy"
               aria-hidden="false"
               tabIndex={0}></Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactPage;