// Opsional Hehe:D
const sebuahNama = document.getElementById("h1")
sebuahNama.innerHTML = "Hanif Ubaidur Rohman Syah"

// Nomer 1, Ganti Warna Div
const containers = document.querySelectorAll('#container1, #container2');
containers.forEach(container => {
    container.style.backgroundColor = '#00BFFF';
});

// Nomer 2, Ganti Link
document.querySelector('a').setAttribute('href', 'https://www.google.com');

// Nomer 3, Looping
const list = document.getElementById("container2").querySelector("ul");

for (let i = 0; i < list.children.length; i++) {
  list.children[i].textContent = `List Baru ${i + 1}`;
  list.children[i].style.fontSize = '15px';
}
