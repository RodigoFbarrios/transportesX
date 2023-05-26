function validateForm() {
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
  
    if (name === "" || lastName === "" || phone === "" || email === "" || comment === "") {
      alert("Por favor, completa todos los campos.");
      return false;
    }
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un email válido.");
      return false;
    }
  
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Por favor, ingresa un número de teléfono válido (10 dígitos).");
      return false;
    }
  
    return true;
  }
  
  
  
  
  
  