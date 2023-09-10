const iconArrow = document.querySelectorAll(".questions__arrow");
iconArrow.forEach((icon)=>{
    icon.addEventListener("click", function(e) {
        const card = e.currentTarget.parentElement.nextElementSibling;
        card.classList.toggle("questions__cards--ativo");
        if (card.classList.contains("questions__cards--ativo")) icon.src = "./src/assets/plan/desktop/icon-arrow-up.svg";
        else icon.src = "./src/assets/plan/desktop/icon-arrow-down.svg";
    });
});

//# sourceMappingURL=plan.09c24910.js.map
