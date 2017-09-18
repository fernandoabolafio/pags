import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import DownIcon from 'grommet/components/icons/base/Down';
import Image from 'grommet/components/Image';
import {colors} from '../../constants/styles';
import TutorialHoc, {tutorialSteps} from '../../hocs/TutorialHoc';

export const MyHeader = ({logout, activeUser, tab}) =>
<Header justify="center" colorIndex="brand" style={{backgroundColor: '#102027'}}>
   <Box direction="row"
     responsive={false} justify="start" align="center"
     pad={{horizontal: 'medium'}} flex="grow">
     <Anchor
       style={{ textDecoration: 'none' }}
       a11yTitle='Toryca página principal'
       path={{ path: 'app/inicio', index: true }}
       label={
       <Image
         style={{width:'45.8px', height: '42.1px'}}
         src={  `img/menu-icons/pags${tab === 'inicio' ? '_pressed' : ''}.svg`}
        />
     }
     />

     <Box pad='small'/>
     <Menu
       inline
       direction='row'
       style={{border: '3px solid transparent'}}
      >
        <Anchor  path={{ path: 'app/investimentos', index: false }}>
          <span style={{color: tab === 'investimentos' ? colors.yellow : ''}}>Investimentos</span>
        </Anchor>
        <Anchor  path={{ path: 'app/conquistas', index: false }}>
          <span style={{color: tab === 'conquistas' ? colors.yellow : ''}}>Meu Pag$</span>
        </Anchor>
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



class PanelHeader extends React.Component {
  constructor(props) {
    super(props);

    const {pathname} = this.props;
    const activeTab = this.getActiveTab(pathname);
    console.log('pathname', pathname);
    this.state = {
      tab: activeTab
    }
  }

  getActiveTab(path) {
    const activeValue = path.split('/')[2];
    return activeValue;
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.pathname !== this.props.pathname) {
      const activeTab = this.getActiveTab(nextProps.pathname);
      this.setState({
        tab: activeTab
      })
    }
  }

  render() {
    const {logout, activeUser} = this.props;
    const {tab} = this.state;
    console.log('activeTab', tab);
    return <MyHeader logout={logout}  activeUser={activeUser} tab={tab}/>
  }
}
 export default TutorialHoc(tutorialSteps.HEADER, PanelHeader);
