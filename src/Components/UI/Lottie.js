import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Homepage from 'Components/H';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import animationData from 'animations/landinganimation/data';
import ButtonArrow from 'Components/UI/ButtonArrow';
import Button from '@material-ui/core/Button';

const ThisLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology
                <br />
                to the Midwest
              </Typography>
              <Grid item>
                <Button variant="contained">Free Estimate</Button>
                <Grid item>
                  <Button variant="outlined">
                    Learn More
                    <ButtonArrow width={15} height={15} fill="red" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
    </>
  );
};
export default ThisLottie;
