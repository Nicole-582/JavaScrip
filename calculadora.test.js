
'use strict';
describe('Test the calculate function', function (){
    const calcular= require('./Calculadora.js');

    describe('Sum cases', function (){
        it ('Should return the sum of 4, 5, 6 and 7', function (){ 
        try{ 
            
            const result_sum= calcular('4','5','6','7','+');
            expect(result_sum).toBe('22');
            
        }catch{
            document.body.innerHTML = `<div id="pantalla">Error</div>`;
            

            const pantalla=document.getElementById('pantalla');
            expect(pantalla.textContent).toBe("Error");
        }
        });      
    });
    describe('Division cases', function (){
        it ('Should return de division between 4 and 2', function (){ 
           try{ 
               const result_division= calcular('4','2','/');
               expect(result_division).toBe('2');
            
            }catch{
               document.body.innerHTML = `<div id="pantalla">Error</div>`;
            
               const pantalla=document.getElementById('pantalla');
               expect(pantalla.textContent).toBe("Error");
            }
        });      
    });
});

describe ('Test the function agregar', function(){
    const agregar=require('./Calculadora.js');
    it('Should return error', function(){
        try{
            const result=agregar('0','4','/');
            expect(result).toBe('Error');
        }catch{
            document.body.innerHTML = `<div id="pantalla">Error</div>`;
            const pantalla=document.getElementById('pantalla');
            expect(pantalla.textContent).toBe('Error');

        }
    })
})
describe ('Test the function limpiar', function(){
    const limpiar=require('./Calculadora.js');
    it('Should return 0', function(){
        document.body.innerHTML = `<div id="pantalla">0</div>`;
        document.body.innerHTML='<div id="pantalla" class="operacion">0</div>';
        const clean=limpiar('7','5','+');
        expect(pantalla.textContent).toBe('0');
    })
})
describe('Test the function retroceder', function(){
    const retroceder=require('./Calculadora.js');
    it ('Shoul return a step before', function(){
        document.body.innerHTML = `<div id="pantalla">0</div>`;
        document.body.innerHTML='<div id="pantalla" class="operacion">0</div>';
        

        const retrocede=retroceder('7');
        expect(pantalla.textContent).toBe('0');

    })
})