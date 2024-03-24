
const maincontainer = tagGenrator("div","id","mainContainer",document.body,null,null,null,null,"click","mouseover")
const form = tagGenrator("form","id","Form",mainContainer);
const inputMrp = tagGenrator("input","type","number",Form,"inutMRP",null,null,"MRP");
const inputPrice = tagGenrator("input","type","number",Form,"inutPRICE",null,null,"Product Price");
const inputName = tagGenrator("input","type","text",Form,"inutNAME",null,null,"Product Name");
const inputQuntity = tagGenrator("input","type","number",Form,"inutQUNTITY",null,null,"Product Quntity");
const submit = tagGenrator("button","type","submit",Form,"submitBtn","submit","Submit",null)
const editBtn = tagGenrator("button","type","button",mainContainer,"eidtBtn",null,"Edit")




function tagGenrator(tagName,attName,attValue,parent,Class,value,text,placeholder,event,event2){
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
    if(!!event){
        element.addEventListener(event,eventFn);

        function eventFn(e){
            e.preventDefault();
            
            console.dir(e.target)

            if(e.target.innerText == "Submit"){
                const cardcontainer = tagGenrator("div","class","cardContainer",mainContainer)

                let card = tagGenrator("div","class","Card",cardcontainer,null,null);
                let cardMrp = tagGenrator("p","class","cardMrp",card,null,null,`MRP : ${inputMrp.value}`);
                let cardPrice = tagGenrator("h1","class","cardPrice",card,null,null,`₹ ${inputPrice.value} only`);
                let cardName = tagGenrator("p","class","cardName",card,null,null,inputName.value);
                let cardQuntity = tagGenrator("p","class","cardQuntity",card,null,null,`${inputQuntity.value} gm`);

                inputMrp.value = "";
                inputPrice.value = "";
                inputName.value = "";
                inputQuntity.value = "";
            }
            if(e.target.innerText == "Edit"){
                console.log("click on edit button")
            }
            
        }
    }

    return element
}