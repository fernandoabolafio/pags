import React from 'react';
import Box from 'grommet/components/Box';
import './TipBubble.css'

const TipBubble = ({small, leftContent, rightContent, caret, style, children, noPropagate}) =>
  <Box align='center' style={{...style, zIndex: '2'}}>
    <Box
      style={ noPropagate ? {borderRadius: '10px', width: '100%'} : {borderRadius: '10px', width: '100%', ...style}}
      direction='row'
      responsive={false}
      align='center'
      pad={small ? 'large' : 'medium'}
      colorIndex="grey-2"
    >
      {children}
    </Box>
    {caret ? <div className='caret' /> : null}
  </Box>

export default TipBubble;
