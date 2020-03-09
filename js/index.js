class Message {
  constructor(text, author = 'Stranger') {
    this.author = author;
    this.text = text;
  }
}

class User {
  constructor(name, thumb = 'mave_thumb.jpg') {
    this.name = name;
    this.thumb = thumb;
  }
}

class Ui {
  static addMessage = message => {
    const html = `<div class="message">
        <div class="message__author">
          <a href="#">
            <img src="img/${message.author.thumb}" class="message__author--img" alt="#"/>
          </a>
        </div>
        <div>
          <h3 class="message__author--name"><a href="#">${message.author.name}</a></h3>
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
    input.forEach(el => input.removeAttribute('disabled'));

  // Disable inputs
  static disable = input => input.setAttribute('disabled', 'disabled');
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
