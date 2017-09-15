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
      <div id="live-chat" className="chat-body">
        <header onClick={()=>this.handleClick()}>
          <a href="#" className="chat-close">x</a>
          <h3>John Doe</h3>
        </header>

        <div className="chat"
          style={
            {
              display: this.state.visible ? 'block' : 'none'
            }

          }
        >

          <div className="chat-history">
            <div className="chat-message clearfix">
              <img className="photo" src="img/logo.png" width="32" height="32"/>
                <div className="chat-message-content">
                  <h3>Pag$</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, explicabo quasi ratione odio dolorum harum.</p>
                </div>
            </div>

              <div className="chat-message clearfix">
                <img src="img/persons/julia.jpg" alt="" width="32" height="32" />
                  <div className="chat-message-content clearfix">
                    <h3>Julia</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni vel debitis numquam qui tempora rem voluptatem delectus!</p>
                  </div>
              </div>

          </div>

          <p className="chat-feedback">Your partner is typing…</p>

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
