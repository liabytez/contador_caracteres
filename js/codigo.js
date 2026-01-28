let textarea = document.getElementById("textarea")
let counter = document.getElementById("count")

function countcharacter (textarea, counter) {
  counter.innerText = textarea.value.length
}

textarea.addEventListener('input', function(){
  countcharacter(textarea, counter)
})

