import React from 'react';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import pagsWelcome from '../assets/pags_welcome.png';

const Pags = ({src, size}) =>
  <Box align='center'>
    <Image id='pags' size={size} style={{maxWidth: '250px', maxHeight: '370px'}} src={src || pagsWelcome} />
  </Box>

export default Pags;
