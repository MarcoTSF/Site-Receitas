const receitas = [
  {
    nome: "Bolo de Cenoura",
    categoria: "Lanches",
    ingredientes: [
      "3 cenouras médias descascadas",
      "2 xícaras de farinha de trigo",
      "1 xícara de açúcar",
      "3 ovos",
      "1/2 xícara de óleo",
      "1 colher de sopa de fermento"
    ],
    preparo:
      "1) Corte as cenouras em pedaços e coloque no liquidificador com os ovos, o açúcar e o óleo. Bata até formar uma mistura lisa. " +
      "2) Em uma tigela, misture a farinha com o fermento. " +
      "3) Despeje a mistura do liquidificador sobre a farinha e mexa até ficar homogêneo. " +
      "4) Transfira para uma forma untada e leve ao forno pré-aquecido a 180°C por cerca de 40 minutos."
  },
  {
    nome: "Salada Rápida",
    categoria: "Vegetariano",
    ingredientes: [
      "1 pé de alface picado",
      "1 tomate grande em cubos",
      "Azeite a gosto",
      "Sal a gosto",
      "Orégano opcional"
    ],
    preparo:
      "1) Lave bem todos os ingredientes. " +
      "2) Coloque a alface e o tomate em uma tigela. " +
      "3) Tempere com azeite, sal e orégano. " +
      "4) Misture delicadamente e sirva imediatamente."
  },
  {
    nome: "Omelete Simples",
    categoria: "Rápidas",
    ingredientes: ["2 ovos", "Sal a gosto", "Queijo ralado a gosto", "Pimenta opcional"],
    preparo:
      "1) Quebre os ovos em um recipiente e bata com um garfo. " +
      "2) Tempere com sal, pimenta e adicione o queijo. " +
      "3) Aqueça uma frigideira antiaderente com um fio de óleo ou manteiga. " +
      "4) Despeje a mistura e cozinhe por cerca de 3 minutos, virando ou dobrando ao final."
  },
  {
    nome: "Brigadeiro Rápido",
    categoria: "Lanches",
    ingredientes: [
      "1 lata de leite condensado",
      "2 colheres de sopa de chocolate em pó",
      "1 colher de sopa de manteiga"
    ],
    preparo:
      "1) Coloque o leite condensado, o chocolate e a manteiga em uma panela. " +
      "2) Cozinhe em fogo baixo, mexendo sempre para não queimar. " +
      "3) Quando a mistura desgrudar do fundo da panela, desligue. " +
      "4) Deixe esfriar e enrole ou sirva em tacinhas."
  },
  {
    nome: "Torrada com Alho e Manteiga",
    categoria: "Lanches",
    ingredientes: [
      "4 fatias de pão",
      "1 colher de sopa de manteiga",
      "1 dente de alho picado",
      "Orégano a gosto"
    ],
    preparo:
      "1) Misture a manteiga com o alho. " +
      "2) Espalhe sobre as fatias de pão. " +
      "3) Polvilhe orégano. " +
      "4) Leve ao forno ou airfryer por 5 a 7 minutos até dourar."
  },
  {
    nome: "Ovo Mexido Cremoso",
    categoria: "Rápidas",
    ingredientes: ["2 ovos", "1 colher de sopa de manteiga", "Sal a gosto"],
    preparo:
      "1) Aqueça a manteiga em fogo bem baixo. " +
      "2) Quebre os ovos direto na frigideira e mexa devagar. " +
      "3) Cozinhe por cerca de 1 a 2 minutos até ficar cremoso. " +
      "4) Tempere com sal e sirva."
  },
  {
    nome: "Vitamina de Banana",
    categoria: "Rápidas",
    ingredientes: ["1 banana", "200ml de leite", "1 colher de açúcar", "Gelo opcional"],
    preparo:
      "1) Coloque todos os ingredientes no liquidificador. " +
      "2) Bata até ficar homogêneo. " +
      "3) Ajuste o açúcar se necessário e sirva gelado."
  },
  {
    nome: "Sanduíche Natural",
    categoria: "Lanches",
    ingredientes: [
      "2 fatias de pão de forma",
      "2 folhas de alface",
      "1 fatia de tomate",
      "1 colher de maionese",
      "Peito de frango ou presunto opcional"
    ],
    preparo:
      "1) Passe maionese em uma das fatias. " +
      "2) Monte com alface, tomate e o recheio escolhido. " +
      "3) Feche o sanduíche e corte ao meio."
  },
  {
    nome: "Arroz Simples",
    categoria: "Rápidas",
    ingredientes: ["1 xícara de arroz", "2 xícaras de água", "1 colher de óleo", "Sal a gosto"],
    preparo:
      "1) Lave o arroz rapidamente. " +
      "2) Refogue-o com óleo e sal por 1 minuto. " +
      "3) Adicione a água quente e deixe cozinhar em fogo baixo. " +
      "4) Quando a água secar, desligue e deixe descansar 5 minutos."
  },
  {
    nome: "Macarrão com Manteiga",
    categoria: "Rápidas",
    ingredientes: ["200g de macarrão", "1 colher de manteiga", "Sal a gosto"],
    preparo:
      "1) Cozinhe o macarrão em água com sal. " +
      "2) Escorra e coloque na panela quente. " +
      "3) Misture a manteiga até derreter. " +
      "4) Acerte o sal e sirva."
  },
  {
    nome: "Salada de Frutas",
    categoria: "Vegetariano",
    ingredientes: [
      "1 maçã picada",
      "1 banana picada",
      "1 fatia de mamão picado",
      "Suco de 1 laranja"
    ],
    preparo:
      "1) Corte todas as frutas em cubos. " +
      "2) Misture em uma tigela. " +
      "3) Regue com suco de laranja para não escurecer. " +
      "4) Sirva gelado."
  },
  {
    nome: "Café com Leite Cremoso",
    categoria: "Rápidas",
    ingredientes: [
      "1 xícara de leite",
      "1 colher de café solúvel",
      "1 colher de açúcar",
      "Canela opcional"
    ],
    preparo:
      "1) Aqueça o leite. " +
      "2) Misture o café e o açúcar até dissolver. " +
      "3) Bata com um mixer ou chacoalhe em uma garrafa para espumar. " +
      "4) Finalize com canela."
  },
  {
    nome: "Panqueca Doce Simples",
    categoria: "Lanches",
    ingredientes: ["1 ovo", "3 colheres de farinha", "1/2 xícara de leite", "1 colher de açúcar"],
    preparo:
      "1) Misture o ovo, o leite, o açúcar e a farinha até virar uma massa lisa. " +
      "2) Aqueça uma frigideira com um pingo de óleo. " +
      "3) Despeje uma concha pequena e cozinhe por 1 minuto de cada lado. " +
      "4) Sirva com mel, chocolate ou frutas."
  }
];

const lista = document.getElementById("recipes");
const filtroBtns = document.querySelectorAll(".chip");
const search = document.getElementById("search");
const countLabel = document.getElementById("countLabel");

function render(filter = "Todas", termo = "") {
  lista.innerHTML = "";

  const filtradas = receitas.filter(r => {
    const matchCategoria = filter === "Todas" || r.categoria === filter;
    const matchTermo = r.nome.toLowerCase().includes(termo.toLowerCase());
    return matchCategoria && matchTermo;
  });

  countLabel.textContent = `${filtradas.length} receitas`;

  filtradas.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${r.nome}</h3>
      <p class="meta">${r.categoria}</p>

      <ul class="ingredients">
        ${r.ingredientes.map(i => `<li>${i}</li>`).join("")}
      </ul>

      <p class="instructions">${r.preparo}</p>
    `;

    lista.appendChild(card);
  });
}

filtroBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filtroBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.filter, search.value);
  });
});

search.addEventListener("input", () => {
  const ativa = document.querySelector(".chip.active")?.dataset.filter || "Todas";
  render(ativa, search.value);
});

render();