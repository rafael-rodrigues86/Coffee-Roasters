// Esse codigo será aplicado na pagina plan.html. A ideia é personalizar o plano de acordo com as escolhas do cliente. Na primeira opção (How do you frink your coffee), se o cliente escolher a opçãp Capsule, a quarta opção (Grind Option) fica desabilitada. Na terceira opção (Quantity), dependendo da quantidade que o cliente escolha, a ultima opção (deliveries) vai refletir a mudança no preço do frete. Por fim, há um Order Summary no final, contendo um resumo com o pedido do cliente. Essa Order Summary foi feita com o uso de array. Ao clicar no botao Create your plan, será exibido um novo Order Summary, agora com o preço do frete atualizado dependendo das escolhas do cliente

class HandleCard {
  constructor() {
    this.iconArrow = document.querySelectorAll(".questions__arrow");
    this.asideItem = document.querySelectorAll(".aside__item");
    this.sectionQuestions = document.querySelector(".section-questions");
    this.createPlanButton = document.querySelector(".questions__button a");
    this.modal = document.querySelector(".modal");
    this.arrItens = new Array(5);
    this.arrayPrices = [];
    this.stateManager;
    this.grindEl = document.querySelector(
      "div.questions__cards[data-order='3']"
    );
    this.asideItem = document.querySelectorAll(".aside__item");
    this.asideGrind = document.querySelector("li.aside__item[data-order='3']");

    this.arrowGrind = document.querySelector(
      ".questions__item[data-order='3'] img"
    );

    this.orderSummarySpans = Array.from(
      document.querySelectorAll(".questions__summary p span")
    );

    this.orderSummaryP = document.querySelector(".questions__summary p");

    this.whereWasClick = this.whereWasClick.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(e) {
    e.preventDefault();
    let precoFinal;
    if (this.arrItens.includes("Capsule")) {
      this.arrItens.splice(3, 1);
    }

    if (this.arrItens.includes(undefined)) return;

    console.log(this.arrItens);

    const howOften = this.arrItens[this.arrItens.length - 1];

    switch (howOften) {
      case "Every week":
        console.log("week");
        precoFinal = 4 * this.arrayPrices[0];
        break;

      case "Every 2 weeks":
        console.log("weeks");
        precoFinal = 2 * this.arrayPrices[1];

        break;

      case "Every month":
        console.log("month");
        precoFinal = this.arrayPrices[2];

        break;
    }

    this.modalParagraph = document.querySelector(".modal__order");
    this.modalPrice = document.querySelector(".modal__price");

    this.modalParagraph.innerHTML = this.orderSummaryP.innerHTML;
    this.modalPrice.textContent = `$${precoFinal}/ mo`;

    console.log(this.orderSummaryP.innerHTML);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    this.modal.classList.add("modal--ativo");
  }

  whereWasClick(e) {
    this.isClickOnArrow = e.target.closest(".questions__arrow");
    this.isClickOnCard = e.target.closest(".questions__card");

    if (this.isClickOnArrow) this.handleArrowClick(e);

    if (this.isClickOnCard) this.handleCardClick(e);
  }

  arrowUp(element) {
    element.src = require("../assets/plan/desktop/icon-arrow-up.svg");
  }

  arowDown(element) {
    element.src = require("../assets/plan/desktop/icon-arrow-down.svg");
  }

  updateDeliveryPrices(week, weeks, month) {
    this.priceToBeDisplayed = document.querySelectorAll(".questions__price");
    this.priceToBeDisplayed[0].textContent = "$" + week;
    this.priceToBeDisplayed[1].textContent = "$" + weeks;
    this.priceToBeDisplayed[2].textContent = "$" + month;
    this.arrayPrices = [week, weeks, month];
    console.log(this.arrayPrices);
  }

  handleShipment(items) {
    if (!items[2]) return;

    this.coffeeWeight = items[2];
    this.shipmentPriceWeek;
    this.shipmentPrice2Weeks;
    this.shipmentPriceMonth;
    switch (this.coffeeWeight) {
      case "250g":
        this.shipmentPriceWeek = 7.2;
        this.shipmentPrice2Weeks = 9.6;
        this.shipmentPriceMonth = 12.0;
        this.updateDeliveryPrices(
          this.shipmentPriceWeek,
          this.shipmentPrice2Weeks,
          this.shipmentPriceMonth
        );
        break;

      case "500g":
        this.shipmentPriceWeek = 13.0;
        this.shipmentPrice2Weeks = 17.5;
        this.shipmentPriceMonth = 22.0;
        this.updateDeliveryPrices(
          this.shipmentPriceWeek,
          this.shipmentPrice2Weeks,
          this.shipmentPriceMonth
        );
        break;

      case "1000g":
        this.shipmentPriceWeek = 22.0;
        this.shipmentPrice2Weeks = 32.0;
        this.shipmentPriceMonth = 42.0;
        this.updateDeliveryPrices(
          this.shipmentPriceWeek,
          this.shipmentPrice2Weeks,
          this.shipmentPriceMonth
        );
        break;
    }
  }

  handleOrderSummary(items) {
    this.arrayItem3 = this.arrItens[3] ?? "____";
    this.arrayItem0 = this.arrItens[0] ?? "____";
    console.log(this.arrayItem0);

    this.orderSummaryP.innerHTML = `I drink my coffee ${
      this.arrayItem0 === "Capsule"
        ? "as <span>Capsule</span>"
        : "using " + "<span>" + this.arrayItem0 + "</span>"
    }, with a <span>${this.arrItens[1] ?? "____"}</span> type of bean. <span>${
      this.arrItens[2] ?? "____"
    }</span> ${
      this.arrItens[0] === "Capsule"
        ? ""
        : "ground ala " + "<span>" + this.arrayItem3 + "</span>"
    }, sent to me <span>${this.arrItens[4] ?? "____"}<span/>`;
  }

  handleArrowClick(e) {
    this.cards = e.target.parentElement.nextElementSibling; // selecionando classe questions__cards
    this.cardsChildren = Array.from(this.cards.children);
    this.cardsOrder = +this.cards.dataset.order;
    console.log(this.cardsOrder);
    console.log(this.cardsChildren);
    if (!this.cards.classList.contains("questions__cards--inativo"))
      this.cards.classList.toggle("questions__cards--ativo");
    console.log(this.cards);
    console.log(this.isClickOnArrow);

    if (
      this.cards.classList.contains("questions__cards--ativo") &&
      !this.cards.classList.contains("questions__cards--inativo")
    ) {
      this.arrowUp(this.isClickOnArrow);
      this.asideItem[this.cardsOrder].classList.add("aside__item--ativo");
    } else {
      this.arowDown(this.isClickOnArrow);
      this.cardsChildren.forEach((cardChild) =>
        cardChild.classList.remove("questions__card--selected")
      );
      this.asideItem[this.cardsOrder].classList.remove("aside__item--ativo");
    }
  }

  handleCardClick(e) {
    console.log(this.isClickOnCard.parentElement.dataset.order);

    // ! Melhorar codigo abaixo
    if (+this.isClickOnCard.parentElement.dataset.order === 0) {
      if (this.isClickOnCard.dataset.type === "Capsule") {
        console.log(this.isClickOnCard);
        this.grindEl.classList.add("questions__cards--inativo");
        this.arowDown(this.arrowGrind);
        this.asideGrind.classList.add("aside__item--opacity");

        // console.log(this.isClickOnCard);/
      } else {
        this.grindEl.classList.remove("questions__cards--inativo");
        this.asideGrind.classList.remove("aside__item--opacity");
      }
    }

    if (this.grindEl.classList.contains("questions__cards--inativo")) {
      this.arowDown(this.arrowGrind);
    }
    this.stateManager =
      +this.isClickOnCard.parentElement.parentElement.dataset.order; // DOM traversing. Vai até a classe questions__element para pegar a ordem e fixa esse valor para gerenciar estado

    this.arrItens.splice(this.stateManager, 1, this.isClickOnCard.dataset.type); // vai inserir o item correspondente na array
    console.log(this.arrItens);

    this.allThreeCards = Array.from(this.isClickOnCard.parentElement.children); // vai gerar uma array com todos os questions__card correspondente ao item que foi clidado

    this.allThreeCards.forEach((card) =>
      card.classList.remove("questions__card--selected")
    ); // Remove a classe de todos os 3 cards para não ficar mais de um elemento selecionado

    this.isClickOnCard.classList.toggle("questions__card--selected");

    this.handleOrderSummary(this.arrItens);

    this.handleShipment(this.arrItens);
  }

  init() {
    this.sectionQuestions.addEventListener("click", this.whereWasClick);
    this.createPlanButton.addEventListener("click", this.handleButton);
  }
}

const handler = new HandleCard();
console.log(handler);
handler.init();
