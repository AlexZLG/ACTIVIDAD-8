document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#employeeCards");
  let empleados = []; 

  fetch("empleados.json")
    .then(response => response.json())
    .then(data => {
      empleados = data.Company.Employees; 
      mostrarEmpleados(empleados);
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
  }

  
  document.getElementById("sortSelect").addEventListener("change", () => {
    const campo = document.getElementById("sortSelect").value;
    const ordenados = [...empleados].sort((a, b) =>
      campo === "apellido"
        ? a.LastName.localeCompare(b.LastName)
        : a.Address.City.localeCompare(b.Address.City)
    );
    mostrarEmpleados(ordenados);
  });


  document.getElementById("searchInput").addEventListener("input", function(e) {
    const texto = e.target.value.toLowerCase();
    const filtrados = empleados.filter(emp =>
      emp.FirstName.toLowerCase().includes(texto) ||
      emp.LastName.toLowerCase().includes(texto) ||
      emp.Address.City.toLowerCase().includes(texto)
    );
    mostrarEmpleados(filtrados);
  });
});