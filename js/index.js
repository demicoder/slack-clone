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
  static addMessage = message => {
    const html = `<div class="message">
        <div class="message__author">
            <p class="message__author--label">ST</p>
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
    elements.messageList.insertAdjacentHTML('beforeend', html);
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

// DOM Elements
const elements = {
  messageList: document.querySelector('.app__content'),
  form: document.querySelector('.compose__form'),
  userInput: document.querySelector('.compose__input')
};

// Delegation

elements.form.addEventListener('submit', e => {
  e.preventDefault();
  const text = elements.userInput.value;
  const stranger = new User('Stranger');
  const message = new Message(text, stranger);
  Ui.addMessage(message);
  Ui.clearInput(elements.userInput);
});
