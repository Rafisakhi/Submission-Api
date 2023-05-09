import "../component/club-list.js";
import DataSource from "../data/data-source.js";

const main = async () => {
  const clubListElement = document.querySelector("club-list");

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  try {
    const result = await DataSource.searchClub();
    renderResult(result);
  } catch (message) {
    fallbackResult(message);
  }
};

export default main;
