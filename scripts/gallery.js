let buttons = Array.from(document.querySelectorAll(".slide"));
function slideNext(){
    let currentBlock = document.querySelector(".images_block_wrapper.active");
    let currentBtn = document.querySelector(".slide.active");
    let dataAttr = Number(currentBlock.getAttribute("data-gallery"))+1;
    if(dataAttr > 3){
        dataAttr = 1;
    };
    let newBlock = document.querySelector(`.images_block_wrapper[data-gallery="${dataAttr}"]`);
    let newBtn = document.querySelector(`.slide[data-gallery="${dataAttr}"]`);
    // делаем
    currentBlock.classList.remove("active");
    currentBtn.classList.remove("active");
    newBlock.classList.add("active");
    newBtn.classList.add("active");
}

let intervalId = setInterval(slideNext, 4000);

buttons.forEach(element => {
    element.addEventListener("click", function(e){
        e.preventDefault;
        if (!e.target.classList.contains("active")){
            clearInterval(intervalId);
            let currentBlock = document.querySelector(".images_block_wrapper.active");
            let currentBtn = document.querySelector(".slide.active");
            let dataAttr = Number(e.target.getAttribute("data-gallery"));
            let newBlock = document.querySelector(`.images_block_wrapper[data-gallery="${dataAttr}"]`);
            let newBtn = document.querySelector(`.slide[data-gallery="${dataAttr}"]`);
            // делаем
            currentBlock.classList.remove("active");
            currentBtn.classList.remove("active");
            newBlock.classList.add("active");
            newBtn.classList.add("active");
            intervalId = setInterval(slideNext, 4000);
        }
    });
});