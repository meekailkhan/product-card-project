class TagGenrator {
    constructor(tagName, attName, attValue, parent, Class, value, text, placeholder) {
        this.element = document.createElement(tagName);

        if (!!attName && attValue) {
            this.element.setAttribute(attName, attValue);
        };
        if (!!parent) {
            parent.append(this.element);
        };
        if (!!Class) {
            this.element.setAttribute("class", Class);
        };
        if (!!value) {
            this.element.value = value;
        };
        if (!!text) {
            this.element.innerText = text;
        };
        if (!!placeholder) {
            this.element.setAttribute("placeholder", placeholder);
        };
    }
    getElement() {
        return this.element
    }
}

class EventClass {
    handelClick(e) {
        e.preventDefault();
        e.stopPropagation()

        if (e.target.tagName !== "BUTTON") {
            return;
        }

        if (e.target.textContent === "Submit") {
            const cardcontainer = new TagGenrator("div", "class", "cardContainer", mainContainer).getElement()

            let card = new TagGenrator("div", "class", "Card", cardcontainer, null, null, null, null).getElement();
            let cardMrp = new TagGenrator("p", "class", "cardMrp", card, null, null, `MRP : ${inputMrp.value}`).getElement();
            let cardPrice = new TagGenrator("h1", "class", "cardPrice", card, null, null, `₹ ${inputPrice.value} only`).getElement();
            let cardName = new TagGenrator("p", "class", "cardName", card, null, null, inputName.value).getElement();
            let cardQuntity = new TagGenrator("p", "class", "cardQuntity", card, null, null, `${inputQuntity.value} gm`).getElement();

            inputMrp.value = inputPrice.value = inputPrice.value = inputName.value = inputQuntity.value = ""
            console.dir(document.body)
        }

        if (e.target.textContent === "Edit") {
            const popContainer = document.querySelector(".popContainer")
            editedCard = e.target.closest(".Card");

            if (!popContainer) {
                const cardContainer2 = e.currentTarget.parentElement.parentElement
                const popContainer = new TagGenrator("div", "class", "popContainer", mainContainer, null, null, null, null, null).getElement();
                const popCancel = new TagGenrator("button", "class", "popCancelBtn", popContainer, null, null, "X", null, "click").getElement();
                const popForm = new TagGenrator("form", "class", "popForm", popContainer, null, null, null, null, "submit").getElement();
                const popMrp = new TagGenrator("input", "type", "number", popForm, "editMrp", null, null, "MRP", null).getElement();
                const popPrice = new TagGenrator("input", "type", "number", popForm, "editPrice", null, null, "Product Price", null).getElement();
                const popName = new TagGenrator("input", "type", "text", popForm, "editName", null, null, "Product Name", null).getElement();
                const popQuntity = new TagGenrator("input", "type", "number", popForm, "editQuntity", null, null, "Product Quntity", null).getElement();
                const popSubmit = new TagGenrator("button", "type", "submit", popForm, "editSubmit", "innerSubmit", "submit", "click").getElement();
            }
        }
        if (e.target.textContent === "Delete") {
            const delCard = e.target.closest(".cardContainer");
            delCard.remove()
        }
        if (e.target.value === "innerSubmit") {
            if (editedCard) {
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
        if (e.target.textContent === "X") {
            const popContainer = document.querySelector(".popContainer")
            if (popContainer) {
                popContainer.remove()
            }

        }
    }

    handelMouseOver(e) {
        if (e.target.classList == "Card") {
            const productCard = e.target
            const btnContainer = productCard.querySelector(".btnContainer");
            if (!btnContainer) {
                const btnContainer = new TagGenrator("div", "class", "btnContainer", productCard).getElement()
                const editBtn = new TagGenrator("button", "class", "editBtn", btnContainer, null, null, "Edit", null).getElement();
                const delBtn = new TagGenrator("button", "class", "delBtn", btnContainer, null, null, "Delete", null).getElement()
            }
        }
    }
}

const maincontainer = new TagGenrator("div", "id", "mainContainer", document.body, "parentContainer", null, null, null).getElement()
const form = new TagGenrator("form", "id", "Form", mainContainer).getElement();
const inputMrp = new TagGenrator("input", "type", "number", Form, "inutMRP", null, null, "MRP").getElement();
const inputPrice = new TagGenrator("input", "type", "number", Form, "inutPRICE", null, null, "Product Price").getElement();
const inputName = new TagGenrator("input", "type", "text", Form, "inutNAME", null, null, "Product Name").getElement();
const inputQuntity = new TagGenrator("input", "type", "number", Form, "inutQUNTITY", null, null, "Product Quntity").getElement();
const submit = new TagGenrator("button", "type", "submit", Form, "submitBtn", "submit", "Submit", null).getElement()

const eventFn = new EventClass()

let editedCard = null

maincontainer.addEventListener("click", eventFn.handelClick)
maincontainer.addEventListener("mouseover", eventFn.handelMouseOver)

