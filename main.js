var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    reviews: "Great socks, 5/5!!",
    image: "./assets/green-sock.png",
    altText: "A pair of socks",
    inventory: 11,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/green-sock.png",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/blue-sock.png",
      },
    ],
    sizes: [38, 40, 42, 42.5, 44, 48],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateProduct: function (variantImage) {
      this.image = variantImage;
    },
  },
});
