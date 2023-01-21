import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";

function Home(props) {
  return (
    <Page title="Marketplace | MetaArts">
      <Box>
        <Banner />
      </Box>
    </Page>
  );
}

export default Home;
