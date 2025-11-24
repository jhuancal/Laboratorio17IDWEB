var ejercicio1 = function () {
  try {
    console.log(nombre);
  } catch (e) {
    console.log("Error: " + e.message);
  }
}

var ejercicio2 = function () {
  try {
    JSON.parse("{ nombre: 'Matias' }");
  } catch (e) {
    console.log("Error: " + e.name + " - " + e.message);
  }
}

var ejercicio3 = function () {
  try {
    console.log(nombre);
  } catch (e) {
    console.log("fallo");
  } finally {
    console.log("siempre se ejecuta");
  }
}

var ejercicio4 = function () {
  try {
    var edad = parseInt(prompt("Ingrese edad:"));
    validarEdad(edad);
    console.log("Edad: " + edad);
  } catch (e) {
    console.log("Error: " + e.message);
  }
}

var validarEdad = function (edad) {
  if (isNaN(edad) || edad < 0) {
    throw new Error("Edad invalida");
  }
}

var ejercicio5 = function () {
  try {
    let x = null;
    x.nombre;
  } catch (e) {
    if (e instanceof TypeError) {
      console.log("Error TypeError: " + e.message);
    } else {
      console.log("Error Otro: " + e.message);
    }
  }
}

var ejercicio6 = function () {
  try {
    nivel1();
  } catch (e) {
    console.log("ERROR FINAL capturado en el nivel superior: " + e.message);
  }
}

var nivel1 = function () {
  try {
    nivel2();
  } catch (e) {
    console.log("Nivel 1 recibio el error: " + e.message);
    throw e;
  }
}

var nivel2 = function () {
  try {
    console.log(x);
  } catch (e) {
    console.log("Nivel 2 atrapo el error: " + e.message);
    throw e;
  }
}

var ejercicio7 = function () {
  var cargarMensaje = function (callback) {
    setTimeout(() => {
      callback("Mensaje cargado");
    }, 1000);
  };

  cargarMensaje(function (mensaje) {
    console.log(mensaje);
  });
};

var ejercicio8 = function () {
  var cargarUsuario = function (callback) {
    var tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
    setTimeout(() => {
      var usuario = { id: 1, nombre: "Juancito" };
      callback(usuario);
    }, tiempo);
  };

  cargarUsuario(function (usuario) {
    console.log("Usuario cargado: " + usuario.nombre + " (ID: " + usuario.id + ")");
  });
};

var ejercicio9 = function () {
  var dividirAsync = function (a, b, callback) {
    setTimeout(() => {
      if (b === 0) {
        callback(new Error("No se puede dividir entre cero"), null);
      } else {
        callback(null, a / b);
      }
    }, 1500);
  };

  dividirAsync(10, 2, function (error, resultado) {
    if (error) {
      console.log("Error: " + error.message);
    } else {
      console.log("Resultado: " + resultado);
    }
  });

  dividirAsync(10, 0, function (error, resultado) {
    if (error) {
      console.log("Error: " + error.message);
    } else {
      console.log("Resultado: " + resultado);
    }
  });
};

var ejercicio10 = function () {
  var procesarLista = function (numeros, callback) {
    let procesados = 0;

    numeros.forEach(num => {
      var tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
      setTimeout(() => {
        console.log("Procesando " + num + "...");
        procesados++;
        if (procesados === numeros.length) {
          callback("Proceso completado");
        }
      }, tiempo);
    });
  };

  var lista = [5, 10, 15, 20];
  procesarLista(lista, function (rpta) {
    console.log(rpta);
  });
};

