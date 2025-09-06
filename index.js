const chaneMode = document.querySelector('#ChangeMode');

chaneMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        chaneMode.innerHTML = '<img src="img/dark.png" alt="" height="32px" width="32px">';
        document.body.style.backgroundImage = "url('img/dark-background.jpg')";
        document.body.style.color = "white";
    } else {
        chaneMode.innerHTML = '<img src="img/light.jpg" alt="" height="32px" width="32px">';
        document.body.style.backgroundImage = "url('img/white-background.jpg')";
        document.body.style.color = "black";
    }
});