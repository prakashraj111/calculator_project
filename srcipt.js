let string = "";
let buttons = document.getElementsByTagName('td');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C' || e.target.innerHTML == 'CE' || e.target.innerHTML == '←'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
});

function closeWindowOrTab() {
  // Check if the window is the topmost window
  if (window.top === window) {
      // If it is, close the window
      window.close();
  } else {
      // If it's not the topmost window, close the tab
      window.top.close();
  }
}

function minimizeWindowOrTab() {
      window.close();
}
function root(){
  let data=document.querySelector('input').value;
  let values=parseFloat(data);

  // console.log(Math.sqrt(values));
  if(values==Null){
    
  }

 
}


