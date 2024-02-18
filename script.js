const container = document.querySelector("#container");

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");

let temp = 0;

container.addEventListener("click", () => {
    if (temp % 2 === 0) {
        div1.style.transform = "rotateZ(45deg)";
        div2.style.transform = "rotateZ(-45deg)";
        div1.style.right = "28.5px";
        div2.style.right = "31px";

        div1.style.top = "12px";
        div2.style.top = "12px";
    
        
    }
    else {
        div1.style.transform = "rotateZ(0deg)";
        div2.style.transform = "rotateZ(0deg)";
        div1.style.right = "31px";
        div2.style.right = "31px";

        div1.style.top = "8.5px";
        div2.style.top = "14.5px";
    }
    temp++;
})
