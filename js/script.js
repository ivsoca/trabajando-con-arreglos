// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

  

//Función que recibe por parámetro un array y muestra sus elementos en pantalla
// function showList(array) {
//   const container = document.getElementById("list");
//   container.innerHTML = "";
//   // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//   array.forEach((element) => {
//     const li = document.createElement("li");
//     li.appendChild(document.createTextNode(element));
//     container.appendChild(li);
//   });
// }

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
    function showOrderedList(){
      //Filtra el array para que solo esten los strings
        const result = strangeArray.filter((arrayOrdered) => typeof arrayOrdered == "string");


      //Este ciclo, por cada iteracion del elemento, convierte el resultado a minusculas
      for (let i = 0; i < result.length; i++) {
        result[i] = result[i].toLowerCase();
      }

      //metodo para ordenar alfabeticamente
      result.sort();  
      console.log(result);
      

      const containerOrdered = document.getElementById("list");
      containerOrdered.innerHTML = "";

      //DOM para mostrar en pantalla
      result.forEach(element => {
        
      const liOrdered = document.createElement('li');
      liOrdered.appendChild(document.createTextNode(element));
      containerOrdered.appendChild(liOrdered);
      });
    }
    //llamo a la funcion
    showOrderedList();


  // Sugerencia de cómo mostrar el array => showList(strangeArray);
  // showList(strangeArray);
});
