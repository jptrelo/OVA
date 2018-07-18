$(document).ready(function() {
  includeHTML();

  $( ".tab-term" ).click(function() {
    showDefinition(this);
  });

  $( ".close-definition" ).click(function() {
    hideDefinition();
  });

});

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
}

function showDefinition(termTab){
  var termObj = {
    acciones: "Políticas o medidas dirigidas a favorecer a determinadas personas o grupos, ya sea con el fin de eliminar o reducir las desigualdades de tipo social, cultural o económico que los afectan, o bien de lograr que los miembros de un grupo subrepresentado, usualmente un grupo que ha sido discriminado, tengan una mayor representación (Corte Constitucional. Sentencia C- 044, 2004).",
    discriminacion: "Acto de agrupar a los seres humanos según algún criterio elegido e implica una forma de relacionarse socialmente. Concretamente, suele ser usado para hacer diferenciaciones que atentan contra la igualdad, ya que implica un posicionamiento jerarquizado entre grupos sociales, es decir, cuando se erige un grupo con más legitimidad o poder que el resto.",
    estereotipo: "Imagen aceptada por la mayoría de las personas como representativa de un grupo humano o un colectivo de personas. Esta imagen se forma a partir de una concepción estática sobre las características generalizadas de las personas integrantes de dicha comunidad.",
    genero: "Conjunto de normas, valores, saberes, discursos y prácticas sociales que le atribuyen un contenido específico al cuerpo sexuado, a la sexualidad y a las diferencias físicas entre los sexos en una época y en un contexto determinado."

  };
  var term = $(termTab).data("term");
  var pDefinition = $("#ova-tab-definition");
  $(pDefinition).children('p')[0].innerHTML = termObj[term];

  if(!$(termTab).hasClass("tab-active")){
    if(!$(pDefinition).hasClass("tab-active")){
      $(pDefinition).slideToggle();
    }
    $('.tab-term').removeClass( "tab-active" );
    $(termTab).addClass( "tab-active" );
    $(pDefinition).addClass( "tab-active" );
  } else{
    hideDefinition()
  }
}

function hideDefinition(){
  var pDefinition = $("#ova-tab-definition");
  $(pDefinition).slideToggle();
  $('.tab-term').removeClass( "tab-active" );
  $(pDefinition).removeClass( "tab-active" );
}