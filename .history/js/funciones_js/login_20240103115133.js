fields.forEach(function (field){
    field.addEventListener("keyup", function (){
        field.classList.remove("errorField")
    })
})