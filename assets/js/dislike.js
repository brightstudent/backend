const dislikeButtons = document.querySelectorAll('.dislike');

dislikeButtons.forEach(button => button.addEventListener('click', dislikeItem))

async function dislikeItem() {

  let id = this.getAttribute('data-fav-id');

  await fetch("/api/favorites/" + id , {
    method: "DELETE",
  });
  document.location.reload();
}