import React from 'react';
import Grid from '@material-ui/core/Grid';
import Contact from 'Components/Contact';
// import USER from 'Constants/constant';

const Hompage = () => {
  return (
    <Grid>
      <Grid item>
        <div className="title">This is home page</div>
      </Grid>
      <Grid item>
        <Contact />
      </Grid>
      <div>
        <div className="title">This is home page</div>
      </div>
    </Grid>
  );
};
export default Hompage;
