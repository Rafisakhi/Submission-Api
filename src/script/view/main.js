import "../component/store-list.js";
import DataSource from "../data/data-source.js";

const main = async () => {
  const storeListElement = document.querySelector("store-list");

  const renderResult = (results) => {
    storeListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    storeListElement.renderError(message);
  };

  try {
    const result = await DataSource.getStore();
    renderResult(result);
  } catch (message) {
    fallbackResult(message);
  }
};

export default main;
