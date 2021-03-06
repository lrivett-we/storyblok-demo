import React from 'react'
import Components from '../components.js';
import Grid from '../objects/grid';
import SbEditable from 'storyblok-react'

const GridBlok = (props) => (
  <SbEditable content={props.blok}>
    <Grid>
      {props.blok.columns.map((blok) =>
        React.createElement(Components[blok.component], {key: blok._uid, blok: blok})
      )}
    </Grid>
  </SbEditable>
)

export default GridBlok
