import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import DownIcon from 'grommet/components/icons/base/Down';

export const MyHeader = ({logout, activeUser}) =>
<Header justify="center" colorIndex="neutral-1">
   <Box direction="row"
     responsive={false} justify="start" align="center"
     pad={{horizontal: 'medium'}} flex="grow">
     <Anchor
       style={{ textDecoration: 'none' }}
       a11yTitle='Toryca página principal'
       path={{ path: 'app/main', index: true }}
       label={
       <Title>
         Toryca
       </Title>
     }
     />

     <Box pad='small'/>
     <Menu
       inline
       direction='row'
       style={{border: '3px solid transparent'}}
      >
        <Anchor path={{ path: 'app/investimentos', index: true }}>Investimentos</Anchor>
        <Anchor>Minhas Badges</Anchor>
     </Menu>
     <Box
       justify='end'
       direction='row'
       flex
       responsive={false}
     >
       <Menu
         dropAlign={{
           right: 'right',
           top: 'top'
         }}
         responsive
         icon={<DownIcon />}
         label={activeUser.first_name}
         direction='column'
         closeOnClick
        >
         <Anchor>Editar Perfil</Anchor>
         <Anchor>Responder Questionário</Anchor>
         <Anchor onClick={logout}>Sair</Anchor>
       </Menu>
     </Box>
   </Box>
 </Header>
