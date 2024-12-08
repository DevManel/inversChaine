const button = document.getElementById('invertButton');
button.addEventListener('click', () => {
    const str = document.getElementById('inputText').value;
    let reverse = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    document.getElementById('result').innerText = `La chaîne inversée est : ${reverse}`;
});