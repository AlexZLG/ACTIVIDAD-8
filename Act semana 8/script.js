document.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector(".Main-1");


fetch("empleados.json")
    .then(response => {
    if (!response.ok) throw new Error("Error al cargar el JSON");
    return response.json();
    })
    .then(data => {
    container.innerHTML = "";


    data.Company.Employees.forEach(empleado => {
        const objDiv = document.createElement("div");
        objDiv.classList.add("objeto");


        objDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${empleado.FirstName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Apellido: ${empleado.LastName}</h6>
                <p class="card-text">Ciudad: ${empleado.Address.City}</p>
            </div>
        </div>
        `;


        container.appendChild(objDiv);
    });
    })
    .catch(error => {
    console.error("Error:", error);
    container.innerHTML = "<p>No se pudo cargar la lista de productos.</p>";
    });
});