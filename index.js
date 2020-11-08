import { Footer, Header, Main } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";

// import accountLock from "./lib/accountLock";

const router = new Navigo(window.location.origin);
router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => {
      let page = capitalize(params.page);
      render(state[page]);
    },
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Footer()}
    ${Header()}
    ${Main(st)}
  `;

  router.updatePageLinks();
