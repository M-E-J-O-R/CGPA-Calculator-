var resultDisplayer = document.querySelector('#result')
resultDisplayer.addEventListener('click', gradeTotal)

//This function add another course to the already existing course
function adds(){ 
   no = document.querySelectorAll('tr').length
   add = document.querySelector('#add')
   table = document.querySelector('table')
   table.innerHTML += ` <tr>
                  <td>${no}</td>
                  <td><input required class='unit' min="1" type="number"></td>
                   <td>
                      <select name="grade" class="grade">
                        <option value="A" >A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                     </select>
                  </td>
               </tr>`
}


var totalUnit=0
var totalPoint = 0
function gradeTotal(){
   var grade= document.querySelectorAll(".grade")
   var unit = document.querySelectorAll('.unit')

   //this loop checks the number of courses and calculates the grade point by multiplying the grade by the unit.
   for(i=0; i< grade.length;i++){
      if(grade[i].value =='A'){
         if(unit[i].value==''){
            totalPoint +=0
         }
         else{
            totalPoint += 5* parseInt(unit[i].value)
         }
         
      }
      else if(grade[i].value =='B'){
         if(unit[i].value==''){
            totalPoint +=0
         }
         else{
            totalPoint += 4* parseInt(unit[i].value)
         }
      }
      else if(grade[i].value =='C'){
         if(unit[i].value==''){
            totalPoint +=0
         }
         else{
            totalPoint += 3* parseInt(unit[i].value)
         }
      }
      else if(grade[i].value =='D'){
         if(unit[i].value==''){
            totalPoint +=0
         }
         else{
            totalPoint += 2* parseInt(unit[i].value)
         }
      }
      else if(grade[i].value =='E'){
         if(unit[i].value==''){
            totalPoint +=0
         }
         else{
            totalPoint += 1* parseInt(unit[i].value)
         }
      }
      else{
         if(unit[i].value==''){
            totalPoint +=0
         }
         else{
            totalPoint += 0* parseInt(unit[i].value)
         }
      }
       
   }
   console.log(totalPoint)

   //this loop calculates the total unit of the courses entered
   for (let i of unit){
      
      if(i.value == ''){
         totalUnit += parseInt(0)
      }
      else{
         totalUnit += parseInt(i.value)
      }
      
      
   
   }
   console.log(totalUnit)
   var cgpa = totalPoint/totalUnit

   //this if statement checks if the cgpa is a number. If it is a number it prints the cgpa, if it is not a number that means the user did not enter an input and that makes the cgpa zero
   if(isNaN(cgpa)){
      cgpa = 0.00
       //console.log(cgpa)
   } else{
      //console.log(cgpa.toFixed(2))
      cgpa.toFixed(2)
   }
   
   totalPoint=0
   totalUnit=0
   
   document.querySelector('.main').classList.add('hider')
   document.querySelector('.container').classList.add('hider')

   var container = document.querySelector('#displayer')
   container.classList.toggle('hider')
   a = setTimeout(()=>{
      container.innerText = `
    Your Cummulative Grade Point Average is ${cgpa.toFixed(2)}`
   },4000)
   

}




