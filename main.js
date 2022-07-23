const rootElement = document.getElementById("root");
const logoSvg = "./images/pokemon_logo 1.svg";
const cardImg = "./images/004 1.png";

const root = ReactDOM.createRoot(rootElement);



const siteLogo = React.createElement("div", { className: "site_logo" }, [
  React.createElement("a", { className: "logo" }, [
    React.createElement("img", {
      src: logoSvg,
      alt: "pokemon-logo",
      className: "logo-object",
    }),
  ]),
  React.createElement("i", { className: "fa-regular fa-heart canvas_heart" }),
]);

const navigation = React.createElement(
  "div",
  { className: "navigation_buttons" },
  [
    React.createElement("div", { className: "nav_button" }, [
      React.createElement("select", { className: "select_btn" }, [
        React.createElement("option", { className: "option" }, "Gross"),
      ]),
    ]),
    React.createElement("div", { className: "nav_button" }, [
      React.createElement("input", {
        className: "input_btn",
        placeholder: "Search",
        type: "text",
      }),
      React.createElement("i", {
        className: "ico ico_dropdown fa-solid fa-magnifying-glass",
      }),
    ]),
    React.createElement("div", { className: "nav_button" }, [
      React.createElement("select", { className: "select_btn" }, [
        React.createElement("option", { className: "option" }, "Aa-Zz"),
      ]),
    ]),
    React.createElement("div", { className: "nav_button" }, [
      React.createElement(
        "button",
        { className: "button_text buttons_button" },
        "Button"
      ),
    ]),
  ]
);

const cardsWrapper = React.createElement("div", { className: "cards_wrapper" }, [
   React.createElement("div", { className: "card" }, [
      React.createElement("div", { className: "card-header" }, [
        React.createElement("img", {
          className: "card_img",
          src: cardImg,
          alt: "pokemon",
        }),
      ]),
      React.createElement("div", { className: "card-body" }, [
        React.createElement("div", { className: "card_desc" }, [
          React.createElement("div", { className: "card_desc_text" }, [
            React.createElement("p", { className: "pokemons_word" }, "Pokemons"),
            React.createElement(
              "p",
              { className: "pokemons_category" },
              "Grass, Poison"
            ),
          ]),
          React.createElement("i", { className: "fa-regular fa-heart" }),
        ]),
        React.createElement("div", { className: "card_weight" }, [
          React.createElement("p", { className: "pokemons_word" }, "6.9kg"),
          React.createElement("p", { className: "pokemons_word" }, "99 age"),
        ]),
      ]),
    ]),
    React.createElement("div", { className: "card" }, [
      React.createElement("div", { className: "card-header" }, [
        React.createElement("img", {
          className: "card_img",
          src: cardImg,
          alt: "pokemon",
        }),
      ]),
      React.createElement("div", { className: "card-body" }, [
        React.createElement("div", { className: "card_desc" }, [
          React.createElement("div", { className: "card_desc_text" }, [
            React.createElement("p", { className: "pokemons_word" }, "Pokemons"),
            React.createElement(
              "p",
              { className: "pokemons_category" },
              "Grass, Poison"
            ),
          ]),
          React.createElement("i", { className: "fa-regular fa-heart" }),
        ]),
        React.createElement("div", { className: "card_weight" }, [
          React.createElement("p", { className: "pokemons_word" }, "6.9kg"),
          React.createElement("p", { className: "pokemons_word" }, "99 age"),
        ]),
      ]),
    ]),
    React.createElement("div", { className: "card" }, [
      React.createElement("div", { className: "card-header" }, [
        React.createElement("img", {
          className: "card_img",
          src: cardImg,
          alt: "pokemon",
        }),
      ]),
      React.createElement("div", { className: "card-body" }, [
        React.createElement("div", { className: "card_desc" }, [
          React.createElement("div", { className: "card_desc_text" }, [
            React.createElement("p", { className: "pokemons_word" }, "Pokemons"),
            React.createElement(
              "p",
              { className: "pokemons_category" },
              "Grass, Poison"
            ),
          ]),
          React.createElement("i", { className: "fa-regular fa-heart" }),
        ]),
        React.createElement("div", { className: "card_weight" }, [
          React.createElement("p", { className: "pokemons_word" }, "6.9kg"),
          React.createElement("p", { className: "pokemons_word" }, "99 age"),
        ]),
      ]),
    ]),
    React.createElement("div", { className: "card" }, [
      React.createElement("div", { className: "card-header" }, [
        React.createElement("img", {
          className: "card_img",
          src: cardImg,
          alt: "pokemon",
        }),
      ]),
      React.createElement("div", { className: "card-body" }, [
        React.createElement("div", { className: "card_desc" }, [
          React.createElement("div", { className: "card_desc_text" }, [
            React.createElement("p", { className: "pokemons_word" }, "Pokemons"),
            React.createElement(
              "p",
              { className: "pokemons_category" },
              "Grass, Poison"
            ),
          ]),
          React.createElement("i", { className: "fa-regular fa-heart" }),
        ]),
        React.createElement("div", { className: "card_weight" }, [
          React.createElement("p", { className: "pokemons_word" }, "6.9kg"),
          React.createElement("p", { className: "pokemons_word" }, "99 age"),
        ]),
      ]),
    ]),
    React.createElement("div", { className: "card" }, [
      React.createElement("div", { className: "card-header" }, [
        React.createElement("img", {
          className: "card_img",
          src: cardImg,
          alt: "pokemon",
        }),
      ]),
      React.createElement("div", { className: "card-body" }, [
        React.createElement("div", { className: "card_desc" }, [
          React.createElement("div", { className: "card_desc_text" }, [
            React.createElement("p", { className: "pokemons_word" }, "Pokemons"),
            React.createElement(
              "p",
              { className: "pokemons_category" },
              "Grass, Poison"
            ),
          ]),
          React.createElement("i", { className: "fa-regular fa-heart" }),
        ]),
        React.createElement("div", { className: "card_weight" }, [
          React.createElement("p", { className: "pokemons_word" }, "6.9kg"),
          React.createElement("p", { className: "pokemons_word" }, "99 age"),
        ]),
      ]),
    ]),
    React.createElement("div", { className: "card" }, [
      React.createElement("div", { className: "card-header" }, [
        React.createElement("img", {
          className: "card_img",
          src: cardImg,
          alt: "pokemon",
        }),
      ]),
      React.createElement("div", { className: "card-body" }, [
        React.createElement("div", { className: "card_desc" }, [
          React.createElement("div", { className: "card_desc_text" }, [
            React.createElement("p", { className: "pokemons_word" }, "Pokemons"),
            React.createElement(
              "p",
              { className: "pokemons_category" },
              "Grass, Poison"
            ),
          ]),
          React.createElement("i", { className: "fa-regular fa-heart" }),
        ]),
        React.createElement("div", { className: "card_weight" }, [
          React.createElement("p", { className: "pokemons_word" }, "6.9kg"),
          React.createElement("p", { className: "pokemons_word" }, "99 age"),
        ]),
      ]),
    ]),
    React.createElement("div", { className: "card" }, [
      React.createElement("div", { className: "card-header" }, [
        React.createElement("img", {
          className: "card_img",
          src: cardImg,
          alt: "pokemon",
        }),
      ]),
      React.createElement("div", { className: "card-body" }, [
        React.createElement("div", { className: "card_desc" }, [
          React.createElement("div", { className: "card_desc_text" }, [
            React.createElement("p", { className: "pokemons_word" }, "Pokemons"),
            React.createElement(
              "p",
              { className: "pokemons_category" },
              "Grass, Poison"
            ),
          ]),
          React.createElement("i", { className: "fa-regular fa-heart" }),
        ]),
        React.createElement("div", { className: "card_weight" }, [
          React.createElement("p", { className: "pokemons_word" }, "6.9kg"),
          React.createElement("p", { className: "pokemons_word" }, "99 age"),
        ]),
      ]),
    ]),
    React.createElement("div", { className: "card" }, [
      React.createElement("div", { className: "card-header" }, [
        React.createElement("img", {
          className: "card_img",
          src: cardImg,
          alt: "pokemon",
        }),
      ]),
      React.createElement("div", { className: "card-body" }, [
        React.createElement("div", { className: "card_desc" }, [
          React.createElement("div", { className: "card_desc_text" }, [
            React.createElement("p", { className: "pokemons_word" }, "Pokemons"),
            React.createElement(
              "p",
              { className: "pokemons_category" },
              "Grass, Poison"
            ),
          ]),
          React.createElement("i", { className: "fa-regular fa-heart" }),
        ]),
        React.createElement("div", { className: "card_weight" }, [
          React.createElement("p", { className: "pokemons_word" }, "6.9kg"),
          React.createElement("p", { className: "pokemons_word" }, "99 age"),
        ]),
      ]),
    ]),
]);

// function createCard() {
//   return React.createElement("div", { className: "card" }, [
//     React.createElement("div", { className: "card-header" }, [
//       React.createElement("img", {
//         className: "card_img",
//         src: cardImg,
//         alt: "pokemon",
//       }),
//     ]),
//     React.createElement("div", { className: "card-body" }, [
//       React.createElement("div", { className: "card_desc" }, [
//         React.createElement("div", { className: "card_desc_text" }, [
//           React.createElement("p", { className: "pokemons_word" }, "Pokemons"),
//           React.createElement(
//             "p",
//             { className: "pokemons_category" },
//             "Grass, Poison"
//           ),
//         ]),
//         React.createElement("i", { className: "fa-regular fa-heart" }),
//       ]),
//       React.createElement("div", { className: "card_weight" }, [
//         React.createElement("p", { className: "pokemons_word" }, "6.9kg"),
//         React.createElement("p", { className: "pokemons_word" }, "99 age"),
//       ]),
//     ]),
//   ]);
// }

// createCard();

const wrapper = React.createElement("div", { className: "wrapper" }, [
   siteLogo,
   navigation,
   cardsWrapper,
 ]);
 
root.render(wrapper);
