import React from 'react';
import { Header, Navbar, Wrapper, Footer } from '../../Components';
import NewsCard from './Sections/NewsCard.jsx';
import WelcomeCard from './Sections/WelcomeCard.jsx';
import CelebrationCard from './Sections/CelebrationCard.jsx'
import SystemCard from './Sections/SystemCard.jsx'
import SiteCard from './Sections/SiteCard.jsx'
import UsefulformCard from './Sections/UsefulformCard.jsx'
import UsefulInformationCard from './Sections/UsefulInformationCard.jsx';
import EventCard from './Sections/EventCard.jsx'
import JobCard from './Sections/JobCard.jsx';
import ProcedureCard from './Sections/ProcedureCard.jsx';
import GuideCard from './Sections/GuideCard.jsx';
import GalleryCard from './Sections/GalleryCard.jsx'
import { Box, Grid } from '@mui/material';

const Home = () => {
  return (
    <>
      <Navbar />
      <Wrapper>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={4}>
            <NewsCard />
          </Grid>
          <Grid item xs={8}>
            <WelcomeCard />
          </Grid>
        </Grid>


        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={4}>
            <CelebrationCard />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <SystemCard />
              </Grid>
              <Grid item xs={12}>
                <SiteCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>


        <Grid container spacing={4} sx={{ mt: 2}}>
          <Grid item xs={4}>
            <EventCard />
          </Grid>
          <Grid item xs={4}>
            <UsefulformCard />
          </Grid>
          <Grid item xs={4}>
            <UsefulInformationCard />
          </Grid>
        </Grid>


        <Grid container spacing={4} sx={{ mt: 2}}>
          <Grid item xs={4}>
            <JobCard />
          </Grid>
          <Grid item xs={4}>
            <ProcedureCard />
          </Grid>
          <Grid item xs={4}>
            <GuideCard />
          </Grid>
        </Grid>

        <Box sx={{ width:"100%", mt: 6}}>
          <GalleryCard />
        </Box>



      </Wrapper>
      <Footer />
    </>
  );
}

export default Home;
