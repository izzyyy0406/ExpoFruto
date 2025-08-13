document.addEventListener("DOMContentLoaded", function () {
  // Validación del formulario mejorada
  (function () {
    "use strict";

    const form = document.getElementById("formularioProductor");
    if (!form) return;

    // Elementos del formulario
    const checkboxes = document.querySelectorAll('input[name="cultivos"]');
    const otrosCheckbox = document.getElementById("otros");
    const otrosContainer = document.getElementById("otrosProductosContainer");
    const otrosInput = document.getElementById("otrosProductos");
    const paisSelect = document.getElementById("pais");
    const telefonoInput = document.getElementById("telefono");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const emailInput = document.getElementById("email");
    const privacidadCheckbox = document.getElementById("privacidad");

    // Configurar contenedor para "Otro país"
    const otroPaisContainer = document.createElement("div");
    otroPaisContainer.className = "mt-3 d-none";
    otroPaisContainer.innerHTML = `
      <label for="otroPais" class="form-label">Especifica tu país:</label>
      <input type="text" class="form-control" id="otroPais" name="otroPais" placeholder="Escribe tu país">
      <div class="invalid-feedback">Por favor especifica tu país.</div>
    `;
    paisSelect.parentNode.insertBefore(
      otroPaisContainer,
      paisSelect.nextSibling
    );
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

    // Funciones de validación
    function validateOtroPais() {
      if (paisSelect.value !== "Otro") return true;
      if (otroPaisInput.value.trim() === "") {
        otroPaisInput.classList.add("is-invalid");
        return false;
      }
      otroPaisInput.classList.remove("is-invalid");
      return true;
    }

    function toggleOtrosProductos() {
      if (otrosCheckbox.checked) {
        otrosContainer.classList.remove("d-none");
        otrosInput.setAttribute("required", "");
      } else {
        otrosContainer.classList.add("d-none");
        otrosInput.removeAttribute("required");
        otrosInput.value = "";
      }
    }

    function validateCultivos() {
      const selected = document.querySelectorAll(
        'input[name="cultivos"]:checked'
      ).length;
      const cultivosContainer = document.querySelector(".cultivos-container");
      const errorMsg = "Por favor seleccione entre 1 y 2 cultivos principales";

      if (selected < 1 || selected > 2) {
        cultivosContainer.style.border = "1px solid #dc3545";
        let existingError = cultivosContainer.querySelector(".error-msg");
        if (!existingError) {
          existingError = document.createElement("div");
          existingError.className = "text-danger mt-2 small error-msg";
          existingError.textContent = errorMsg;
          cultivosContainer.appendChild(existingError);
        }
        return false;
      }

      cultivosContainer.style.border = "1px solid #ced4da";
      const existingError = cultivosContainer.querySelector(".error-msg");
      if (existingError) existingError.remove();
      return true;
    }

    function validateOtrosProductos() {
      if (!otrosCheckbox?.checked) return true;
      if (otrosInput.value.trim() === "") {
        otrosInput.classList.add("is-invalid");
        return false;
      }
      otrosInput.classList.remove("is-invalid");
      return true;
    }

    function validateTelefono() {
      const telefono = telefonoInput.value.trim();
      const telefonoRegex = /^[0-9]{7,15}$/;
      const isValid = telefonoRegex.test(telefono);

      telefonoInput.classList.toggle("is-invalid", !isValid);
      telefonoInput.nextElementSibling.textContent = isValid
        ? ""
        : "Por favor ingrese un número de teléfono válido (solo números, 7-15 dígitos)";
      return isValid;
    }

    function validateNombreApellido() {
      const letrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
      const nombreValido = letrasRegex.test(nombreInput.value.trim());
      const apellidoValido = letrasRegex.test(apellidoInput.value.trim());

      nombreInput.classList.toggle("is-invalid", !nombreValido);
      nombreInput.nextElementSibling.textContent = nombreValido
        ? ""
        : "Por favor ingrese solo letras y espacios";

      apellidoInput.classList.toggle("is-invalid", !apellidoValido);
      apellidoInput.nextElementSibling.textContent = apellidoValido
        ? ""
        : "Por favor ingrese solo letras y espacios";

      return nombreValido && apellidoValido;
    }

    function validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailRegex.test(emailInput.value.trim());

      emailInput.classList.toggle("is-invalid", !isValid);
      emailInput.nextElementSibling.textContent = isValid
        ? ""
        : "Por favor ingrese un correo electrónico válido (ejemplo: usuario@dominio.com)";
      return isValid;
    }

    function validatePrivacidad() {
      const isValid = privacidadCheckbox.checked;
      privacidadCheckbox.classList.toggle("is-invalid", !isValid);
      return isValid;
    }

    // Event listeners
    if (otrosCheckbox)
      otrosCheckbox.addEventListener("change", toggleOtrosProductos);

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const selected = document.querySelectorAll(
          'input[name="cultivos"]:checked'
        ).length;
        if (selected > 2) this.checked = false;
        validateCultivos();
      });
    });

    // Configurar validación en tiempo real
    const setupLiveValidation = (input, validationFn) => {
      input.addEventListener("input", function () {
        validationFn();
        this.classList.toggle(
          "is-valid",
          this.value && !this.classList.contains("is-invalid")
        );
      });
      input.addEventListener("blur", validationFn);
    };

    setupLiveValidation(telefonoInput, validateTelefono);
    setupLiveValidation(nombreInput, () => validateNombreApellido());
    setupLiveValidation(apellidoInput, () => validateNombreApellido());
    setupLiveValidation(emailInput, validateEmail);
    if (otrosInput) setupLiveValidation(otrosInput, validateOtrosProductos);
    if (otroPaisInput) setupLiveValidation(otroPaisInput, validateOtroPais);
    privacidadCheckbox.addEventListener("change", validatePrivacidad);

    // Envío del formulario con SweetAlert
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      // Validar todos los campos
      const validations = [
        validateNombreApellido(),
        validateEmail(),
        validateTelefono(),
        validateCultivos(),
        validateOtrosProductos(),
        validateOtroPais(),
        validatePrivacidad(),
      ];

      // Validar campos requeridos
      const requiredFields = Array.from(form.querySelectorAll("[required]"));
      requiredFields.forEach((field) => {
        field.classList.toggle("is-invalid", !field.value.trim());
      });

      const allValid =
        validations.every((v) => v) &&
        !form.querySelectorAll(".is-invalid").length;

      if (!allValid) {
        Swal.fire({
          title: "Formulario incompleto",
          html: "Por favor complete todos los campos requeridos <strong>correctamente</strong>.",
          icon: "error",
          confirmButtonColor: "#dc3545",
        });

        const firstError = form.querySelector(".is-invalid");
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
          firstError.focus();
        }
        return;
      }

      // Mostrar loader
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin me-2"></i> Enviando...';
      submitBtn.disabled = true;

      try {
        Swal.fire({
          title: "Enviando formulario",
          html: "Por favor espere...",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });

        const formData = new FormData(form);
        formData.append("_captcha", "false");
        formData.append("_template", "table");

        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (!response.ok) throw new Error("Error en el servidor");

        await Swal.fire({
          title: "¡Registro exitoso!",
          text: "Gracias por registrarte como productor. Nos pondremos en contacto contigo pronto.",
          icon: "success",
          confirmButtonColor: "#28a745",
        });

        // Resetear formulario
        form.reset();
        form.classList.remove("was-validated");
        document
          .querySelectorAll(".is-valid")
          .forEach((el) => el.classList.remove("is-valid"));

        // Resetear campos especiales
        paisSelect.value = "";
        otroPaisContainer.classList.add("d-none");
        otroPaisInput.value = "";
        checkboxes.forEach((cb) => (cb.checked = false));
        if (otrosCheckbox) otrosCheckbox.checked = false;
        if (otrosContainer) otrosContainer.classList.add("d-none");
        if (otrosInput) otrosInput.value = "";

        // Redirección si está configurada
        const nextUrl = form.querySelector('[name="_next"]')?.value;
        if (nextUrl)
          setTimeout(() => {
            window.location.href = nextUrl;
          }, 1500);
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: "Hubo un problema al enviar el formulario. Por favor inténtalo de nuevo más tarde.",
          icon: "error",
          confirmButtonColor: "#dc3545",
        });
      } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        Swal.close();
      }
    });
  })();
});
