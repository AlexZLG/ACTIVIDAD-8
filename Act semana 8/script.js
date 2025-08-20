document.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector("#employeeCards");



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
    container.innerHTML = "<p>No se pudo cargar la lista de empleados.</p>";
    });
});


<<<<<<< HEAD
=======
document.getElementById("searchInput").addEventListener("input", function() {
  const texto = this.value.toLowerCase();
  const filtrados = empleados.filter(empleado => {
    return empleado.FirstName.toLowerCase().includes(texto) || empleado.LastName.toLowerCase().includes(texto);
  });
  mostrarEmpleados(filtrados);
});

>>>>>>> f82afe65d29d586ba5952d26ef150679a8c2d857
// Datos simulados 
const empleados = [
  {
    FirstName: "Tanmay",
    LastName: "Patil",
    Address: { City: "Bangalore" }
  },
  {
    FirstName: "Ramona",
    LastName: "Perez",
    Address: { City: "Montevideo" }
  },
  {
    FirstName: "Sofia",
    LastName: "Wetther",
    Address: { City: "Canelones" }
  },
  {
    FirstName: "Olivia",
    LastName: "Rodrigo",
    Address: { City: "San José" }
  },
  {
    FirstName: "Taylor",
    LastName: "Swift",
    Address: { City: "Pando" }
  }
];

