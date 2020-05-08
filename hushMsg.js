document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');


  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  let encryptedMsg = document.querySelector('#link-input');
  encryptedMsg.value = `${window.location}#${encrypted}`;
  // encryptedMsg.select();


});

const copyButton = document.querySelector('#copier');
copyButton.addEventListener('click', event => {
  let encryptedInput = document.querySelector('#link-input');
  encryptedInput.select();
});