import React from 'react';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import pagsWelcome from '../assets/pags_welcome.png';
import './Pags.css';

const Pags = ({src, size}) =>
  <Box align='center'>
    <Image id='pags' className='pags' size={size} style={{maxWidth: '220px', maxHeight: '330px'}} src={src || pagsWelcome} />
  </Box>

export default Pags;
