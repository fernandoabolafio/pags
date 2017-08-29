import React from 'react';
import Box from 'grommet/components/Box';
import './TipBubble.css'

const TipBubble = ({small, leftContent, rightContent, caret, style}) =>
  <Box align='center' style={{...style, zIndex: '2'}}>
    <Box
      style={{borderRadius: '10px', width: '100%'}}
      direction='row'
      responsive={false}
      pad={small ? 'medium' : 'small'}
      colorIndex="grey-2"
    >
      {leftContent ?
      <Box pad={{horizontal: 'small'}}>
        {leftContent}
      </Box>
      : null}
      <Box pad={leftContent ? 'none' : {horizontal: 'medium'}}>
        {rightContent}
      </Box>
    </Box>
    {caret ? <div className='caret' /> : null}
  </Box>

export default TipBubble;
