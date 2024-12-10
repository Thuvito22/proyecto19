$(function() {
    console.log('Paso por aquí');
    
    $("#listar").on("click", function() {
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes", function(data) {
            $("#resListar").text("Ok");
            $("#resListar").attr("data-midato", data);
            console.log(data);
        });
    });

    $("#leer").on("click", function() {
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/1", function(data) {
            $("#resLeer").text("Ok"); 
            console.log(data);
        });
    });

    $('#crear').on('click', function() {
        $.ajax({
            url: "https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/1",
            method: "POST",
            success: function(data) {
                console.log(data);
            }
        });
    });
    
    $("#crear").on("click", function() {
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/1", function(data) {
            $("#resLeer").text("Ok"); 
            console.log(data);
        });
    });
});
