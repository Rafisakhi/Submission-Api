class JudulStore extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
       
        .judul1 {
            text-align: center;
            margin:100px;
        }

        .judul1>h1 {
            font-size: 55px;
            font-family: 'Poppins', 'sans-serif';
            font-weight: 700;
        }

        .judul1>p {
            font-size: 20px;
            font-family: 'Poppins', 'sans-serif';
            font-weight: 400;
        }
        </style>

        <div class="judul">
            <div class="judul1">
                <h1>Clouthes Outfit</h1>
                <p>New variant of clothes with elegant design</p>
            </div>
        </div>
       
        `;
  }
}

customElements.define("judul-store", JudulStore);
