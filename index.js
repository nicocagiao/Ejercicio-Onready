var sort = require ('fast-sort');

var productos = [
    {
        marca: "Peugeot",
        modelo: "206",
        puertas: 4,
        precio: 200000,
    },
    {
        marca: "Honda",
        modelo: "Titan",
        cilindrada: "125c",
        precio: 60000,
    },
    {
        marca: "Peugeot",
        modelo: "208",
        puertas: 5,
        precio: 250000,
    },
    {
        marca: "Yamaha",
        modelo: "YBR",
        cilindrada: "160c",
        precio: 80500.50,
    },
];

var mostrarProductos = () =>{
    for (i = 0; i < productos.length; i++) {
        let incluyeY = productos[i].modelo.includes("Y");

        if(productos[i].cilindrada == undefined){
            console.log("// "+"Marca: "+productos[i].marca+" // "+"Modelo: "+productos[i].modelo+" // "+"Puertas: "+productos[i].puertas+ " // "+ "Precio: "+ "$"+productos[i].precio);
        }else{
            console.log("// "+"Marca: "+productos[i].marca+" // "+"Modelo: "+productos[i].modelo+" // " + "Cilindrada: " + productos[i].cilindrada+ " // "+ "Precio: "+ "$"+productos[i].precio);
        }        
        if(incluyeY == true){
            console.log("Vehículo que contiene en el modelo la letra ‘Y’: "+ productos[i].modelo + " " + productos[i].marca+ " " +productos[i].precio);
        }        
    }
};
mostrarProductos();

let masCaro = sort(productos).desc([u => u.precio]);
console.log("Vehículo más caro: " + masCaro[0].marca + " " + masCaro[0].modelo); 
let masBarato = sort(productos).asc([u => u.precio]);
console.log("Vehículo más barato: " + masBarato[0].marca + " " + masBarato[0].modelo);

console.log("Vehículos ordenados por precio de mayor a menor: ");

let ordenados = sort(productos).by([{desc:'precio'}]);
for(x = 0; x < ordenados.length; x++){
    console.log(ordenados[x].marca + " " + ordenados[x].modelo);
}

