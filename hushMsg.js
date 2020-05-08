const {
  hash
} = window.location;
const receivedMessage = atob(hash.replace('#', ''));


if (receivedMessage) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');
  document.querySelector('#messagehere').innerHTML = receivedMessage;
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');


  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  let encryptedMsg = document.querySelector('#link-input');
  encryptedMsg.value = `${window.location}#${encrypted}`;
});

const copyButton = document.querySelector('#copier');
copyButton.addEventListener('click', event => {
  const encryptedInput = document.querySelector('#link-input');
  encryptedInput.select();
  let copied = document.execCommand('copy');
  document.querySelector('#link-form').classList.add('hide');
  document.querySelector('#message-last').classList.remove('hide');
});

// written by @andrewlopezcodes on Github and Instagram