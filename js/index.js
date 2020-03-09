// Message
class Message {
  constructor(text, author = 'Stranger') {
    this.author = author;
    this.text = text;
  }
}

// User
class User {
  constructor(name, thumb = 'mave_thumb.jpg') {
    this.name = name;
    this.thumb = thumb;
  }
}

// User Interface
class Ui {
  static messageMarkup = message => {
    console.log(message.author);
    const html = `<div class="message message__new">
    <div class="message__author">
        <p class="message__author--label">${message.author.name[0]}</p>
        <a href="#">
          <img src="img/${message.author.thumb}" class="message__author--img" alt="#"/>
        </a>
    </div>
    
    <div>
      <h3 class="message__author--name">
      <a href="#">${message.author.name}</a></h3>
        <div class="message__body">
            <p>${message.text}</p>
        </div>
    </div>
    </div>`;

    return html;
  };

  static addMessage = message => {
    if (message.text.trim().length > 0) {
      const html = Ui.messageMarkup(message);
      elements.messageList.insertAdjacentHTML('beforeend', html);
    }
  };

  static isTyping = user => {
    const message = new Message(`${user.name} is typing...`, user);
    // const html = `<p>${user.name} is typing</p>`;
    Ui.addMessage(message);
  };

  //   Clear Inputs
  static clearInput = (...inputs) => inputs.forEach(el => (el.value = ''));

  // Enable inputs
  static enable = (...inputs) =>
    inputs.forEach(input => input.removeAttribute('disabled'));

  // Disable inputs
  static disable = (...inputs) =>
    inputs.forEach(input => input.setAttribute('disabled', 'disabled'));
}

class Http {
  constructor(url) {
    this.url = url;
  }

  async get() {
    const res = await fetch(this.url);
    return await res.json();
  }
}

// DOM Elements
const elements = {
  messageList: document.querySelector('.app__content'),
  form: document.querySelector('.compose__form'),
  userInput: document.querySelector('.compose__input')
};

// Functions
const addUserMessage = () => {
  const text = elements.userInput.value;
  const stranger = new User('Stranger');
  const message = new Message(text, stranger);
  Ui.addMessage(message);
  Ui.clearInput(elements.userInput);
};

// Delegation
elements.form.addEventListener('submit', e => {
  e.preventDefault();
  addUserMessage();
});

// const bot = new User('Bot', 'derick_thumb.jpg');
// Ui.isTyping(bot);
