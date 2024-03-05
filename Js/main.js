function saludar(name="alguien"){
    console.log("Hola " + name);
}

let nombre = prompt("Bienvenido, por favor ingrese su nombre")
saludar(nombre);

let edad = prompt("Ingrese su edad" + " " + nombre);

//condicional 
if (edad >= 18) {
    alert("Sos mayor de edad, Bienvenido")
} else {
    alert("Los menores de edad, no pueden acceder, lo sentimos!");
    let x = 0;
    while (x < 11) {
        alert("Vuelva caundo sea mayor de edad, hasta pronto!");
        console.log("Ciclo númerico" + x);
        x = x + 1;
    }
}  

