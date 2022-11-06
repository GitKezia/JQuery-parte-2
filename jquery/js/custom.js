// Instancia jquery e evita conflitos
// jQuery(function($){

    $(document).ready(function(){

        $('.owl-carousel').owlCarousel();
     
        let titulos = $('h4') // tag
        let itens = $('.featured-item') // class
        let destaques =  $('#featured'); // id
     
        console.log(titulos.first());
     
     });