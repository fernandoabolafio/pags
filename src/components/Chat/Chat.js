import React from 'react';
import ReactDOM from 'react-dom';
import './Chat.css';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Box from 'grommet/components/Box';

export const Message = ({name, msg, children, img}) => {
  const pags = name === 'Pag$';
  const childrenWithProps = React.Children.map(children,
     (child) => React.cloneElement(child, {
       pags
     })
    );
  return (
    <div className='box_chat-message'>
      <div style={pags ? {justifyContent: 'flex-start', display: 'flex', marginTop: '24px'} : {justifyContent: 'flex-end', display: 'flex', marginTop: '24px'}}>
        <img className='photo' src={pags ? 'img/logo.png' : 'img/persons/julia.jpg'} alt='thumb' width='32px' height='32px' style={pags ? {borderRadius: '0'} : {}} />
        <h3 style={{marginBottom: '0px'}}>{name}</h3>
      </div>
      <div className='box_chat-message-content' style={pags ? {justifyContent: 'flex-start', display: 'flex', flexDirection: 'column'} : {justifyContent: 'flex-end', display: 'flex', flexDirection: 'column'}}>
        {childrenWithProps}
      </div>
    </div>
  )
}
export const Content = ({msg, active, pags}) =>
  <div className='box_content' style={pags ? {display: 'flex', justifyContent: 'flex-start'} : {display: 'flex', justifyContent: 'flex-end'}}>
    <span
      className='box_ballon'
      style={pags ? {margin: '10px'} : active ? {margin: '10', textAlign: 'right', backgroundColor: '#e2780a', color: '#fff', cursor: 'pointer'} : {margin: '10px', textAlign: 'right', cursor: 'pointer'}}>
      {msg}
    </span>
  </div>

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.small
    }
  }

  scrollToBottom = () => {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  handleClick(){
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const {small} = this.props;
    return (
      <Box className={small ? 'mobile_chat-body' : 'box_chat-body'} style={{marginRight: '10px', paddingTop: '0'}} pad={small ? {vertical: 'medium', horizontal: 'none'} : 'none'}>
        <Box className='box_chat-body-header' direction='row' responsive={false} align='center' onClick={() => !this.props.small && this.handleClick()}>
          <div className='box_chat-green-circle'></div>
          <h3 style={{margin:'0'}}>Pag$</h3>
        </Box>

        <div className='box_chat' style={small ? {display: 'block'} : { display: this.state.visible ? 'block' : 'none'}}>
          <div className={small ? 'mobile_chat-history' : 'box_chat-history'}>
            <Message name='Pag$'>
              <Content msg='Olá, como posso te ajudar?!' />
            </Message>
            <Message name='Julia'>
              <Content msg='1 - Quanto a poupança rende hoje?' />
              <Content active msg='2 - Quanto rende o Tesouro SELIC?' />
              <Content msg='3 - Quanto rende o Tesouro pré-fixado?' />
            </Message>
            <Message name='Pag$'>
              <Content msg='Hoje, a rentabilidade do Tesouro SELIC está em 9.31% ao ano.' />
            </Message>
            {!small &&
              <div style={{ float:"left", clear: "both" }}
                 ref={(el) => { this.messagesEnd = el; }}>
              </div>}
          </div>
          <div className='box_chat-input-place' style={small ? {bottom: '78px'} : {bottom: '0'}}>
            <FormField
              className='box_chat-form-field'
              >
              <TextInput
                id='chat_input'
                name='chat_input'
                placeHolder='E aí, o que manda?'
              />
            </FormField>
          </div>
          {small &&
            <div style={{ float:"left", clear: "both" }}
               ref={(el) => { this.messagesEnd = el; }}>
            </div>}
        </div>
      </Box>
    );
  }
}
