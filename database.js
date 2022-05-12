const restaurants = [
  {
    picture: ["/static/pic2.jpg", "/static/pic3.jpg"],
    name: "Poke magic",
    location: "2.5 km",
    slug: 'poke-magic',
    menu: [
      {
        name: 'Fany bowl',
        price: 10.95,
        image: '/static/'
      }
    ]
  },
  {
    picture: ["https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    , "https://images.unsplash.com/photo-1586058584825-c1e87ed735b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"],
    name: "BBQ Meat",
    location: "3.1 km",
    slug: 'bbq-meat'
  },
];

module.exports = restaurants;
