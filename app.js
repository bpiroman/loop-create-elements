let parent = document.querySelector('#app');

for (let i = 0; i <=9; i++) {
    let p = document.createElement("p");
    p.textContent = "testing " + [i];
    parent.appendChild(p);
}