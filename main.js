function render(comment){
    const ul = document.querySelector("ul")
    const li = document.createElement('li')
    li.innerText = comment;
    ul.appendChild(li);
}

for(let i = 0; i < localStorage.length; i++){
    render(localStorage.getItem(i))
}

document.getElementById('comment-add').onclick = function(){
    const comment = document.getElementById('comm').value;
    localStorage.setItem(localStorage.length, comment);
    render(comment);
}