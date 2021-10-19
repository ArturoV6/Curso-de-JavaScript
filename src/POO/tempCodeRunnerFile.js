
class perro11 {
    constructor(color, edad, raza){
        this.color = color;
        this.edad = edad;
        this.raza = null;
        this.info = console.log(`Mi color es ${this.color} tengo ${this.edad} años y mi raza es ${this.raza}`)
    }
    static ladrar(){
        console.log("waw")
    }
    set modificar(name){
        this.raza = name
    }
    get getRaza{
        return this.raza;
    }
}

const perro2 = new perro11 ("color", "3", "n")
perro2.modificar = "pedro"
console.log(perro2)