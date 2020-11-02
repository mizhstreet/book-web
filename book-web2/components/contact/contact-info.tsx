import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import MapIcon from "@material-ui/icons/Map";
import MailIcon from "@material-ui/icons/Mail";
import { grey } from "../../constants/color";
import GoogleMapReact from "google-map-react";
import { Marker } from "./marker";

const useStyles = makeStyles({
  icon: {
    fontSize: 65,
    color: "#59349e",
    marginBottom: 18,
    marginTop: 4,
    marginRight: 20,
  },
  infoHeadline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  infoDescription: {
    color: grey,
    fontWeight: "bold",
  },
});

const ContactInfo: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box mt={10}></Box>
      <Grid spacing={4} container>
        <Grid item sm={6} xs={12}>
          <Box display="flex" alignItems="center" mb={8}>
            <MapIcon className={classes.icon} />
            <Box>
              <Typography className={classes.infoHeadline} component="h3">
                Address
              </Typography>
              <Typography className={classes.infoDescription}>Book junky</Typography>
              <Typography className={classes.infoDescription}>51 Guilty Street</Typography>
              <Typography className={classes.infoDescription}>Clerkenwell</Typography>
              <Typography className={classes.infoDescription}>London, NW8 2JW</Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mb={8}>
            <PhoneIcon className={classes.icon} />
            <Box>
              <Typography className={classes.infoHeadline} component="h3">
                Phone & Fax
              </Typography>
              <Typography className={classes.infoDescription}>Call: 070 2931 1524</Typography>
              <Typography className={classes.infoDescription}>Fax: 070 2931 1525</Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mb={8}>
            <MailIcon className={classes.icon} />
            <Box>
              <Typography className={classes.infoHeadline} component="h3">
                Email
              </Typography>
              <Typography className={classes.infoDescription}>Info: minhcf2013@gmail.com</Typography>
              <Typography className={classes.infoDescription}>Sales & return: minhcf2013@gmail.com</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box width={"100%"} maxHeight={700} minHeight={400} height={"100%"}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyAMTVwvl61qeQa0pdqn914dolMuQYqbLzg" }}
              defaultCenter={{
                lat: 43.080405,
                lng: 141.361766,
              }}
              defaultZoom={17}
            >
              <Marker lat={43.080405} lng={141.361766} />
            </GoogleMapReact>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export { ContactInfo };
