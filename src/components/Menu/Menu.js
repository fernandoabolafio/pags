import React from 'react';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import {colors} from '../../constants/styles';



export default class Menu extends React.Component {

  constructor(props) {
    super(props);

    const {pathname} = this.props;
    const activeValue = this.getActiveTab(pathname);
    this.state = {
      tab: activeValue
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

  handleMenuSelection = (value) => {
    this.props.goToMenuItem(value);
  }

  renderMenuItem = (item, pressed = false) => {

    const textStyle = {
      color: pressed ? colors.yellow : 'white'
    }
    const iconStyle = {
      height: '38px',
      width: '38px'
    }
    const menuItemStyle = {
      alignItems: 'center',
      cursor: 'pointer'
    }
    const mapValueToIconName = {
      ['inicio']: 'casa',
      ['investimentos']: 'investimentos',
      ['chat']: 'chat',
      ['conquistas']: 'pags'
    };
    const iconName = mapValueToIconName[item.value];
    const source = `img/menu-icons/${iconName}${pressed ? '_pressed' : ''}.svg`;
    return (
      <Box onClick={() => this.handleMenuSelection(item.value)} style={menuItemStyle}>
        <img style={iconStyle} role="presentation" src={source} />
        <span style={textStyle}>{item.text}</span>
      </Box>
    )
  }

  render() {


    const menuStructure =  [
      {
        text: 'Início',
        value: 'inicio'
      },
      {
        text: 'Conquistas',
        value: 'conquistas'
      },
      {
        text: 'Pag$',
        value: 'chat'
      },
      {
        text: 'Investimentos',
        value: 'investimentos'
      }
    ];

    const menuStyle = {
      minHeight: '50px',
      padding: '8px 0',
      background: colors.darkBlue,
      position: 'fixed',
      bottom: '0',
      width: '100%',
      justifyContent: 'space-around',
      boxShadow: '0 -5px 5px -5px #333',
      zIndex: '9'
    }

    const menuItems = menuStructure.map((menuItem, i) => this.renderMenuItem(menuItem, menuItem.value === this.state.tab));

    return <Box style={menuStyle} direction="row" responsive="false">
      {menuItems}
    </Box>;
  }
}
