//Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль 
//повідомлення у форматі: Число N є простим числом, якщо число N просте, 
//та Число N не є простим числом, якщо число N складене.


const numb = Number(prompt('Write a number, please'));


if (numb > 3) {
    
    for (i = 2; i < numb; i++) {

        if(numb % i === 0 ) {
            console.log (`Число ${numb} складене`) 
            }   
            
        } 
       console.log (`Число ${numb} є простим числом`)
    
    
} else  console.log (`Число ${numb} є простим числом`)
      


//Вам необхідно написати програму, яка приймає на вхід число N і 
//знаходить усі числа в діапазоні від 1 до N, які є досконалими числами.

const perfectNumb = Number(prompt('Write a number, please'));



for (let i = 1; i <= perfectNumb; i++) {
    let sum = 0;
    for (let j = 1; j < i; j++) { 
        
        if (i % j == 0) {
            sum += j
          
        } }

        if (sum == i){
                console.log (i)
        
        } 
    }
    


//Вам необхідно написати програму, яка приймає на вхід число, 
//що буде висотою вершини вашої ялинки. 
//Уся ялинка має бути реалізована одним рядком:


const treeNumb = Number(prompt('Write a number, please'));

let height = 0;
    

while (height < treeNumb) {
    space = " ";
    star = "";
    for (let j = 0; j < treeNumb - height; j++){
        space += " ";
    }
    for (let j = 0; j < 2 * height + 1; j++) {
        star += "*";
    }
    console.log(space + star);
    height++;
}




