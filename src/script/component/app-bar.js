class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          width: 100%;
          background-color:  #FF6E31;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h2 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          color:  #243763;
          padding: 16px;
        }
      </style>
      
      <h2>Store Clouth</h2>
    `;
  }
}

customElements.define("app-bar", AppBar);
