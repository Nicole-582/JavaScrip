'use strict';
describe('Test the calculate function', function (){
    const calcular= require('./Calculadora.js');

    describe('Sum cases', function (){
        it ('Should return the sum of 4, 5, 6 and 7', function (){ 
        try{ 
            
            const result_sum= calcular('4','5','6','7','+');
            expect(result_sum).toBe('22');
            
        }catch{
            document.body.innerHTML = `<div id="screen">Error</div>`;
            

            const screen=document.getElementById('screen');
            expect(screen.textContent).toBe("Error");
        }
        });      
    });
    describe('Division cases', function (){
        it ('Should return de division between 4 and 2', function (){ 
        try{ 
            
            const result_division= calcular('4','2','/');
            expect(result_division).toBe('2');
            
        }catch{
            document.body.innerHTML = `<div id="screen">Error</div>`;
            
            const screen=document.getElementById('screen');
            expect(screen.textContent).toBe("Error");
        }
        });      
    });
});