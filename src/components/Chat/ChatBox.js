import React from 'react';
import './chatBox.css';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

export default class Chat extends React.Component {

  state = {
    visible: true
  }

  handleClick(){
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    return (
      <div id="live-chat" className="box_chat-body">
        <header onClick={()=>this.handleClick()}>
          <a href="#" className="box_chat-close">X</a>
          <h3>John Doe</h3>
        </header>

        <div className="chat"
             style={
               {
                 display: this.state.visible ? 'block' : 'none'
               }

             }
        >

          <div className="box_chat-history">
            <div className="box_chat-message">
              <img className="photo" src="img/logo.png" width="32" height="32"/>
              <div className="box_chat-message-content">
                <h3>Pag$</h3>
                <div className="box_content">
                  <p className="box_ballon">Olá, como posso te ajudar?! </p>
                </div>
              </div>
            </div>

            <div className="box_chat-message ">
              <img src="img/persons/julia.jpg" alt="" width="32" height="32" />
              <div className="chat-message-content">
                <h3>Julia</h3>
                <div className="box_content">
                  <p className="box_ballon">1 - Quanto a poupança rende hoje? </p>
                </div>
                <div className="box_content">
                  <p className="box_ballon"
                     style={
                       {
                         border: '1px solid #e2780a'
                       }
                     }>2 - Quanto rende o Tesouro SELIC? </p>
                </div>
                <div className="box_content">
                  <p className="box_ballon">3 - Quanto rende o Tesouro pré-fixado? </p>
                </div>
              </div>
            </div>

            <div className="box_chat-message">
              <img className="photo" src="img/logo.png" width="32" height="32"/>
              <div className="box_chat-message-content">
                <h3>Pag$</h3>
                <div className="box_content">
                  <p className="box_ballon"> Hoje, a rentabilidade do Tesouro SELIC está em 9.31% ao ano </p>
                </div>
              </div>
            </div>

          </div>

          <div className="chat-input-place">
            <FormField
              style = {
                {
                  borderRadius: '10em'
                }
              }>
              <TextInput
                style = {
                  {
                    border: 0
                  }
                }
                id='item1'
                name='item-1'
                placeHolder="Digite Aqui"
                // suggestions={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
              />
            </FormField>
          </div>

        </div>
      </div>
    );
  }
}
