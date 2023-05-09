class StoreItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set club(club) {
    this._club = club;
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
        .card {
            width: 330px;
            height: 430px;
            margin: 20px;
            flex-direction: row;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            border-radius: 15px;
        }
        .card>img {
            width: 200px;
            height: 200px;
            display: block;
            object-fit: fill;
            margin-left: auto;
            margin-right: auto;
        }

        .desc {
            padding: 10px;
            margin: 20px;
        }
        .desc>h1 {
            font-size: 20px;
            font-family: 'Poppins', 'sans-serif';
            font-weight: 700;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;


        }
        .desc>h4 {
            font-size: 17px;
            font-family: 'Poppins', 'sans-serif';
            font-weight: 700;
        }
        .desc .oke p {
            font-size: 15px;
            font-family: 'Poppins',
                'sans-serif';
            font-weight: 400;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

         .desc>button {
            width: 100px;
            height: 40px;
            background-color: #FF6E31;
            color: white;
            border-radius: 20px;
            border: none;
            margin-right: 17px;
            margin-top: 11px;
        }
        .desc>button:hover {
            cursor: pointer;
            transition: 400ms all;
            background-color: #243763;
            color: white;
        }

       
      
      </style>

      <div class="cards">
      <div class="card">
          <img src="${this._club.image}"  alt="" />
          <div class="desc">
            <h1>${this._club.title}</h1>
            <div class="oke">
              <p>${this._club.description}</p>
            </div>
            <h4>${this._club.price}</h4>

          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("store-item", StoreItem);
