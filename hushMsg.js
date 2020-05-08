document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  let encryptedMsg = document.querySelector('#link-input');
  encryptedMsg.value = `${window.location}#${encryptedMsg}`;
  encryptedMsg.select();

});