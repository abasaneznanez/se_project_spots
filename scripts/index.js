const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
//OK 6********** (2nd video)
const editProfileForm = editProfileModal.querySelector(".modal__form");
//FFFFFFFFFFFF(6)????????????????????????????????????????????
//$$$$$$$$$$$const editCardImage = editProfileModal.querySelector(".modal__label");
//OK 3*************# para ligarlo con su id =
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
//OK 4****************** copy //3 and change inside the variable, the word Name for Description
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
//CCCCCCCCCCCCC (3)
//$$$$$$$$$$$const editCardImageLink = editProfileModal.querySelector("#card-image-input");
//DDDDDDDDDDDDD (4)
//$$$$$$$$$$const editCardTitleDescription = editProfileModal.querySelector("#card-caption-input");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
//OK 1****************** class = "" es muy importante
const profileNameEl = document.querySelector(".profile__name");
//OK 2***************** class = "" es muy importante
const profileDescriptionEl = document.querySelector(".profile__description");
//new post @@@@@@@@@@@@@@@@@@@@ I Select the New Post form and its input fields
const newPostForm = document.querySelector("#new-post-modal .modal__form");
const cardImageInput = document.querySelector("#card-image-input");
const cardCaptionInput = document.querySelector("#card-caption-input");
// new post @@@@@@@@@@@@@II Select the container where new cards are added (ul.cards__list)
const cardsList = document.querySelector(".cards__list");
// AAAAAAAAAAAA (1)
//$$$$$$const cardImageLink = document.querySelector("card__image");
//BBBBBBBBBBBB (2)
//$$$$$$$const cardTitleDescription = document.querySelector("card__title");

editProfileBtn.addEventListener("click", function () {
  //OK 5************** I followed the tripleten tutorial video.
  editProfileNameInput.value = profileNameEl.textContent;
  //OK? 5************** I did this one on my own.
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  //EEEEEEEEEEE(5)
  //$$$$$$$newPostImageLink.value = cardImageLink.textContent;
  //EEEEEEEEEEE(5)
  //$$$$$newPostTitleDescription.value = cardTitleDescription.textContent;
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

//OK 8********(handler)
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  //OK 9*******
  profileNameEl.textContent = editProfileNameInput.value;
  //10***** (yo lo hice)
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  //11 ****** (lo saque de chatgpt y luego el video de tripleten lo confirmo)
  editProfileModal.classList.remove("modal_is-opened");
}
//New Post  @@@@@@@@@@III Function to handle new post submission
function handleNewPostSubmit(evt) {
  evt.preventDefault();

  const imageUrl = cardImageInput.value;
  const caption = cardCaptionInput.value;
  //New Post  @@@@@@@@@IV Create card elements
  const card = document.createElement("li");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${imageUrl}" alt="${caption}" class="card__image" />
    <div class="card__content">
      <h2 class="card__title">${caption}</h2>
      <button type="button" class="card__like-btn"></button>
    </div>
  `;
  //New Post  @@@@@@@@V Add the new card to the beginning of the list
  cardsList.prepend(card);
  //New Post  @@@@@@@@VI  // Reset the form
  newPostForm.reset();
  //New Post  @@@@@@@@VII Close the modal
  newPostModal.classList.remove("modal_is-opened");
}
//New Post  @@@@@@@@VIII Attach the event listener to the form
newPostForm.addEventListener("submit", handleNewPostSubmit);

//7**************(submit listener)
editProfileForm.addEventListener("submit", handleEditProfileSubmit);
//GGGGGGGGGG (7)????????????????????? AQUI ME QUEDE.
//$$$$$$editCardImage.addEventListener("submit", handleNewPostSubmit);
