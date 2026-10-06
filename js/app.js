let inventario=new Inventario();


document.getElementById("btnAgregarP").addEventListener("click", function(){

   let codigo=document.getElementById("codigo").value;
   let nombre=document.getElementById("nombre").value;
   let cantidad=document.getElementById("cantidad").value;
   let costo=document.getElementById("costo").value;

   let nuevo=new Producto(codigo,nombre,cantidad,costo);

   inventario.agregar(nuevo);

   document.getElementById("detalles").innerHTML=
      "<p>Producto agregado:</p>" +
      nuevo.infoHtml();
});


document.getElementById("btnBuscar").addEventListener("click", function(){

   let codigo=document.getElementById("codigo").value;

   let res=inventario.buscar(codigo);

   if(res==null){
      document.getElementById("detalles").innerHTML=
         "<p>No existe el producto</p>";
   }
   else{
      document.getElementById("detalles").innerHTML=
         "<p>Producto encontrado:</p>" +
         res.infoHtml();
   }
});


document.getElementById("btnEliminar").addEventListener("click", function(){

   let codigo=document.getElementById("codigo").value;

   inventario.eliminar(codigo);

   document.getElementById("detalles").innerHTML=
      "<p>Producto eliminado si existía.</p>" +
      inventario.listar();
});


document.getElementById("btnInsertar").addEventListener("click", function(){

   let codigo=document.getElementById("codigo").value;
   let nombre=document.getElementById("nombre").value;
   let cantidad=document.getElementById("cantidad").value;
   let costo=document.getElementById("costo").value;

   let posicion=parseInt(prompt("Escribe la posición donde quieres insertar el producto:"));

   let nuevo=new Producto(codigo,nombre,cantidad,costo);

   inventario.insertarProductoPosicion(nuevo,posicion);

   document.getElementById("detalles").innerHTML=
      "<p>Producto insertado:</p>" +
      nuevo.infoHtml();
});


document.getElementById("btnRecuperar").addEventListener("click", function(){

   document.getElementById("detalles").innerHTML=
      inventario.listar();
});


document.getElementById("btnExtraer").addEventListener("click", function(){

   let res=inventario.extraerPrimero();

   if(res==null){
      document.getElementById("detalles").innerHTML=
         "<p>No hay productos.</p>";
   }
   else{
      document.getElementById("detalles").innerHTML=
         "<p>El primer producto era:</p>" +
         res.infoHtml();
   }
});


document.getElementById("btnAgregarInicio").addEventListener("click", function(){

   let codigo=document.getElementById("codigo").value;
   let nombre=document.getElementById("nombre").value;
   let cantidad=document.getElementById("cantidad").value;
   let costo=document.getElementById("costo").value;

   let nuevo=new Producto(codigo,nombre,cantidad,costo);

   inventario.agregarInicio(nuevo);

   document.getElementById("detalles").innerHTML=
      "<p>Producto agregado al inicio:</p>" +
      nuevo.infoHtml();
});


document.getElementById("btnListar").addEventListener("click", function(){

   document.getElementById("detalles").innerHTML=
      inventario.listar();
});


document.getElementById("btnListarInverso").addEventListener("click", function(){

   document.getElementById("detalles").innerHTML=
      inventario.listarInverso();
});