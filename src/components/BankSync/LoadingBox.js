import React from 'react';

import Box from 'grommet/components/Box';
import Spinning from 'grommet/components/icons/Spinning';

const LoadingBox = () => (
  <Box pad="medium">
    <Spinning size='large' />
  </Box>
);

export default LoadingBox;
