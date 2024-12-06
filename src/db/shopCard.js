 let shopCard = JSON.parse(localStorage.getItem("shopCard")) || [{
     img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
     title: "Nike Air Monarch IV",
     reviews: "(123 reviews)",
     prevPrice: "$140,00",
     newPrice: "200",
     company: "Nike",
     color: "white",
     category: "sneakers",
 }];

 export const addToCart = (img, newPrice, title, reviews) => {
     shopCard.push({
         img: img,
         newPrice: newPrice,
         title: title,
         reviews: reviews,
     });

     localStorage.setItem("shopCard", JSON.stringify(shopCard));

     console.log("Updated shopCard:", shopCard);
 };

 export default shopCard;