import React from 'react';
import './chatBox.css';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

export default class Chat extends React.Component {
  render() {

    return (
      <div id="live-chat" className="chat-body">

        <header class="clearfix">

          <a href="#" className="chat-close">x</a>

          <h3>John Doe</h3>

        </header>

        <div className="chat">

          <div className="chat-history">

            <div className="chat-message clearfix">

              <img className="photo" src="img/logo.png" width="32" height="32"/>
                <div className="chat-message-content">

                  <span className="chat-time">13:35</span>

                  <h3>Pag$</h3>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, explicabo quasi ratione odio dolorum harum.</p>

                </div>

            </div>


              <div className="chat-message clearfix">

                <img src="img/persons/julia.jpg" alt="" width="32" height="32" />

                  <div className="chat-message-content clearfix">

                    <span className="chat-time">13:37</span>

                    <h3>Julia</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni vel debitis numquam qui tempora rem voluptatem delectus!</p>

                  </div>

              </div>

          </div>

          <p className="chat-feedback">Your partner is typing…</p>

          <form action="#" method="post">

            <fieldset>

              <input type="text" placeholder="Type your message…" autofocus />
                <input type="hidden" />

            </fieldset>

          </form>

        </div>
      </div>
    );
  }
}
