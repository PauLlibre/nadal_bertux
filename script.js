let parentDiv = null; 

function handleButtonClick(answer, button){
  switch(answer){
    case "wrong":
      parentDiv = button.parentNode;
      parentDiv.parentNode.classList.add("hide")
      document.getElementById("wrong").classList.remove("hide")
      break;
    case 1:
      document.getElementById("s_1").classList.add("hide")
      document.getElementById("s_2").classList.remove("hide")
      break;
    case 2:
      document.getElementById("s_2").classList.add("hide")
      document.getElementById("s_3").classList.remove("hide")
      break;
    case 3:
      document.getElementById("s_3").classList.add("hide")
      document.getElementById("s_4").classList.remove("hide")
      break;
    case 4:
      document.getElementById("s_4").classList.add("hide")
      document.getElementById("s_5").classList.remove("hide")
      break;
    case "retry":
      document.getElementById("wrong").classList.add("hide");
      document.getElementById("s_1").classList.remove("hide");
      break;
    case "cabana":
      document.getElementById("s_4").classList.add("hide");
      document.getElementById("cabana").classList.remove("hide");
      break;
    case "caldea":
      document.getElementById("s_4").classList.add("hide");
      document.getElementById("caldea").classList.remove("hide");
      break;
    case "back":
      parentDiv = button.parentNode;
      button.parentNode.classList.add("hide");
      document.getElementById("s_4").classList.remove("hide");
      break;
  }
}