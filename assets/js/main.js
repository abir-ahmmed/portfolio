// Active Menu
function activeMenu(){
    var a = document.getElementById('nav_link');
    a.classList.add('active-menu');
}

console.log(document.images);

const getThColor = ()=>{
    // Hex
    const randomNumber = Math.floor(Math.random()*16777215);
    const ramdomCode = "#" +randomNumber.toString(16);
    document.body.style.background=ramdomCode;
    document.getElementById("introShape").style.borderColor = ramdomCode;

	// document.getElementById("colorThcode").innerText = ramdomCode;
	navigator.clipboard.writeText(ramdomCode)
  }

//   Event call
  document.getElementById("cCBtn").addEventListener(
    "click",
    getThColor
  )

//   init call
getThColor();

