const fondo = document.getElementById("fondo");
const color=document.getElementById("colores");
const agregar=document.getElementById("enviar");
const hora =document.getElementById("hora")
const fecha = document.getElementById("fecha");
const tarea =document.getElementById("tarea");
const listado=document.getElementById("listado");
const limpiar=document.getElementById("limpiar");
let lista=[];
let cont =1;

fecha.focus();


color.addEventListener('change', function(){    
    fondo.style.backgroundColor= color.value;
});


agregar.addEventListener('click', function(){
    //cont ++;
    if(tarea.value !==""){
        
    if (cont<=9){
        let parrafo=document.createElement("p");
        parrafo.innerHTML= `<input type='checkbox' id='chequeo-0${cont}'></input> |
        <span> 0${cont} | ${document.getElementById("hora").value} | ${document.getElementById("fecha").value} | ${document.getElementById("tarea").value}</span> 
        | <button class='bg-green-500 h-[30px] w-[100px] rounded-xl' id='completar-0${cont}'>Completado</button>
        | <button class='bg-red-500 h-[30px] w-[100px] rounded-xl' id='eliminar-0${cont}'>Eliminar</button>`;
        listado.appendChild(parrafo);

        hora.value="00:00";
        fecha.value="";
        tarea.value="";
        fecha.focus();

        const chequeo =document.getElementById(`chequeo-0${cont}`);
        const eliminar = document.getElementById(`eliminar-0${cont}`);
        const completar = document.getElementById(`completar-0${cont}`);
        

        eliminar.addEventListener(`click`,() =>{
            
            console.log(completar);
            //if (parrafo.classList.contains('text-green-500') && parrafo.classList.contains('line-through')){
                if (parrafo.classList.contains('line-through')){
                listado.removeChild(parrafo);
            }else{
                alert ("No se puede eliminar, no se ha completado esta tarea" );
            };
        });    
        
        completar.addEventListener(`click`, function() {
            //parrafo.classList.add('text-green-500');
            parrafo.classList.toggle('line-through');
            chequeo.checked = !chequeo.checked;
        });

        chequeo.addEventListener('change',function(){
            parrafo.classList.toggle('line-through');
        });
        
    }else{
        let parrafo=document.createElement("p");
        parrafo.innerHTML= `<input type='checkbox' id='chequeo-${cont}'></input> |
        ${cont} | ${document.getElementById("hora").value} | ${document.getElementById("fecha").value} | ${document.getElementById("tarea").value} 
        | <button class='bg-green-500 h-[30px] w-[100px] rounded-xl' id='completar-${cont}'>Completado</button>
        | <button class='bg-red-500 h-[30px] w-[100px] rounded-xl' id='eliminar-${cont}'>Eliminar</button>`;
        listado.appendChild(parrafo);
        
        hora.value="00:00";
        fecha.value="";
        tarea.value="";
        fecha.focus();
        
    
        const chequeo =document.getElementById(`chequeo-${cont}`);
        const eliminar = document.getElementById(`eliminar-${cont}`);
        const completar = document.getElementById(`completar-${cont}`);
        
        eliminar.addEventListener(`click`,() =>{
            
            console.log(completar);
            //if (parrafo.classList.contains('text-green-500') && parrafo.classList.contains('line-through')){
            if (parrafo.classList.contains('line-through')){
                listado.removeChild(parrafo);
            }else{
                alert ("No se puede eliminar, no se ha completado esta tarea" );
            };
        });    
        
        completar.addEventListener(`click`, function() {
            //parrafo.classList.add('text-green-500');
            parrafo.classList.toggle('line-through');
            chequeo.checked = !chequeo.checked;
        });
        
        chequeo.addEventListener('change',function(){
            parrafo.classList.toggle('line-through');
        });
    };    
    cont++;
}else{
    alert("No se agrego ninguna tarea");
};

       
});

limpiar.addEventListener('click',function(){
    
    hora.value="00:00"
    fecha.value="";
    tarea.value="";
    color.value="#000000"
    location.reload();
    fecha.focus();
});

