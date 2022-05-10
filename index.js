const SECRET_NUMBER = 8 ;
let count = 0;
while (true){
const UserInput = +prompt('Enter secret number','');
count++;
if (UserInput < SECRET_NUMBER){
  alert('enter numb less');
}
if (UserInput > SECRET_NUMBER){
  alert('enter numb more');

}
if (UserInput === SECRET_NUMBER){
  alert('true');
  break; 
}
alert('attempt = '+ count);
}