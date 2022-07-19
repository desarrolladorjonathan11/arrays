const lacteos = ["leche", "queso", "yogurt", "crema"]

const carnes = ["peceto", "asado", "vacio", "tortuguita", "nalga"]

const verduras = ["lechuga", "zanahoria", "cebolla", "rucula", "pepino"]

const comida = verduras.concat(lacteos.concat(carnes))

console.log(comida)

console.log(comida.slice(0, 9))

console.log(comida.includes("zanahoria"))
console.log(comida.includes("pepinillos"))


class Verdura {
    constructor(tipo, color, cantidad, precio) {
        this.tipo = tipo
        this.color = color
        this.cantidad = cantidad
        this.precio = precio
    }
}

const verdura1 = new Verdura("cebolla", "rubia", 4, 12)
const verdura2 = new Verdura("zanahoria", "naranja", 6, 10)
const verdura3 = new Verdura("rucula", "verde", 7, 8)
const verdura4 = new Verdura("lechuga", "morada", 9, 4)

const verdurass = [verdura1, verdura2, verdura3, verdura4]

console.log(verdurass)

console.log(verdurass[2].precio)
console.log(verdurass[0].tipo)
