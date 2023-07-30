$(document).ready(function() {
  // Slider
  if (window.location.href.indexOf('index') > -1) {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
    });
  }

  // Post
  if (window.location.href.indexOf('index') > -1) {
    var posts = [
      {
        title: 'Prueba de titulo 1',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis purus ac nunc bibendum scelerisque. Fusce consectetur mi a lorem feugiat, sed laoreet diam placerat.'
      },
      {
        title: 'Prueba de titulo 2',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis purus ac nunc bibendum scelerisque. Fusce consectetur mi a lorem feugiat, sed laoreet diam placerat.'
      },
      // Agrega aquí más objetos de posts si es necesario
    ];

    posts.forEach((item, index) => {
      var post = `
        <article class="post">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>
            ${item.content}
          </p>
          <a href="#" class="button-more">Leer más</a>
        </article>
      `;
      $("#posts").append(post); // Añadir el post al elemento con id "posts"
    });
  }

  // Cambiar el tema de color
  var theme = $("#theme");
  $("#to-green").click(function() {
    theme.attr("href", "css/green.css");
  });
  $("#to-red").click(function() {
    theme.attr("href", "css/red.css");
  });
  $("#to-blue").click(function() {
    theme.attr("href", "css/blue.css");
  });

  // Evento para pulsar y subir arriba
  $('.subir').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  // FALSO LOGIN
  $("#login form").submit(function() {
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name !== "undefined") {
    var about_parrafo = $("#about p");

    about_parrafo.html("<br><strong>Bienvenido, <strong>" + form_name + "</strong>");
    about_parrafo.append("<a href='#' id='logout'>cerrar sesión</a>");

    $("#login").hide();

    $('#logout').click(function() {
      localStorage.removeItem("form_name");
      location.reload(); // Recargar la página para volver al formulario de inicio de sesión
    });
  }
//ACORDEON
  if (window.location.href.indexOf('about') > -1) {
     $("#acordeon").accordion({
       collapsible: true, // Permite cerrar todos los paneles abiertos
       active: false, // Ningún panel abierto por defecto
       heightStyle: "content" // Ajusta automáticamente la altura del panel al contenido
     });
   }

   if(window.location.href.indexOf('reloj') > -1){

   setInterval(function(){ //REPITE EL INTERCALO CADA 1000ms PARA QUE CORRAN LOS SEGUNDOS
        var reloj = moment().format("hh:mm:ss"); //METODOS DE MOMENT.JS
        $('#reloj').html(reloj);
   },1000);

   }
//VALIDACION
if (window.location.href.indexOf('contact') > -1) {
   $("form input[name='date']").datepicker({
     dateFormat: 'dd-mm-yy'
   });
   $.validate({
     lang: 'es',
     errorMessagePosition: 'top',
     scrollToToOnError: true
   });
 }


 });