import React from 'react';
import './chat.css';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

export default class Chat extends React.Component {
  render() {

    return (
      <div className="chat-body">
        <div className="chat">
          <ul className="comments">
            <li className="comment" >
              <section className="author">
                <img className="photo" src="img/logo.png"/>
                <span className="name">Pag$</span>
              </section>
              <section className="content">
                <p>Olá, Como posso te ajudar?! </p>
              </section>
              <section className="content">
                <p>1 - Quanto a poupança rende hoje? </p>
              </section>
              <section className="content">
                <p>2 - Quanto a poupança rende hoje? </p>
              </section>
              <section className="content">
                <p>3 - Quanto a poupança rende hoje? </p>
              </section>
              <section className="content">
                <p>4 - Quanto a poupança rende hoje? </p>
              </section>
              <section className="content">
                <p>Clique na pergunta que possa te ajudar</p>
              </section>
            </li>
            <li className="comment">
              <section className="author">
                <img className="photo" src="img/persons/julia.jpg"/>
                <span className="name">Julia piranha</span>
              </section>
              <section className="content">
                <p>I don't know... what?</p>
              </section>
            </li>
          </ul>
        </div>
        <div className="chat-input-place">
          <FormField
            style = {
              {
                borderRadius: '10em'
              }
            }>
            <TextInput
              id='item1'
              name='item-1'
              placeHolder="Digite Aqui"
              // suggestions={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
            />
          </FormField>
        </div>


      </div>
    );
  }
}
