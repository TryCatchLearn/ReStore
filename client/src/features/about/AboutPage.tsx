import React from 'react';
import { Container, Typography, Box, Paper, } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          iSellStore Ramnicu Valcea
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Vanzare/Cumparare/ Buy Back Telefoane
        </Typography>
        <Typography variant="body1" paragraph>
          Reparatii Calculatoare/Laptop-uri
        </Typography>
        <Typography variant="body1" paragraph>
          Inlocuire Display / Inlocuire Baterii / Reparatii pe loc!
        </Typography>
        <Typography variant="body1" paragraph>
          Suntem magazin GSM. Pretul este fix. Telefoane SH, fara garantie. Doar telefoane, fara accesorii.
        </Typography>
        
        <Box my={4}>
          <Typography variant="h6" component="h2" gutterBottom>
           Program
          </Typography>
          <Typography variant="body1" paragraph>
           Luni-Sambata 09:00-19:00
          </Typography>
        </Box>
        
        <Box my={4}>
          <Typography variant="h6" component="h2" gutterBottom>
           Rezervari
          </Typography>
          <Typography variant="body1" paragraph>
           Rezervarile sunt valabile 7 zile. Timp pentru client sa viziteze magazinul nostru pentru a vedea si a cumpara produsul sau produsele dorite.
          </Typography>
        </Box>

        <Box my={4}>
          <Typography variant="h6" component="h2" gutterBottom>
            Contacteaza-ne
          </Typography>
          <Typography variant="body1" paragraph>
            Va rugam sa sunati in cazul in care doriti informatii despre telefoane. Multumim!
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AboutPage;