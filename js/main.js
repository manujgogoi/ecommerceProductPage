var data = document.querySelector(".content");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    var formatOutput = "";
    for (let i = 0; i < json.length; i++) {
      formatOutput += `<div class="box">
                          <div class="image"><img src="${json[i].image}" alt="product-image"></div>
                          <div class="info">
                            <h3 class="title">${json[i].title}</h3>
                            <div class="category">Category : ${json[i].category}</div>
                            <div class="sub-info">
                              <div class="price">${json[i].price}</div>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half"></i>
                              </div>
                            </div>
                          </div>
                          <div class="overlay">
                            <a href="#" style="--i:1;" class="fas fa-shopping-cart"></a>  
                            <a href="#" style="--i:2;" class="fas fa-heart"></a>  
                            <a href="#" style="--i:3;" class="fas fa-search"></a>  
                          </div>
                        </div>`;
    }
    data.innerHTML = formatOutput;
  });
