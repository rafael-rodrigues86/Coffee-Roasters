// Esse codigo sera aplicado à pagina form.html. A principal funcionalidade dele é fazer uma requisição assincrona a uma base de dados que trabalha com CEP. Quando o cliente digitar o CEP e apertar enter, os campos de rua, bairro, cidade, estado e ddd será automaticamente preenchidos.

class HandleForm {
  constructor() {
    this.cepInput = document.getElementById("cep");
    this.ruaInput = document.getElementById("rua");
    this.bairroInput = document.getElementById("bairro");
    this.cidadeInput = document.getElementById("cidade");
    this.estadoInput = document.getElementById("estado");
    this.botaoSubmit = document.querySelector(".botao");
    this.telInput = document.querySelector("#telefone");

    this.isEnter = this.isEnter.bind(this);
  }

  setInputs({ bairro, logradouro: rua, localidade: cidade, uf: estado }) {
    this.ruaInput.value = rua;
    this.bairroInput.value = bairro;
    this.cidadeInput.value = cidade;
    this.estadoInput.value = estado;
  }

  setDDD(ddd) {
    this.telInput.value = ddd;
  }

  async getDDD(cep) {
    this.responseDDD = await new Promise((resolve, reject) => {
      const tempoDeResposta = 100;
      setTimeout(() => {
        if (tempoDeResposta > 100) {
          reject(console.log("A requisição excedeu o tempo limite"));
        } else {
          resolve(fetch(`https://viacep.com.br/ws/${cep}/json/`));
        }
      }, tempoDeResposta);
    });
    this.responseDDDJSON = await this.responseDDD.json();
    this.setDDD(this.responseDDDJSON.ddd);
  }

  async getCepInfo(cep) {
    try {
      this.cepResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      this.cepJSON = await this.cepResponse.json();
      this.getDDD(cep);
      this.setInputs(this.cepJSON);
    } catch (error) {
      console.error(error);
    }
  }

  getCepNumber() {
    this.cepValue = this.cepInput.value;
    this.cepNumber = +this.cepValue.replace("-", "");
    this.getCepInfo(this.cepNumber);
  }

  isEnter(e) {
    this.isEnter = e.key === "Enter";
    if (!this.isEnter) return;
    this.getCepNumber();
  }

  init() {
    this.cepInput.addEventListener("keydown", this.isEnter);
  }
}

const handleForm = new HandleForm();
handleForm.init();

// function Temp() {
//   return new Promise((resolve, reject) => {
//     const temp = 10;
//     setTimeout(() => {
//       if (temp > 50) {
//         reject("deu ruim");
//       } else {
//         resolve("deu bom");
//       }
//     }, 1000);
//   });
// }

// Temp()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

async function iniciarAsync() {
  const respsota = await new Promise((resolve, reject) => {
    const tempoDeResposta = 1000;
    setTimeout(() => {
      if (tempoDeResposta > 1000) {
        reject("deu ruim");
      } else {
        resolve(fetch(`https://viacep.com.br/ws/20560185/json/`));
      }
    }, tempoDeResposta);
    // setTimeout(() => resolve("resolveu"), 1000);
    // reject("nao resolveu");
  });
  console.log(respsota);
}
iniciarAsync();

// const cepInput = document.getElementById("cep");
// const ruaInput = document.getElementById("rua");
// const bairroInput = document.getElementById("bairro");
// const cidadeInput = document.getElementById("cidade");
// const estadoInput = document.getElementById("estado");

// const botaoSubmit = document.querySelector(".botao");

// botaoSubmit.addEventListener("click", function (e) {
//   e.preventDefault();
// });

// async function getCepInfo(cep) {
//   try {
//     const cepResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//     const {
//       bairro,
//       logradouro: rua,
//       localidade: cidade,
//       uf: estado,
//     } = await cepResponse.json();

//     console.log(cepResponse);
//     console.log(bairro, rua, cidade, estado);
//     ruaInput.value = rua;
//     bairroInput.value = bairro;
//     cidadeInput.value = cidade;
//     estadoInput.value = estado;
//   } catch (error) {
//     console.error(error);
//   }
// }

// console.log(cepInput);
// cepInput.addEventListener("keydown", function (e) {
//   const isEnter = e.key === "Enter";
//   if (!isEnter) return;
//   const cepValue = cepInput.value;
//   cepNumber = +cepValue.replace("-", "");
//   console.log(cepNumber);
//   getCepInfo(cepNumber);
// });
