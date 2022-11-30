
const btnResolverProblema = document.querySelector("#resolverProblema")

btnResolverProblema.addEventListener('click',(e)=>{

    const valorR = document.querySelector("#r1").value;
    const valorC= document.querySelector("#c1").value;
    const valorR1 = document.querySelector("#r2").value;
    const valorC1= document.querySelector("#c2").value;
    
    const r = Number(valorR);
    const c  = Number(valorC);
    const r1 = Number(valorR1);
    const c1  = Number(valorC1);
  
    if (valorC!="" || valorR!=""||valorC1!="" || valorR1!="") {
        if (isNaN(r)|| isNaN(c) || isNaN(r1)|| isNaN(c1))  {
            Swal.fire({
                icon: 'error',
                title: 'VERIFIQUE LOS DATOS',
                text: 'Los datos ingresados no son números',
                
              })
        }if (r==0 || c==0 || c1==0 || r1==0) {
            Swal.fire({
                icon: 'error',
                title: 'VERIFIQUE LOS DATOS',
                text: 'No se puede dividir entre 0',
                
              })
            
        } else{
            console.log("else")
           
            
            const ecuacion1 = document.querySelector("#ecuacion1");
            const ecuacion2 = document.querySelector("#ecuacion2");
            const ecuacion3 = document.querySelector("#ecuacion3");
            while (ecuacion1.firstChild) {
                ecuacion1.removeChild(ecuacion1.lastChild);
              }

              while (ecuacion2.firstChild) {
                ecuacion2.removeChild(ecuacion2.lastChild);
              }

              while (ecuacion3.firstChild) {
                ecuacion3.removeChild(ecuacion3.lastChild);
              }
            
            let valorEcuacion1 = ((-1/c)*((1/r)+(1/r1))*(1/(r1*c)));
            let valorEcuacion2= (1/(r*c));
            let valorEcuacion3 = ((1/(r1*c1))-(-1/(r1*c1)));

           ecuacion1.innerHTML=  `
           <mrow>
           <mi id="RC">${(valorEcuacion1)}</mi>
            </mrow>
           
           `;
           ecuacion2.innerHTML=`<mi id="RC">${(valorEcuacion2)}</mi>`;
           ecuacion3.innerHTML=`<mi id="RC">${(valorEcuacion3)}</mi>`;
           
        }
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'VERIFIQUE LOS DATOS',
            text: 'El campo está vacio',
            
          })
    }

    

   



    


})
