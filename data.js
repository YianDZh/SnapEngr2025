let original =
[
    {
        brand: "Nike",
        model : "Nike Air Max 90",
        main_category: "Men",
        category : "Casual",
        price : "130",
        new: false,
        image : "./images/shoes/airmax90.png"
    },
    {
        brand: "Vans",
        model : "USPS",
        main_category: "Men",
        category : "Casual",
        price : "90",
        new: false,
        image : "./images/shoes/vansusps.png"
    },
    {
        brand: "Vans",
        model : "UltraRange Neo VR3 Shoe",
        main_category: "Women",
        category : "Running",
        price : "125",
        new: true,
        image : "./images/shoes/UltraRangeNeo.png"
    },
    {
        brand: "Adidas",
        model : "Adidas Women's Originals NMD_R1 Sneakers",
        main_category: "Women",
        category : "Casual",
        price : "100",
        new: false,
        image : "./images/shoes/nbm floral.png"
    },
    {
        brand: "Nike",
        model : "Nike Air Max DN",
        main_category: "Women",
        category : "Casual",
        price : "160",
        new: true,
        image : "./images/shoes/airmaxdn.png"
    },
    {
        brand: "Nike",
        model : "Jordan Jumpman Two Trey",
        main_category: "Women",
        category : "Casual",
        price : "120",
        new: false,
        image : "./images/shoes/image-removebg-preview.png"
    },
    {
        brand: "Timberland",
        model : "Timberland 6 Inch Premium Waterproof Boots Biggie",
        main_category: "Men",
        category : "Boots",
        price : "210",
        new: true,
        image : "./images/shoes/timberland_boots.png"
    },
    {
        brand: "Nike",
        model : "Jordan Jumpman Two Trey",
        main_category: "Kids",
        category : "Casual",
        price : "120",
        new: false,
        image : "./images/shoes/"
    }
]

let shoes = original;

function FisherYates() {
    for (let i = shoes.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = shoes[i];
      shoes[i] = shoes[j];
      shoes[j] = k;
    }
}