//mostramos valoracion
function mostrarValoracion() {
  var puntos = document.getElementById("valoracion").value;
  alert("Ha valorado con " + puntos + " puntos");
}

//mostramos cuenta
function mostrarCuenta() {
  var pais = document.getElementById("pais").value;
  var iban = document.getElementById("iban").value;
  var entidad = document.getElementById("entidad").value;
  var sucursal = document.getElementById("sucursal").value;
  var dc = document.getElementById("dc").value;
  var cuenta = document.getElementById("cuenta").value;

  alert(
    "Le informamos que su cuenta bancaria es: " +
      pais +
      "-" +
      iban +
      "-" +
      entidad +
      "-" +
      sucursal +
      "-" +
      dc +
      "-" +
      cuenta
  );
}

//mostramos el día
function mostrarDia() {
  var fecha = document.getElementById("fecha").value;
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  var numeroDia = new Date(fecha).getDay();
  var nombreDia = dias[numeroDia];
  alert("La fecha seleccionada en el elemento de fecha es: " + nombreDia);
}

//validamos que el codigo postal cumpla las reglas
document.getElementById("cpostal").addEventListener("focusout", validarCodigo);

function validarCodigo() {
  var cpostal = document.getElementById("cpostal").value;

  if (cpostal < 0 || cpostal > 52999 || isNaN(cpostal)) {
    alert("El código postal no es correcto");
  } else if ((cpostal == "") | (cpostal == " ")) {
    alert("Error! El campo código postal en blanco o con espacios");
  } else if (cpostal.length < 5) {
    alert("El código postal debe tener 5 números");
  }
}

//Validamos del código postal con la provincia

document
  .getElementById("provincia")
  .addEventListener("focusout", validarProvincia);

function validarProvinciaPostal() {
  //creamos un elemento p con el texto
  const verde = document
    .createElement("p")
    .appendChild(
      document.createTextNode("El codigo postal corresponde a la provincia")
    );
  var cpostal = document.getElementById("cpostal").value;
  var provin = document.getElementById("provincia").value;
  var provincia = provin.toUpperCase();
  var provincias = [
    "ALAVA",
    "ALBACETE",
    "ALICANTE",
    "ALMERIA",
    "AVILA",
    "BADAJOZ",
    "ISLAS BALEARES",
    "BARCELONA",
    "BURGOS",
    "CACERES",
    "CADIZ",
    "CASTELLON",
    "CIUDAD REAL",
    "CORDOBA",
    "LA CORUNHA",
    "CUENCA",
    "GERONA",
    "GRANADA",
    "GUADALAJARA",
    "GUIPUZCOA",
    "HUELVA",
    "HUESCA",
    "JAEN",
    "LEON",
    "LERIDA",
    "LA RIOJA",
    "LUGO",
    "MADRID",
    "MALAGA",
    "MURCIA",
    "NAVARRA",
    "ORENSE",
    "ASTURIAS",
    "PALENCIA",
    "LAS PALMAS",
    "PONTEVEDRA",
    "SALAMANCA",
    "SANTA CRUZ DE TENERIFE",
    "CANTABRIA",
    "SEGOVIA",
    "SEVILLA",
    "SORIA",
    "TARRAGONA",
    "TERUEL",
    "TOLEDO",
    "VALENCIA",
    "VALLADOLID",
    "VIZCAYA",
    "ZAMORA",
    "ZARAGOZA",
    "CEUTA",
    "MELILLA",
  ];
  var codigosPostales = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
  ];

  if (
    cpostal.substring(0, 2) == codigosPostales[0] &&
    provincia == provincias[0]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[1] &&
    provincia == provincias[1]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[2] &&
    provincia == provincias[2]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[3] &&
    provincia == provincias[3]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[4] &&
    provincia == provincias[4]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[5] &&
    provincia == provincias[5]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[6] &&
    provincia == provincias[6]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[7] &&
    provincia == provincias[7]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[8] &&
    provincia == provincias[8]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[9] &&
    provincia == provincias[9]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[10] &&
    provincia == provincias[10]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[11] &&
    provincia == provincias[11]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[12] &&
    provincia == provincias[12]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[13] &&
    provincia == provincias[13]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[14] &&
    provincia == provincias[14]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[15] &&
    provincia == provincias[15]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[16] &&
    provincia == provincias[16]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[17] &&
    provincia == provincias[17]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[18] &&
    provincia == provincias[18]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[19] &&
    provincia == provincias[19]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[20] &&
    provincia == provincias[20]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[21] &&
    provincia == provincias[21]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[22] &&
    provincia == provincias[22]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[23] &&
    provincia == provincias[23]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[24] &&
    provincia == provincias[24]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[25] &&
    provincia == provincias[25]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[26] &&
    provincia == provincias[26]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[27] &&
    provincia == provincias[27]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[28] &&
    provincia == provincias[28]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[29] &&
    provincia == provincias[29]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[30] &&
    provincia == provincias[30]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[31] &&
    provincia == provincias[31]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[32] &&
    provincia == provincias[32]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[33] &&
    provincia == provincias[33]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[34] &&
    provincia == provincias[34]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[35] &&
    provincia == provincias[35]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[36] &&
    provincia == provincias[36]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[37] &&
    provincia == provincias[37]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[38] &&
    provincia == provincias[38]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[39] &&
    provincia == provincias[39]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[40] &&
    provincia == provincias[40]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[41] &&
    provincia == provincias[41]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[42] &&
    provincia == provincias[42]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[43] &&
    provincia == provincias[43]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[44] &&
    provincia == provincias[44]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[45] &&
    provincia == provincias[45]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[46] &&
    provincia == provincias[46]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[47] &&
    provincia == provincias[47]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[48] &&
    provincia == provincias[48]
  ) {
    v; //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[49] &&
    provincia == provincias[49]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[50] &&
    provincia == provincias[50]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else if (
    cpostal.substring(0, 2) == codigosPostales[51] &&
    provincia == provincias[51]
  ) {
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(verde);
    //cambiamos el color a verde
    document.getElementById("posicion").style.color = "green";
  } else {
    //en caso de que el cp y la provincia no concuerden

    //creamos un elemento p con el texto
    const rojo = document
      .createElement("p")
      .appendChild(
        document.createTextNode(
          "El codigo postal no corresponde a la provincia"
        )
      );
    //lo hacemos hijo del elemnto padre posicion en el html
    document.getElementById("posicion").appendChild(rojo);
    //cambiamos el color a rojo
    document.getElementById("posicion").style.color = "red";
  }
}

// Validamos del campo de provincia
document
  .getElementById("provincia")
  .addEventListener("change", validarProvincia);

function validarProvincia() {
  var provin = document.getElementById("provincia").value;
  var provincia = provin.toUpperCase();
  var provincias = [
    "ALAVA",
    "ALBACETE",
    "ALICANTE",
    "ALMERIA",
    "AVILA",
    "BADAJOZ",
    "ISLAS BALEARES",
    "BARCELONA",
    "BURGOS",
    "CACERES",
    "CADIZ",
    "CASTELLON",
    "CIUDAD REAL",
    "CORDOBA",
    "LA CORUNHA",
    "CUENCA",
    "GERONA",
    "GRANADA",
    "GUADALAJARA",
    "GUIPUZCOA",
    "HUELVA",
    "HUESCA",
    "JAEN",
    "LEON",
    "LERIDA",
    "LA RIOJA",
    "LUGO",
    "MADRID",
    "MALAGA",
    "MURCIA",
    "NAVARRA",
    "ORENSE",
    "ASTURIAS",
    "PALENCIA",
    "LAS PALMAS",
    "PONTEVEDRA",
    "SALAMANCA",
    "SANTA CRUZ DE TENERIFE",
    "CANTABRIA",
    "SEGOVIA",
    "SEVILLA",
    "SORIA",
    "TARRAGONA",
    "TERUEL",
    "TOLEDO",
    "VALENCIA",
    "VALLADOLID",
    "VIZCAYA",
    "ZAMORA",
    "ZARAGOZA",
    "CEUTA",
    "MELILLA",
  ];

  if (provincias.indexOf(provincia) < 0) {
    alert("La provincia no es válida");
    window.location.reload(true);
  }
}
