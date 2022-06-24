function init(restaurants) {
  const parent = document.querySelector("#option #images");
  const optionName = document.querySelector("#option .name a");
  const optionLocation = document.querySelector("#option .location");

  const rejectBtn = document.querySelector("#reject");
  const saveBtn = document.querySelector("#save");

  let index = 0;
  function displayRestaurant(idx) {
    // If restaurant is set and not empty
    if (restaurants && restaurants.length) {
      // clear previous images if any
      // if has any child then remove the child
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      // % modulo creates a loop for the array
      const restaurant = restaurants[idx % restaurants.length];
      restaurant.pictures.forEach((pic) => {
        const img = document.createElement("img");
        img.src = pic;
        img.draggable = false;
        parent.append(img);
        parent.scrollLeft = 0;
      });
      optionName.textContent = restaurant.name;
      optionName.href = "/restaurants/" + restaurant.slug;
      optionLocation.textContent = restaurant.location;
    }
  }
  // displayRestaurant(index);

  rejectBtn.addEventListener("click", () => {
    displayRestaurant(++index);
  });

  // prints the data
  saveBtn.addEventListener("click", async () => {
    const request = {
      favorite: restaurants[index % restaurants.length]._id, 
      user: localStorage.getItem('email')
    }
    // save fav on the server
    await fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    displayRestaurant(++index);
  });
}



// gets data from "database"
fetch("/api/restaurants")
  .then((res) => res.json())
  .then(init);
