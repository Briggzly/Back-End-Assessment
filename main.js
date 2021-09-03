const createHobbie = body => axios.post()


document.querySelector("#hobbieBtn").addEventListener("click", function submitHandler(e) {
    e.preventDefault()
})

document.getElementById("hobbieBtn").onclick = function() {
    let hobbie = document.getElementById("hobbies").value

    let li = "<li>" + hobbie + "</li>"

    document.getElementById("list").appendChild(li)
}