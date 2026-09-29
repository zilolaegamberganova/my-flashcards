const form = document.querySelector(".form");
const input = document.querySelector(".text");
const todoContainer = document.querySelector("#todo .cards-container"); 

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = input.value.trim();
    if (data === "") return; 
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("draggable", "true");
    card.textContent = data;
    card.addEventListener("dblclick", () => {
        card.contentEditable = true;
        card.focus();
    });
    card.addEventListener("blur", () => {
        card.contentEditable = false;
    });
    card.addEventListener("dragstart", () => card.classList.add("dragging"));
    card.addEventListener("dragend", () => card.classList.remove("dragging"));

    todoContainer.append(card);
    input.value = ""; 
});
const containers = document.querySelectorAll(".cards-container"); 
containers.forEach(container => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault(); 
        const draggingCard = document.querySelector(".dragging");
        if (draggingCard) {
            container.appendChild(draggingCard);
        }
    });
});
