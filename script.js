const maincontainer = tagGenrator("div","id","mainContainer",document.body,"parentContainer",null,null,null)
const form = tagGenrator("form","id","Form",mainContainer);
const inputMrp = tagGenrator("input","type","number",Form,"inutMRP",null,null,"MRP");
const inputPrice = tagGenrator("input","type","number",Form,"inutPRICE",null,null,"Product Price");
const inputName = tagGenrator("input","type","text",Form,"inutNAME",null,null,"Product Name");
const inputQuntity = tagGenrator("input","type","number",Form,"inutQUNTITY",null,null,"Product Quntity");
const submit = tagGenrator("button","type","submit",Form,"submitBtn","submit","Submit",null)


function tagGenrator(tagName,attName,attValue,parent,Class,value,text,placeholder){
    let element = document.createElement(tagName);

    if(!!attName&&attValue){
        element.setAttribute(attName,attValue);
    };
    if(!!parent){
        parent.append(element);
    };
    if(!!Class){
        element.setAttribute("class",Class);
    };
    if(!!value){
        element.value = value;
    };
    if(!!text){
        element.innerText = text;
    };
    if(!!placeholder){
        element.setAttribute("placeholder",placeholder);
    };
    

    return element
}
let editedCard = null

maincontainer.addEventListener("click",eventFn)
maincontainer.addEventListener("mouseover",eventFn)

function eventFn(e){
    e.preventDefault();
    e.stopPropagation()
    
    if(e.type === "click"){
        if(e.target.tagName !== "BUTTON"){
            return;
        }

        if(e.target.textContent === "Submit"){
            const cardcontainer = tagGenrator("div","class","cardContainer",mainContainer)
    
            let card = tagGenrator("div","class","Card",cardcontainer,null,null,null,null);
            let cardMrp = tagGenrator("p","class","cardMrp",card,null,null,`MRP : ${inputMrp.value}`);
            let cardPrice = tagGenrator("h1","class","cardPrice",card,null,null,`₹ ${inputPrice.value} only`);
            let cardName = tagGenrator("p","class","cardName",card,null,null,inputName.value);
            let cardQuntity = tagGenrator("p","class","cardQuntity",card,null,null,`${inputQuntity.value} gm`); 

            inputMrp.value = inputPrice.value = inputPrice.value = inputName.value = inputQuntity.value = ""     
        }
        
        if(e.target.textContent === "Edit"){
            const popContainer = document.querySelector(".popContainer")
            editedCard = e.target.closest(".Card");
            
            if(!popContainer){
                const cardContainer2 = e.currentTarget.parentElement.parentElement
                const popContainer = tagGenrator("div","class","popContainer",mainContainer,null,null,null,null,null);
                const popCancel = tagGenrator("button","class","popCancelBtn",popContainer,null,null,"X",null,"click");
                const popForm = tagGenrator("form","class","popForm",popContainer,null,null,null,null,"submit");
                const popMrp = tagGenrator("input","type","number",popForm,"editMrp",null,null,"MRP",null);
                const popPrice = tagGenrator("input","type","number",popForm,"editPrice",null,null,"Product Price",null);
                const popName = tagGenrator("input","type","text",popForm,"editName",null,null,"Product Name",null);
                const popQuntity = tagGenrator("input","type","number",popForm,"editQuntity",null,null,"Product Quntity",null);
                const popSubmit = tagGenrator("button","type","submit",popForm,"editSubmit","innerSubmit","submit","click");
            }
        }
        if(e.target.textContent === "Delete"){
            const delCard = e.target.closest(".cardContainer");
            delCard.remove()
        }
        if(e.target.value === "innerSubmit"){
            if(editedCard){
                const popForm = e.target.closest(".popForm");
    
                // Update the edited card's content
                editedCard.querySelector(".cardMrp").innerText = `MRP: ${popForm.children[0].value}`;
                editedCard.querySelector(".cardPrice").innerText = `₹ ${popForm.children[1].value} only`;
                editedCard.querySelector(".cardName").innerText = popForm.children[2].value;
                editedCard.querySelector(".cardQuntity").innerText = `${popForm.children[3].value} gm`;

                const popContainer = popForm.parentElement;
                popContainer.remove();
            }
        }
        if(e.target.textContent === "X"){
            const popContainer = document.querySelector(".popContainer")
            if(popContainer){
                popContainer.remove()
            }
            
        }
    }
    if(e.type === "mouseover"){
        if(e.target.classList =="Card"){
            const productCard = e.target
            const btnContainer = productCard.querySelector(".btnContainer");
            if(!btnContainer){
                const btnContainer = tagGenrator("div","class","btnContainer",productCard)
                const editBtn = tagGenrator("button","class","editBtn",btnContainer,null,null,"Edit",null);
                const delBtn = tagGenrator("button","class","delBtn",btnContainer,null,null,"Delete",null)
            }
        }
    }
    
}
