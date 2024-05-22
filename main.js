let url = "https://fakestoreapi.com/products";
const cards = document.querySelector('.cards')

fetch(url)
  .then((data) => data.json())
  .then((data) => getData(data))
  .catch((error) => console.log("error", error));


  function getData(data){
    data.forEach((value) => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />

        <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
        <p>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <div class="price">
          <p>summa</p>
          <h5><span>-10%</span>10$</h5>
        </div>
        <div class="buttons">
          <button class="card-btn">Add to card</button>
          <button class="crd-btn">BUy now</button>
        `;
        cards.append(card);
    });
  }