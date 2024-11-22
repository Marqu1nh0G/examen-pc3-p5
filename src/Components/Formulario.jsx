import React, { useState } from "react";
import './Formulario.css'; // Importando los estilos

const Formulario = () => {
  // Estado para cada campo del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    genero: "",
    lenguaje: "",
    terminos: false,
  });

  // Manejador para actualizar el estado
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificación de términos
    if (!formData.terminos) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    // Mostrar los datos ingresados en el alert
    const datos = `
      Nombre: ${formData.nombre}
      Apellido: ${formData.apellido}
      Edad: ${formData.edad}
      Género: ${formData.genero}
      Lenguaje favorito: ${formData.lenguaje}
      Términos y condiciones: ${formData.terminos ? "Aceptados" : "No aceptados"}
    `;

    alert("Formulario enviado con éxito! \n\n" + datos);
    console.log(formData); // Mostrar en la consola para depuración
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo de Nombre */}
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
          required
        />
      </div>

      {/* Campo de Apellido */}
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Ingresa tu apellido"
          required
        />
      </div>

      {/* Campo de Edad */}
      <div>
        <label>Edad:</label>
        <input
          type="text"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          placeholder="Ingresa tu edad"
          required
        />
      </div>

      {/* Campo de Género */}
      <div>
        <label>Género:</label>
        <div>
          <label>
            <input
              type="radio"
              name="genero"
              value="Masculino"
              checked={formData.genero === "Masculino"}
              onChange={handleChange}
            />
            Masculino
          </label>
          <label>
            <input
              type="radio"
              name="genero"
              value="Femenino"
              checked={formData.genero === "Femenino"}
              onChange={handleChange}
            />
            Femenino
          </label>
        </div>
      </div>

      {/* Lista de Lenguajes */}
      <div>
        <label>Lenguaje de programación favorito:</label>
        <select
          name="lenguaje"
          value={formData.lenguaje}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un lenguaje</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
        </select>
      </div>

      {/* Checkbox para Términos y Condiciones */}
      <div>
        <label>
          <input
            type="checkbox"
            name="terminos"
            checked={formData.terminos}
            onChange={handleChange}
          />
          He leído todos los términos y condiciones
        </label>
      </div>

      {/* Botón de Enviar */}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
