import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import Image from 'mui-image';
import { FC } from 'react';
import WhoAmI from './WhoAmI';

type AboutMeInfo = {
  title: string;
  body: string;
};

type InfoListItemProps = AboutMeInfo;

const InfoListItem: FC<InfoListItemProps> = ({ title, body }) => {
  return (
    <Typography variant="body1" color="secondary" fontWeight="bold">
      {title}:
      <Typography variant="caption" fontSize={16} fontWeight="normal" display="inline" ml={1}>
        {body}
      </Typography>
    </Typography>
  );
};

const AboutMe = () => {
  const aboutMeInfo: AboutMeInfo[] = [
    { title: 'Name', body: 'Kristian Malamov' },
    { title: 'Age', body: '22' },
    { title: 'Phone', body: '+45 52 75 45 65' },
    { title: 'Email', body: 'kristian.malamov00@gmail.com' },
    { title: 'Address', body: 'Aarhus, Denmark' },
    { title: 'Experience', body: '3 years' }
  ];

  return (
    <Grid container alignItems="center">
      <Grid xs={5} item paddingRight={10}>
        <Image src="me.png" height={430} />
      </Grid>
      <Grid xs={7} item>
        <WhoAmI />
        <Box my={2}>
          <Divider />
        </Box>
        <Box mb={2}>
          <Grid container rowGap={2}>
            {aboutMeInfo.map((item) => (
              <Grid xs={6} item key={item.title + item.body}>
                <InfoListItem title={item.title} body={item.body} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Button color="primary" variant="contained" href="CV.pdf" target="_blank">
          Download CV
        </Button>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
