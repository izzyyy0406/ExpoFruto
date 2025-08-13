document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const form = document.getElementById("formularioComprador");
  const checkboxes = document.querySelectorAll(
    'input[name="productos_interes"]'
  );
  const otrosCheckbox = document.getElementById("otros");
  const otrosContainer = document.getElementById("otrosProductosContainer");
  const otrosInput = document.getElementById("otrosProductos");
  const paisSelect = document.getElementById("pais");
  const telefonoInput = document.getElementById("telefono");
  const nombreInput = document.getElementById("nombre");
  const apellidoInput = document.getElementById("apellido");
  const emailInput = document.getElementById("email");
  const ciudadInput = document.getElementById("ciudad");
  const privacidadCheckbox = document.getElementById("privacidad");

  // Configurar contenedor para "Otro país"
  const otroPaisContainer = document.createElement("div");
  otroPaisContainer.className = "mt-3 d-none";
  otroPaisContainer.innerHTML = `
    <label for="otroPais" class="form-label small">Especifica tu país:</label>
    <input type="text" class="form-control" id="otroPais" name="otroPais" placeholder="Escribe tu país">
    <div class="invalid-feedback">Por favor especifica tu país.</div>
  `;
  paisSelect.parentNode.insertBefore(otroPaisContainer, paisSelect.nextSibling);
  const otroPaisInput = document.getElementById("otroPais");

  // Mostrar/ocultar campo de otro país
  paisSelect.addEventListener("change", function () {
    if (this.value === "Otro") {
      otroPaisContainer.classList.remove("d-none");
      otroPaisInput.setAttribute("required", "");
    } else {
      otroPaisContainer.classList.add("d-none");
      otroPaisInput.removeAttribute("required");
      otroPaisInput.value = "";
    }
  });

  // Validar campo de otro país si está visible
  function validateOtroPais() {
    if (paisSelect.value !== "Otro") return true;
    if (otroPaisInput.value.trim() === "") {
      otroPaisInput.classList.add("is-invalid");
      return false;
    }
    otroPaisInput.classList.remove("is-invalid");
    return true;
  }

  // Mostrar/ocultar campo de otros productos
  if (otrosCheckbox) {
    otrosCheckbox.addEventListener("change", function () {
      if (this.checked) {
        otrosContainer.classList.remove("d-none");
        otrosInput.setAttribute("required", "");
      } else {
        otrosContainer.classList.add("d-none");
        otrosInput.removeAttribute("required");
        otrosInput.value = "";
      }
    });
  }

  // Validar selección de productos de interés
  function validateProductosInteres() {
    const selected = document.querySelectorAll(
      'input[name="productos_interes"]:checked'
    ).length;
    const productosContainer = document.querySelector(".cultivos-container");

    // Limpiar errores previos
    const existingError = productosContainer.querySelector(".text-danger");
    if (existingError) {
      existingError.remove();
    }

    if (selected === 0) {
      productosContainer.style.border = "1px solid #dc3545";
      const errorMsg = document.createElement("div");
      errorMsg.className = "text-danger mt-2 small";
      errorMsg.textContent =
        "Por favor seleccione al menos un producto de interés";
      productosContainer.appendChild(errorMsg);
      return false;
    } else if (selected > 2) {
      productosContainer.style.border = "1px solid #dc3545";
      const errorMsg = document.createElement("div");
      errorMsg.className = "text-danger mt-2 small";
      errorMsg.textContent = "Por favor seleccione máximo 2 productos";
      productosContainer.appendChild(errorMsg);
      return false;
    }

    productosContainer.style.border = "1px solid #ced4da";
    return true;
  }

  // Validar campo de otros productos si está visible
  function validateOtrosProductos() {
    if (!otrosCheckbox || !otrosCheckbox.checked) return true;
    if (otrosInput.value.trim() === "") {
      otrosInput.classList.add("is-invalid");
      return false;
    }
    otrosInput.classList.remove("is-invalid");
    return true;
  }

  // Validar teléfono
  function validateTelefono() {
    const telefono = telefonoInput.value.trim();
    const telefonoRegex = /^[0-9]{7,15}$/;

    if (!telefonoRegex.test(telefono)) {
      telefonoInput.classList.add("is-invalid");
      telefonoInput.nextElementSibling.textContent =
        "Por favor ingrese un número de teléfono válido (solo números, 7-15 dígitos)";
      return false;
    }
    telefonoInput.classList.remove("is-invalid");
    return true;
  }

  // Validar nombre y apellido
  function validateNombreApellido() {
    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    const letrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    let isValid = true;

    if (!letrasRegex.test(nombre)) {
      nombreInput.classList.add("is-invalid");
      nombreInput.nextElementSibling.textContent =
        "Por favor ingrese solo letras y espacios";
      isValid = false;
    } else {
      nombreInput.classList.remove("is-invalid");
    }

    if (!letrasRegex.test(apellido)) {
      apellidoInput.classList.add("is-invalid");
      apellidoInput.nextElementSibling.textContent =
        "Por favor ingrese solo letras y espacios";
      isValid = false;
    } else {
      apellidoInput.classList.remove("is-invalid");
    }

    return isValid;
  }

  // Validar email
  function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      emailInput.classList.add("is-invalid");
      emailInput.nextElementSibling.textContent =
        "Por favor ingrese un correo electrónico válido (ejemplo: usuario@dominio.com)";
      return false;
    }
    emailInput.classList.remove("is-invalid");
    return true;
  }

  // Validar ciudad
  function validateCiudad() {
    const ciudad = ciudadInput.value.trim();
    const ciudadRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-,.]+$/;

    if (!ciudadRegex.test(ciudad)) {
      ciudadInput.classList.add("is-invalid");
      ciudadInput.nextElementSibling.textContent =
        "Por favor ingrese un nombre de ciudad válido";
      return false;
    }
    ciudadInput.classList.remove("is-invalid");
    return true;
  }

  // Evento para limitar a 2 selecciones
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const selected = document.querySelectorAll(
        'input[name="productos_interes"]:checked'
      ).length;
      if (selected > 2) {
        this.checked = false;
      }
      validateProductosInteres();
    });
  });

  // Validación en tiempo real para campos
  function setupLiveValidation(input, validationFn) {
    input.addEventListener("input", function () {
      validationFn();
      if (this.value && !this.classList.contains("is-invalid")) {
        this.classList.add("is-valid");
      } else {
        this.classList.remove("is-valid");
      }
    });

    input.addEventListener("blur", validationFn);
  }

  // Configurar validación en tiempo real
  setupLiveValidation(telefonoInput, validateTelefono);
  setupLiveValidation(nombreInput, () => validateNombreApellido());
  setupLiveValidation(apellidoInput, () => validateNombreApellido());
  setupLiveValidation(emailInput, validateEmail);
  if (otrosInput) setupLiveValidation(otrosInput, validateOtrosProductos);
  setupLiveValidation(otroPaisInput, validateOtroPais);
  setupLiveValidation(ciudadInput, validateCiudad);

  // Validar checkbox de privacidad
  function validatePrivacidad() {
    if (!privacidadCheckbox.checked) {
      privacidadCheckbox.classList.add("is-invalid");
      return false;
    }
    privacidadCheckbox.classList.remove("is-invalid");
    return true;
  }
  privacidadCheckbox.addEventListener("change", validatePrivacidad);

  // Evento submit del formulario
  form.addEventListener(
    "submit",
    async function (event) {
      event.preventDefault();
      let isValid = true;

      // Validar todos los campos
      isValid = validateNombreApellido() && isValid;
      isValid = validateEmail() && isValid;
      isValid = validateTelefono() && isValid;
      isValid = validateCiudad() && isValid;
      isValid = validateProductosInteres() && isValid;
      isValid = validateOtrosProductos() && isValid;
      isValid = validateOtroPais() && isValid;
      isValid = validatePrivacidad() && isValid;

      // Validar campos requeridos simples
      const requiredFields = form.querySelectorAll("[required]");
      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          field.classList.add("is-invalid");
          isValid = false;
        } else if (!field.classList.contains("is-invalid")) {
          field.classList.remove("is-invalid");
        }
      });

      if (!isValid) {
        event.stopPropagation();

        Swal.fire({
          title: "Formulario incompleto",
          html: "Por favor complete todos los campos requeridos <strong>correctamente</strong>.",
          icon: "error",
          confirmButtonColor: "#dc3545",
          confirmButtonText: "Entendido",
        });

        const firstError = form.querySelector(".is-invalid");
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
          firstError.focus();
        }
      } else {
        // Mostrar loader mientras se envía
        Swal.fire({
          title: "Enviando solicitud",
          html: "Por favor espere un momento...",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        try {
          // Enviar formulario con AJAX
          const formData = new FormData(form);

          // Agregar parámetros adicionales para FormSubmit.co
          formData.append("_captcha", "false");
          formData.append("_template", "table");

          const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });

          // Cerrar loader
          Swal.close();

          if (response.ok) {
            // Mostrar mensaje de éxito
            await Swal.fire({
              title: "¡Solicitud enviada!",
              text: "Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo pronto.",
              icon: "success",
              confirmButtonColor: "#28a745",
              confirmButtonText: "Entendido",
            });

            // Resetear formulario
            form.reset();
            form.classList.remove("was-validated");

            // Limpiar validaciones visuales
            document.querySelectorAll(".is-valid").forEach((el) => {
              el.classList.remove("is-valid");
            });

            // Resetear selección de país
            paisSelect.value = "";
            otroPaisContainer.classList.add("d-none");
            otroPaisInput.value = "";

            // Resetear productos
            checkboxes.forEach((cb) => (cb.checked = false));
            if (otrosCheckbox) otrosCheckbox.checked = false;
            if (otrosContainer) otrosContainer.classList.add("d-none");
            if (otrosInput) otrosInput.value = "";
          } else {
            throw new Error("Error en el servidor");
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al enviar el formulario. Por favor inténtalo de nuevo más tarde.",
            icon: "error",
            confirmButtonColor: "#dc3545",
            confirmButtonText: "Entendido",
          });
        }
      }

      form.classList.add("was-validated");
    },
    false
  );
});
