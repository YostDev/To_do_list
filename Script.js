$(function(){
  
  if(localStorage.getItem("contenidoDiv") !== null) {
    var contenidoRecuperado = localStorage.getItem("contenidoDiv");
    $("#cont").html(contenidoRecuperado);
  }
    
  function guardar(){
    var contenidoDiv = $("#cont").html();
    localStorage.setItem("contenidoDiv", contenidoDiv);
  }
  
  $("#nota").hide();
  var abrir = true;
  $(".anadir").html("<i class='fas fa-plus'></i><p>Add task</p>");
  
  //funcion notas
      $(".anadir").click(function(){
        if(abrir){
          $("#nota").slideDown();
          $(this).html("<p>Cerrar</p>");
          abrir = !abrir;
        } else {
          if($("#nota").val() === ""){
            $("#nota").slideUp();
            $(this).html("<i class='fas fa-plus'></i><p>Add task</p>");
            abrir = !abrir;
          } else if ($("#nota").val().length < 19) {
            $("#cont").prepend(`
              <div class="notita">
                <div class="nose">
                  <div class="radio"></div>
                  <h2>
                    ${$("#nota").val()}
                  </h2>
                </div>

                <i class="fas fa-trash-alt"></i>
              </div>
            `);
            $("#nota").val("");
            $(this).html("<p>Cerrar</p>");
            guardar();
          }
        }
      });
      $("#nota").on("keyup", function() {
        if(abrir === false){
          if($(this).val() === ""){
            $(".anadir").html("<p>Cerrar</p>");
          
          } else {
             $(".anadir").html("<p>Añadir</p>");
          }
        }
      });
      $("#cont").on("click", ".fa-trash-alt", function(){
        $(this).parent().remove();
        guardar();
      });
      
      
      //radio
      $("#cont").on("click", ".radio", function(){
                var pElement = $(this).parent().children("h2").eq(0);
    if ($(this).hasClass('fondo-morado')) {
        $(this).removeClass('fondo-morado').addClass('fondo-blanco');
        pElement.css("text-decoration", "none"); 
    } else {
        $(this).removeClass('fondo-blanco').addClass('fondo-morado');
        pElement.css("text-decoration", "line-through"); 
    }
    guardar();
      });
      
    $(".menu").hide();
    
    $(".fa-bars").click(function(){
      $(".menu").slideDown();
      console.log("abrir");
    });
    $(".fa-x").click(function(){
      $(".menu").slideUp();
      console.log("cerrar");
    });
});