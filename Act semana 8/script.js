document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#employeeCards");
  let empleados = []; 

  fetch("empleados.json")
    .then(response => {
      if (!response.ok) throw new Error("Error al cargar el JSON");
      return response.json();
    })
    .then(data => {
      empleados = data.Company.Employees;
      mostrarEmpleados(empleados);       
    })
    .catch(error => {
      console.error("Error:", error);
      container.innerHTML = "<p>No se pudo cargar la lista de empleados.</p>";
    });

 
  function mostrarEmpleados(lista) {
    container.innerHTML = "";
    lista.forEach(empleado => {
      const objDiv = document.createElement("div");
      objDiv.classList.add("objeto"); 
      objDiv.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${empleado.FirstName} ${empleado.LastName}</h5>
            <p class="card-text"><strong>Ciudad:</strong> ${empleado.Address.City}</p>
            <p class="card-text"><strong>Email:</strong> ${empleado.Email}</p>
            <p class="card-text"><strong>Teléfono:</strong> ${empleado.ContactNo}</p>
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

