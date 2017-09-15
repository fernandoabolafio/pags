import React from 'react';
import Box from 'grommet/components/Box';
import './TipBubble.css'

const TipBubble = ({small, leftContent, rightContent, caret, style, children}) =>
  <Box align='center' style={{...style, zIndex: '2', maxWidth: '292px'}}>
    <Box
      style={{borderRadius: '10px', width: '100%'}}
      direction='row'
      responsive={false}
      pad={small ? 'large' : 'medium'}
      colorIndex="grey-2"
    >
      {children}
    </Box>
    {caret ? <div className='caret' /> : null}
  </Box>

export default TipBubble;
