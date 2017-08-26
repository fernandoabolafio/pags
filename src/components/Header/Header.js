import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import DownIcon from 'grommet/components/icons/base/Down';

export const MyHeader = () =>
<Header justify="center" colorIndex="neutral-1">
   <Box direction="row"
     responsive={false} justify="start" align="center"
     pad={{horizontal: 'medium'}} flex="grow">
     <Title>
       Toryca
     </Title>
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
         label='Marcela'
         direction='column'
         closeOnClick
         >
         <Anchor>Editar Perfil</Anchor>
         <Anchor>Responder Questionário</Anchor>
         <Anchor>Sair</Anchor>
       </Menu>
     </Box>
   </Box>
 </Header>
