class Inventario{
   constructor(productos){
      this.productos=[];
   }

   agregar(producto){
      this.productos.push(producto);
   }

   buscar(codigo){
      for(let i=0; i<this.productos.length; i++){
         if(this.productos[i].codigo==codigo){
            return this.productos[i];
         }
      }

      return null;
   }

   eliminar(codigo){
      let nuevo=[];

      for(let i=0; i<this.productos.length; i++){
         if(this.productos[i].codigo!=codigo){
            nuevo.push(this.productos[i]);
         }
      }

      this.productos=nuevo;
   }

   insertarProductoPosicion(producto, posicion){
      let nuevo=[];

      for(let i=0; i<this.productos.length; i++){
         if(i==posicion){
            nuevo.push(producto);
         }

         nuevo.push(this.productos[i]);
      }

      if(posicion>=this.productos.length){
         nuevo.push(producto);
      }

      this.productos=nuevo;
   }

   agregarInicio(producto){
      this.insertarProductoPosicion(producto,0);
   }

   listar(){
      let result="";

      for(let i=0; i<this.productos.length; i++){
         result+=this.productos[i].infoHtml();
      }

      return result;
   }

   listarInverso(){
      let result="";

      for(let i=this.productos.length-1; i>=0; i--){
         result+=this.productos[i].infoHtml();
      }

      return result;
   }

   extraerPrimero(){
      if(this.productos.length==0){
         return null;
      }

      let primero=this.productos[0];
      let nuevo=[];

      for(let i=1; i<this.productos.length; i++){
         nuevo.push(this.productos[i]);
      }

      this.productos=nuevo;

      return primero;
   }
}