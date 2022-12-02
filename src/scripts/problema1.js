
const btnResolverProblema = document.querySelector("#resolverProblema");
btnResolverProblema.addEventListener('click',(e)=>{

    const valorR = document.querySelector("#r").value;
    const valorC= document.querySelector("#c").value;
    
    const r = Number(valorR); 
    const c  = Number(valorC);
    
    let rc;
    if (valorC!="" || valorR!="") {
        if (isNaN(r)|| isNaN(c))   {
            Swal.fire({
                icon: 'error',
                title: 'VERIFIQUE LOS DATOS',
                text: 'Los datos ingresados no son números',
                
              })
        }else{
          if (r==0 || c==0) {
            Swal.fire({
                icon: 'error',
                title: 'VERIFIQUE LOS DATOS',
                text: 'No se puede dividir entre 0',
                
              })
            
        } else{
            const corchetes = document.querySelectorAll("#corchete");
            while (corchetes[0].firstChild) {
                corchetes[0].removeChild(corchetes[0].lastChild);
              }

              while (corchetes[1].firstChild) {
                corchetes[1].removeChild(corchetes[1].lastChild);
              }
            
            rc  = 1/ (r*c);
           corchetes[0].innerHTML=  `
           <mfenced  class="" id="corchete" open="[" close="]" separators="    ">
      
           <mi id="RC">${-1*(rc)}</mi>
       
            </mfenced> 
           `;
           corchetes[1].innerHTML=`<mi id="RC">${(rc)}</mi>`;
           
        }
          
        }
        
       
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'VERIFIQUE LOS DATOS',
            text: 'El campo está vacio',
            
          })
    }

    

   



    


})
