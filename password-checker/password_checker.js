function passwordChecker(){
  let passwordEle = document.getElementById("pwd").value;
  let passwordLength = passwordEle.length;
  let strengthEle = document.getElementById("strength-level");
  let strengthLevel = "weak";
  var numberRegex = /\d/

  if(numberRegex.test(passwordEle)){
    if((passwordLength >= 8) && (passwordLength < 12)){
      strengthLevel = "strong";
    } else if(passwordLength >= 12){
      strengthLevel = "very strong"
    }
  }else{
    strengthLevel = "weak";    
  }
  strengthEle.className = strengthLevel.toLowerCase().replace(" ","-");;
  strengthEle.innerHTML = strengthLevel;
}
