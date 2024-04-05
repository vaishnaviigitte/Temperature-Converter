const calculateTemp = () => {

    const numberTemp = document.getElementById('Temp').value;

    const tempSelected = document.getElementById('Temp_diff');
    const value = Temp_diff.option[TempSelected.selectedIndex];
      
    const celTofah =(cel) => {
        let Fahrenheit = Math.round((cel*9/5)+ 32 );
        return Fahrenheit;
     }

     const fehToCel =(Fehr) => {
        let Fahrenheit = Math.round((fehr - 32)* 5/9 );
        return celsius;
     }
      let result;

      if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= '= ${result}Fahrenheit';
      }
      else {
        result= FehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML='= ${result}Celsius' ;  
     }
}

