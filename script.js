function style_mode(){
 
  const
  normalStyle   = document.getElementById('style1'),
  invertedStyle = document.getElementById('style2');

const toggle = (style1, style2) => {
  if (style1.hasAttribute('disabled')) {
    style1.removeAttribute('disabled');
    style2.setAttribute('disabled', '');
    document.getElementById("btn_m").innerHTML = "🌞";  
  } else {
    style1.setAttribute('disabled', '');
    style2.removeAttribute('disabled');
    document.getElementById("btn_m").innerHTML = "🌚"; 
  }
}

toggle(normalStyle, invertedStyle);
}

const observer = new IntersectionObserver ((entries) => {
     entries.forEach( (entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    } else {
    entry.target.classList.remove('show');
    }
    });
    });
    const hiddenElements = document.querySelectorAll('.hidden' );
    hiddenElements.forEach((el) => observer. observe (el));
  
 function mode(){
     document.getElementById("body").style.backgroundColor = "white";
     document.getElementById("txt1").style.color = "black";
     document.getElementById("logo").style.color = "black";
     document.getElementById("a1").style.color = "black";


 }



 