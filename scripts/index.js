function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

const editProfileBtn = document.querySelector(".profile__edit-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
//OK 6********** (2nd video)
const editProfileForm = editProfileModal.querySelector(".modal__form");
//OK 3*************# para ligarlo con su id =
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
//OK 4****************** copy //3 and change inside the variable, the word Name for Description
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
//OK 1****************** class = "" es muy importante
const profileNameEl = document.querySelector(".profile__name");
//OK 2***************** class = "" es muy importante
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  //OK 5************** I followed the tripleten tutorial video.
  editProfileNameInput.value = profileNameEl.textContent;
  //OK? 5************** I did this one on my own.
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});
//OK 8********(handler)
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  //OK 9*******
  profileNameEl.textContent = editProfileNameInput.value;
  //10***** (yo lo hice)
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const addCardFormElement = newPostModal.querySelector(".modal__form");
const nameInput = newPostModal.querySelector("#card-caption-input");
const linkInput = newPostModal.querySelector("#card-image-input");

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log("Caption:", nameInput.value);
  console.log("Image URL:", linkInput.value);

  closeModal(newPostModal);
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
