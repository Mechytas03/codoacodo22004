const jquery = require("./jQuery");

$jQuery(document).ready(listo);


function listo(){
    $jQuery(".hamb").click(function(e){
        e.preventDefault();
        jquery("header .container nav").toggleClass("open");
        jquery(".hamb i").toggleClass("fa-x");

    });
    $jQuery("header . container nav a").click(function(){
        jQuery("header .container nav").removeClass("open");
        jQuery("hamb i").removeClass("fa-x");
        var mer = jQuery(this).attr("href");
    jQuery("html, body").animate({
        "scrollTop": jQuery(mer).offset().top-76
    })
    })
}
