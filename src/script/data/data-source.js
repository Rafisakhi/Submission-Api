class DataSource {
  static searchClub() {
    return fetch(`https://fakestoreapi.com/products`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(` is not found`);
        }
      });
  }
}

export default DataSource;
