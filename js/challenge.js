
let isPaused = false
window.onload = () => {
setInterval(startTimer, 1000);
    function startTimer(){
        if(!isPaused){
        let totalSeconds = document.getElementById("counter")
         ++totalSeconds.innerText
        }
    }
}

document.getElementById("plus").addEventListener("click", plusOne)
function plusOne(){
    let totalSeconds = document.getElementById("counter")
    ++totalSeconds.innerText
}

document.getElementById("minus").addEventListener("click", minusOne)
function minusOne(){
    let totalSeconds = document.getElementById("counter")
    --totalSeconds.innerText
}


document.getElementById("pause").addEventListener("click", pauseCount)
function pauseCount(){
    if(isPaused === false){
        document.getElementById("pause").innerText = "resume"
        isPaused = true
        document.getElementById("plus").disabled = true
        document.getElementById("minus").disabled = true
        document.getElementById("heart").disabled = true
        document.getElementById("submit").disabled = true
    } else {
        document.getElementById("pause").innerText = "pause"
        isPaused = false
        document.getElementById("plus").disabled = false
        document.getElementById("minus").disabled = false
        document.getElementById("heart").disabled = false
        document.getElementById("submit").disabled = false
    }
}

document.getElementById("submit").addEventListener("click", addComment)
function addComment(event){
    event.preventDefault()
    let commentList = document.getElementById("comment-list")
    let data = document.getElementById("comment-input").value
    let li = document.createElement("li")
    li.innerText = data
    commentList.appendChild(li)
}
let listLikes = {}
document.getElementById("heart").addEventListener("click", likeNumber)
function likeNumber(){
    let likes = document.getElementById("likes")
    let totalSeconds = document.getElementById("counter").innerText
    let li = document.createElement("li")
    let count = 1
    if (totalSeconds in listLikes) {
        listLikes[totalSeconds] += count
    } else {
        listLikes[totalSeconds] = count
    }
    for(key in listLikes){
        li.innerText = `number ${key}: times clicked ${listLikes[key]}`
    }
    likes.appendChild(li)
}


