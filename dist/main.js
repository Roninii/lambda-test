const getLeagues = async () => {
  fetch('/getleagues')
    .then(res => res.text())
    .then(data => (document.querySelector('p').innerText = data));
};

getLeagues();
