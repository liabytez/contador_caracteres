let textarea = document.getElementById("textarea")

textarea.addEventListener("input", function() {
    let total_length = this.value.length;
    document.getElementById("count").innerText = total_length;
});

