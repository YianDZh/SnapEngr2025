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
        brand: "Nike",
        model : "Nike Air Max DN",
        main_category: "Women",
        category : "Casual",
        price : "160",
        new: true,
        image : "./images/shoes/airmaxdn.png"
    },
    {
        brand: "Vans",
        model : "Vans SK8 Hi",
        main_category: "Men",
        category : "Casual",
        price : "55",
        new: false,
        image : "./images/shoes/SK8.png"
    },
    {
        brand: "New Balance",
        model : "New Balance 9060",
        main_category: "Women",
        category : "Running",
        price : "150",
        new: true,
        image : "./images/shoes/9060.png"
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
        model : "Jordan Jumpman Two Trey",
        main_category: "Women",
        category : "Casual",
        price : "120",
        new: false,
        image : "./images/shoes/image-removebg-preview.png"
    },

    {
        brand: "Jordan",
        model : "Jordan Retro 12",
        main_category: "Kids",
        category : "Basketball",
        price : "150",
        new: true,
        image : "./images/shoes/Retro12.png"
    },
    {
        brand: "Brooks",
        model : "Brooks Ghost 17",
        main_category: "Men",
        category : "Running",
        price : "145",
        new: true,
        image : "./images/shoes/brooksghost.png"
    },
    {
        brand: "Crocs",
        model : "Crocs Classic Clogs",
        main_category: "Kids",
        category : "Sandals",
        price : "70",
        new: true,
        image : "./images/shoes/chicken-jockey.png"
    },

    {
        brand: "Adidas",
        model : "adidas Originals Sambas",
        main_category: "Kids",
        category : "Casual",
        price : "80",
        new: false,
        image : "./images/shoes/samba.png"
    },
    {
        brand: "Crocs",
        model :  "Crocs Dragon Ball Z Classic Clogs",
        main_category: "Kids",
        category : "Sandals",
        price : "55",
        new: true,
        image : "./images/shoes/gocrocs.png"
    },

    {
        brand: "Vans",
        model :  "Vans Old Skool Platform",
        main_category: "Women",
        category : "Skate",
        price : "50",
        new: false,
        image : "./images/shoes/oldsk.png"
    },

    {
        brand: "Adidas",
        model :  "adidas Duramo Speed",
        main_category: "Men",
        category : "Running",
        price : "65",
        new: true,
        image : "./images/shoes/duramo.png"
    },
    {
        brand: "Puma",
        model :  "PUMA Suede XL",
        main_category: "Women",
        category : "Skate",
        price : "80",
        new: false,
        image : "./images/shoes/suefe.png"
    },
    {
        brand: "Timberland",
        model :  "Timberland Stone Street Platform Buckle Shoe",
        main_category: "Women",
        category : "Casual",
        price : "130",
        new: true,
        image : "./images/shoes/stone.png"
    },

    {
        brand: "Vans",
        model :  "Vans Old Skool Flame",
        main_category: "Kids",
        category : "Skate",
        price : "30",
        new: false,
        image : "./images/shoes/oldschool.png"
    },

    {
        brand: "Puma",
        model :  "PUMA Scoot Zeros PDX Away",
        main_category: "Men",
        category : "Basketball",
        price : "100",
        new: true,
        image : "./images/shoes/0s.png"
    },

 



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