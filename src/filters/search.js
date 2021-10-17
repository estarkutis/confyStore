import { getElement } from "../utils.js";
import display from "../displayProducts.js";
const setupSearch = (store) => {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");
  form.addEventListener("keyup", function () {
    const value = nameInput.value;
    // console.log(value); konsolė su kuria search galime pamatyti kad veikia
    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        // console.log(name); galime pamatyti paieskos užklausos rexultatus
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return product;
        }
      });
      //   console.log(newStore); Sukuria masyvus paieskos lange
      display(newStore, getElement(".products-container"), true);
      if (newStore.length < 1) {
        const products = getElement(".products-container");
        products.innerHTML = `<h3 class="filter-error">
        Sorry, no products matched your search
        </h3>`;
      }
    } else {
      display(store, getElement(".products-container"), true);
    }
  });
};

export default setupSearch;
