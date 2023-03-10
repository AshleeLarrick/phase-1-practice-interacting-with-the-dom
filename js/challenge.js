let counter = document.getElementById('counter');
let seconds = 0
let likes_obj = {}
let interval = 0
addEventListener('DOMContentLoaded', (event) => {
    interval = setInterval(() => {
        seconds += 1;
        counter.innerText = seconds
    }, 1000);
});

let minus = document.getElementById('minus');
minus.addEventListener('click', subtractSeconds)
function subtractSeconds(event) {
    seconds -= 1;
    counter.innerText = seconds
}

let plus = document.getElementById('plus');
plus.addEventListener('click', addSeconds)
function addSeconds(event) {
    seconds += 1;
    counter.innerText = seconds
}

let heart = document.getElementById('heart')
heart.addEventListener('click', addLikes)
function addLikes(event) {
    likes_obj[seconds] = (likes_obj[seconds] || 0)  + 1
    likes = document.getElementsByClassName("likes")[0]
    likes.innerHTML = ""
    for (const [key, value] of Object.entries(likes_obj)) {
        let li = document.createElement("li");
        li.innerText = "Second: " +  key + ", Likes: " + value;
        likes.appendChild(li);
    }
}
let pause = document.getElementById('pause')
pause.addEventListener('click', pauseResume)
function pauseResume(event) {
    if(event.target.innerHTML == " pause ")  {
        clearInterval(interval)
        document.getElementById("minus").disabled = true
        document.getElementById("plus").disabled = true
        document.getElementById("heart").disabled = true
        document.getElementById("submit").disabled = true
        pause.innerHTML = " resume "
    }
    else {
        clearInterval(interval)
        interval = setInterval(() => {
            seconds += 1;
            counter.innerText = seconds
        }, 1000);
        document.getElementById("minus").disabled = false
        document.getElementById("plus").disabled = false
        document.getElementById("heart").disabled = false
        document.getElementById("submit").disabled = false
        pause.innerHTML = " pause "
    }
}

let submit = document.getElementById('submit');
submit.addEventListener('click', addComment)
function addComment(event) {
    event.preventDefault()
    document.getElementById("list").innerHTML += document.getElementById("comment-input").value + "<br />"
}