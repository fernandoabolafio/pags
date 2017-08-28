import React from 'react';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import pagsWelcome from '../assets/pags_welcome.png';

const Pags = ({src}) =>
  <Box align='center'>
    <Image id='pags' size='medium' style={{maxWidth: '250px', maxHeight: '395px'}} src={src || pagsWelcome} />
  </Box>

export default Pags;
