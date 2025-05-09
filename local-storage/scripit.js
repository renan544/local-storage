let btn = document.querySelector("#btn")
let user = document.querySelector("#user")
let welcome = document.querySelector("#welcome")
let exit = document.querySelector("#exit")


/*localStorage.setItem("username", "renan")*/

/*let username = localStorage.getItem("username")*/
/*localStorage.removeItem("username")*/

const sair = ()=> {
    localStorage.removeItem("username")
    welcome.innerHTML = "faça seu login!"
}

exit.addEventListener("click", sair)

function pegarNome() {
     localStorage.setItem("username", user.value)
     let username = localStorage.getItem("username")

     if(username.trim() != "") {

         welcome.innerHTML = `olá ${username}, seja bem-vindo!`
     }
}



function pegarValorLocal() {

    let username = localStorage.getItem("username")

    if(username == null){
        welcome.innerHTML = "faça seu login!"
    }
    welcome.innerHTML = `olá ${username}, seja bem-vindo!`
}
pegarValorLocal()



btn.addEventListener("click", pegarNome)