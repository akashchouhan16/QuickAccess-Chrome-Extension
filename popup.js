replaceData(document.body);
const btn = document.getElementById("modeselector");
        
 btn.addEventListener("click", function(){
            const ele = document.body;
            const icons = document.getElementsByClassName("flex");
            // const icon2 = document.getElementsByClassName("fas");
            ele.classList.toggle("dark-mode");
            icons.classList.toggle("light-icon");
 });
function replaceData(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceData)
    } else if(element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(/Unschool/gi)){
            // element.parentElement.remove();
            // const newElement = document.createElement('span');
            // newElement.innerHTML = element.textContent.replace(/(Unschool)/gi, '<span class="rainbow">$1</span>');
            element.parentElement.style.color = 'black';
            element.parentElement.style.backgroundColor = 'black';
            // element.replaceWith(newElement);
        }
    }
}