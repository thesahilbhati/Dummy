import React from 'react'
import { Box, Typography, Container, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import 'animate.css'

const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: '170px',
    paddingBottom: '70px',
  },
  texthead: {
    fontSize: '50px',
    fontWeight: '600',
    color: '#343f52',
    lineHeight: '1.15',
    fontFamily: 'DM Serif Display',
    width: '85%',
    '@media(max-width:768px)': {
      fontSize: '42px',
      fontWeight: '600',
      color: '#343f52',
      lineHeight: '1.15',
      fontFamily: 'DM Serif Display',
      textAlign: 'center',
      width: '100%',
    },
    '@media(max-width:375px)': {
      fontSize: '35px',
      fontWeight: '600',
      color: '#343f52',
      lineHeight: '1.15',
      fontFamily: 'DM Serif Display',
      textAlign: 'center',
      width: '100%',
    },
    '@media(max-width:414px)': {
      fontSize: '35px',
      fontWeight: '600',
      color: '#343f52',
      lineHeight: '1.15',
      fontFamily: 'DM Serif Display',
      textAlign: 'center',
      width: '100%',
    },
    '@media(max-width:960px)': {
      fontSize: '35px',
      fontWeight: '600',
      color: '#343f52',
      lineHeight: '1.15',
      fontFamily: 'DM Serif Display',
      textAlign: 'center',
      width: '100%',
    },
  },
  subtext: {
    color: '#60697B',
    fontSize: '24px',
    fontWeight: '400',
    marginTop: '30px',
    width: '85%',
    '@media(max-width:768px)': {
      color: '#60697B',
      fontSize: '29px',
      fontWeight: '400',
      marginTop: '30px',
      textAlign: 'center',
      width: '100%',
    },
    '@media(max-width:375px)': {
      color: '#60697B',
      fontSize: '25px',
      fontWeight: '400',
      marginTop: '30px',
      textAlign: 'center',
      width: '100%',
    },
    '@media(max-width:414px)': {
      color: '#60697B',
      fontSize: '23px',
      fontWeight: '400',
      marginTop: '30px',
      textAlign: 'center',
      width: '100%',
    },
    '@media(max-width:960px)': {
      color: '#60697B',
      fontSize: '29px',
      fontWeight: '400',
      marginTop: '30px',
      textAlign: 'center',
      width: '100%',
    },
  },
  button: {
    backgroundColor: '#3f78e0',
    color: '#ffffff',
    border: '2px solid #3f78e0',
    borderRadius: '40px',
    minHeight: '58px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: '500',
    transition: '0.26s ease',
    minWidth: '159px',
    paddingBottom: '3px',
    textTransform: 'capitalize',
    marginRight: '15px',
    marginBottom: '10px',
    marginTop: '27px',
  },
  buttonsecond: {
    backgroundColor: '#ffffff',
    color: '#3f78e0',
    border: '2px solid #3f78e0',
    borderRadius: '40px',
    minHeight: '58px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: '500',
    transition: '0.26s ease',
    minWidth: '135px',
    paddingBottom: '3px',
    textTransform: 'capitalize',
    marginRight: '15px',
    marginBottom: '10px',
    marginTop: '27px',
  },
  boxbutton: {
    display: 'flex',
    alignItems: 'center',
    '@media(max-width:960px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  imageresponse: {
    width: '100%',
    borderRadius: '5px',
    '@media(max-width:960px)': {
      width: '100%',
      borderRadius: '5px',
      maxWidth: '70%',
    },
    '@media(max-width:768px)': {
      width: '100%',
      borderRadius: '5px',
      maxWidth: '70%',
    },
    '@media(max-width:375px)': {
      width: '100%',
      borderRadius: '5px',
      maxWidth: '100%',
    },
    '@media(max-width:414px)': {
      width: '100%',
      borderRadius: '5px',
      maxWidth: '100%',
    },
  },
  imagebox: {
    width: '100%',

  },
}))
function Banner() {
  const classes = useStyles()
  return (
    <Box className={classes.bannerbox}>
      <Container>
        <Box>
          <Grid container alignItems="center" spacing={10}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box>
                <Typography className={classes.texthead} textAlign="center">
                  We bring solutions to make life easier for our customers.
                </Typography>
                <Typography className={classes.subtext} textAlign="center">
                  We have considered our solutions to support every stage of
                  your growth.
                </Typography>
              </Box>
              <Box className={classes.boxbutton}>
                <Box textAlign="center">
                  <Button variant="contained" className={classes.button}>
                    Explore Now
                  </Button>
                </Box>
                <Box textAlign="center">
                  <Button variant="outlined" className={classes.buttonsecond}>
                    Free Trial
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box textAlign="center" className={classes.imagebox}>
                <img
                  src="images/about7.jpeg"
                  alt=""
                  className={classes.imageresponse}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Banner
