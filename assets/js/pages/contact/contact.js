// お問い合わせ内容の文字数を数える
const inputMessage = document.querySelector('#message');
const countSpan = document.querySelector('#count-span');

inputMessage.addEventListener('input', () => {
  const inputCount = 1000 - inputMessage.value.length;
  countSpan.textContent = inputCount;

  if (inputCount < 0) {
    countSpan.classList.add('alert');
  } else {
    countSpan.classList.remove('alert');
  }
});


// 利用規約に同意したら送信できる
