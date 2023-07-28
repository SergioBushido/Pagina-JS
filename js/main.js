$(document).ready(function() {
   // Slider
   $('.bxslider').bxSlider({
     mode: 'fade',
     captions: true,
     slideWidth: 1200
   });

   // Post
   var posts = [
     {
       title: 'Prueba de titulo 1',
       date:'Publicado el día '+ moment().date()+ " de "+ moment().format("MMMM") + " del "+moment().format("YYYY"),//plugin de MOMENT
       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis purus ac nunc bibendum scelerisque. Fusce consectetur mi a lorem feugiat, sed laoreet diam placerat.'
     },
     {
       title: 'Prueba de titulo 2',
       date:'Publicado el día '+ moment().date()+ " de "+ moment().format("MMMM") + " del "+moment().format("YYYY"),//plugin de MOMENT
       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis purus ac nunc bibendum scelerisque. Fusce consectetur mi a lorem feugiat, sed laoreet diam placerat.'
     },
     {
       title: 'Prueba de titulo 3',
       date:'Publicado el día '+ moment().date()+ " de "+ moment().format("MMMM") + " del "+moment().format("YYYY"),//plugin de MOMENT
       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis purus ac nunc bibendum scelerisque. Fusce consectetur mi a lorem feugiat, sed laoreet diam placerat.'
     },
     {
       title: 'Prueba de titulo 4',
       date:'Publicado el día '+ moment().date()+ " de "+ moment().format("MMMM") + " del "+moment().format("YYYY"),//plugin de MOMENT
       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis purus ac nunc bibendum scelerisque. Fusce consectetur mi a lorem feugiat, sed laoreet diam placerat.'
     },
     {
       title: 'Prueba de titulo 5',
       date:'Publicado el día '+ moment().date()+ " de "+ moment().format("MMMM") + " del "+moment().format("YYYY"),//plugin de MOMENT
       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis purus ac nunc bibendum scelerisque. Fusce consectetur mi a lorem feugiat, sed laoreet diam placerat.'
     },
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
    $("#posts").append(post); //PARA CARGAR EN INDEX EL POST

 });


   /*ESTO ERA EL ESTADO INICIAL ANTES DE UTILIZAR JSON Y JQUERY
   <article class="post">
                       <h2>Prueba de titulo</h2>
                       <span class="date">Fecha de publicación</span>
                       <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Maecenas iaculis purus ac nunc bibendum scelerisque.
                           Fusce consectetur mi a lorem feugiat, sed laoreet diam placerat.
                           Curabitur dignissim ut leo eu vestibulum. In ac commodo nunc, quis vulputate tellus.
                           Duis nec consequat elit, sed vehicula odio. Integer dapibus urna eu justo cursus,
                           vel facilisis risus faucibus.
                           Aliquam pharetra placerat elit, quis consequat dui posuere quis.
                           Praesent interdum nisi id velit aliquam rutrum. Quisque quis fringilla augue.
                           Vivamus non aliquet massa. Aliquam erat volutpat. Vivamus consectetur,
                           nisi vel varius facilisis,
                           turpis sem euismod magna, id auctor purus arcu in risus.
                           Praesent vestibulum vitae risus semper tincidunt.
                           Suspendisse vulputate nisi eros, ut tincidunt nisl fermentum eu.
                       </p>
                       <a href="#" class="button-more">Leer más</a>
                   </article>*/

   //CAPTURANDO EL EVENTO CLICK PARA CAMBIAR DE COLOR
   var theme =$("#theme");
   $("#to-green").click(function(){
     theme.attr("href","css/green.css")
   });
   $("#to-red").click(function(){
     theme.attr("href","css/red.css")
   });
   $("#to-blue").click(function(){
     theme.attr("href","css/blue.css")
    });

    //EVENTO PARA PULSAR I SUBIR ARRIBA

    $('.subir').click(function(e){
    e.preventDefault();
    $('html,body').animate({
            scrollTop: 0 //metodo jquery pixel 0 desde donde empieza la web
        }, 500);
        return false;
    });
 });
