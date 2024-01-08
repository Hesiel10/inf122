function agregarTarea()
{
    var tarea = document.getElementById("nueva-tarea").nodeValue;
    var nuevoItem = document.createElement("li");

    nuevoItem.textContent=tarea;
    document.getElementById("tarea-lista").appendChild(nuevoItem);
    document.getElementById("tarea-lista").value="nuevoItem";
}