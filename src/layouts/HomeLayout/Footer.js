import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  List,
  ListItem,
  makeStyles,
  Button,
  TextField,
} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import TelegramIcon from '@material-ui/icons/Telegram'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'

const useStyles = makeStyles((theme) => ({
  footerSection: {
    background: '#FEFEFE',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(9),
    },
  },
  borderBottmo: {
    overflow: 'hidden',
    background: '#000',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },

  largeIcon: {
    width: 18,
    height: 18,
    marginRight: '8px',
  },
  icons: {
    justify: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justify: 'center',
    },
  },
  button: {
    backgroundColor: '#fab758',
    color: '#ffffff',
    border: '2px solid #fab758',
    borderRadius: '40px',
    minHeight: '50px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: '500',
    transition: '0.26s ease',
    minWidth: '160px',
    paddingBottom: '3px',
    textTransform: 'capitalize',
    marginRight: '15px',
    marginBottom: '10px',
    marginTop: '27px',
  },
  join: {
    color: '#ffffff',
    fontSize: '30px',
  },
  textFild: {
    position: 'relative',

    '& button': {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      backgroundColor: '#3F78E0',
      minWidth: '90px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#000',
      },
    },
  },
}))

export default function Liquidity() {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.footerSection}>
        <Box style={{ margin: '20px 10px 0' }}>
          <Container maxWidth="lg">
            <Grid
              container
              style={{ color: 'white' }}
              justify="space-around"
              spacing={1}
            >
              <Grid item xs={12} sm={4} md={4}>
                <Grid
                  container
                  direction="column"
                  spacing={2}
                  alignItems="flex-start"
                >
                  <Grid item>
                    {' '}
                    {/* <Logo width="100" />{" "} */}
                    <img
                      src="/images/logo.png"
                      alt=""
                      width="100%"
                      style={{ maxWidth: '200px', margin: '0 auto' }}
                    />
                  </Grid>
                  <Grid item>
                    {' '}
                    <Box mt={2}>
                      <Typography
                        style={{
                          fontSize: '17px',
                          fontWeight: 'normal',
                          width: '54%',
                          color: '#60697B',
                        }}
                      >
                        © 2021 Sandbox. All rights reserved.
                      </Typography>{' '}
                    </Box>
                    <Box mt={2}>
                      <List>
                        <ListItem>
                          <TwitterIcon
                            style={{ margin: '0 8px', color: '#5DAED5' }}
                          />

                          <FacebookIcon
                            style={{ margin: '0 8px', color: '#4470CF' }}
                          />

                          <TelegramIcon
                            style={{ margin: '0 8px', color: '#D07EAD' }}
                          />

                          <InstagramIcon
                            style={{ margin: '0 8px', color: '#D53581' }}
                          />

                          <YouTubeIcon
                            style={{ margin: '0 8px', color: '#C8312B' }}
                          />
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Grid container spacing={1}>
                  <Grid item xs={6} sm={4} md={4}>
                    <Typography
                      className="footerTitle"
                      variant="h4"
                      style={{ color: '#343F52' }}
                    >
                      Get in Touch
                    </Typography>

                    <List className="listingFooter">
                      <Typography
                        style={{
                          fontSize: '15px',
                          width: '60%',
                          lineHeight: '30px',
                          color: '#60697B',
                        }}
                      >
                        Moonshine St. 14/05 Light City, London, United Kingdom
                      </Typography>

                      <Typography
                        style={{
                          fontSize: '15px',
                          width: '54%',
                          lineHeight: '30px',
                          color: '#60697B',
                          marginTop: '15px',
                        }}
                      >
                        info@email.com
                      </Typography>
                      <Typography
                        style={{
                          fontSize: '15px',
                          width: '55%',
                          lineHeight: '30px',
                          color: '#60697B',
                        }}
                      >
                        +00 (123) 456 78 90
                      </Typography>
                    </List>
                  </Grid>

                  <Grid item xs={6} sm={4} md={4}>
                    <Typography
                      className="footerTitle"
                      variant="h4"
                      style={{ color: '#343F52' }}
                    >
                      Learn More
                    </Typography>
                    <List className="listingFooter">
                      <ListItem style={{ color: '#60697B' }}>About Us</ListItem>
                      <ListItem style={{ color: '#60697B' }}>
                        Our Story
                      </ListItem>
                      <ListItem style={{ color: '#60697B' }}>Projects</ListItem>
                      <ListItem style={{ color: '#60697B' }}>
                        Terms of Use
                      </ListItem>
                      <ListItem style={{ color: '#60697B' }}>
                        Privacy Policy
                      </ListItem>
                    </List>{' '}
                  </Grid>
                  <Grid item xs={6} sm={4} md={4}>
                    <Typography
                      className="footerTitle"
                      variant="h4"
                      style={{ color: '#343F52' }}
                    >
                      Our Newsletter
                    </Typography>
                    <List className="listingFooter">
                      <Typography
                        style={{
                          fontSize: '15px',
                          lineHeight: '30px',
                          color: '#60697B',
                        }}
                      >
                        Subscribe to our newsletter to get our news & deals
                        delivered to you.
                      </Typography>
                    </List>{' '}
                    <Box mt={3} className={classes.textFild}>
                      <TextField
                        id="outlined-basic"
                        fullWidth
                        variant="outlined"
                        placeholder="Email Address"
                      />
                      <Button>Join</Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}
