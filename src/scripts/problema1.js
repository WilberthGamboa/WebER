
const btnResolverProblema = document.querySelector("#resolverProblema")

btnResolverProblema.addEventListener('click',(e)=>{

    const valorR = document.querySelector("#r").value;
    const valorC= document.querySelector("#c").value;
    
    const r = Number(valorR);
    const c  = Number(valorC);
    console.log(r)
    let rc;
    if (valorC!="" || valorR!="") {
        if (isNaN(r)|| isNaN(c))   {
            Swal.fire({
                icon: 'error',
                title: 'VERIFIQUE LOS DATOS',
                text: 'Los datos ingresados no son números',
                
              })
        }else{
           rc  = r*c;
           const labelRC = document.querySelectorAll('#RC');
    
           labelRC[0].innerHTML=rc;
           labelRC[1].innerHTML=rc;
        }
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'VERIFIQUE LOS DATOS',
            text: 'El campo está vacio',
            
          })
    }

    

   



    


})
