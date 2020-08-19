import React, { Component } from 'react';

const BAD_WORDS = [
  'fuck',
  'Bitch',
  'Dick',
  'cock',
  'pussy',
  'ass',
  'idiot',
  'cake(?:\\s|_)*?your(?:\\s|_)*?pants',
];

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageValue: '',
      isCensor: false,
      messages: [
        {
          text: 'Idiot',
          timestamp: new Date(98765).toString(),
        },
        {
          text: 'Fuck',
          timestamp: new Date(8751658746).toString(),
        },
        {
          text: 'Good message',
          timestamp: new Date(8515458).toString(),
        },
      ],
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { messages, messageValue } = this.state;
    const newMessages = [
      ...messages,
      {
        text: messageValue,
        timestamp: new Date().toString(),
      },
    ];

    this.setState({
      messageValue: '',
      messages: newMessages,
    });
  };
  handleChange = ({ target: { value } }) => {
    this.setState({
      messageValue: value,
    });
  };

  render() {
    const { messageValue, messages, isCensor } = this.state;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={messageValue}
            onChange={this.handleChange}
          />
          <button type="submit">send message</button>
          <label>
            <input
              type="checkbox"
              checked={isCensor}
              onChange={() => {
                this.setState({
                  isCensor: !isCensor,
                });
              }}
            />
            censure
          </label>
        </form>
        <ol>
          {messages.map(m => {
            return (
              <li key={m.timestamp}>
                {isCensor
                  ? m.text.replace(
                      new RegExp(BAD_WORDS.join('|'), 'ig'),
                      '$%#%#@'
                    )
                  : m.text}
              </li>
            );
          })}
        </ol>
      </section>
    );
  }
}

export default Chat;
