import React from 'react';

import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Image from 'grommet/components/Image';

import { defaultUser } from '../../test/mockData';

const UserSelectionBox = ({ handleClick }) => {
  const userItemStyles = {
    background: 'white',
    width: '90%',
    margin: 'auto',
    maxWidth: '300px',
    border: '1px solid rgba(0, 0, 0, 0.4)',
  };

  const labelStyle = {
    marginLeft: '10px',
  };

  return (
    <Box justify="start" align="center" style={{width: '100%'}}>
      <List style={{marginTop: '20px', width: '100%'}} selectable={true} >
        <ListItem
          responsive={false}
          style={userItemStyles}
          onClick={() => handleClick(defaultUser)}
        >
          <Image style={{marginRight: '10px'}} src={defaultUser.thumb} size="thumb" />
          <Label margin="small" style={labelStyle}>
            {defaultUser.first_name}
          </Label>
        </ListItem>
      </List>
    </Box>
  );
}

UserSelectionBox.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

export default UserSelectionBox;
