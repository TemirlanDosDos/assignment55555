const userProfile = {
  name: "Temirlan",
  birthYear: 2008,
  isDeveloper: true,
  hobbies: ["Sports", "Cooking", "Traveling"]
};

const currentYear = new Date().getFullYear();
const profileForm = document.getElementById("profile-form");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birth-year");
const profileResult = document.getElementById("profile-result");
const ageValue = document.getElementById("age-value");
const hobbyCount = document.getElementById("hobby-count");
const developerValue = document.getElementById("developer-value");
const hobbyList = document.getElementById("hobby-list");
const hobbyForm = document.getElementById("hobby-form");
const newHobbyInput = document.getElementById("new-hobby");
const removeHobbyButton = document.getElementById("remove-hobby");
const hobbyMessage = document.getElementById("hobby-message");

const age = currentYear - userProfile.birthYear;
usernameInput.value = userProfile.name;
birthYearInput.value = userProfile.birthYear;
ageValue.textContent = age;
hobbyCount.textContent = userProfile.hobbies.length;
developerValue.textContent = userProfile.isDeveloper;
profileResult.textContent = userProfile.name;

console.log("Age:", age);
console.log("Hobbies:", userProfile.hobbies.length);

userProfile.hobbies.forEach(function (hobby) {
  const item = document.createElement("li");
  item.textContent = hobby;
  hobbyList.appendChild(item);
});

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();

  userProfile.name = usernameInput.value.trim();
  userProfile.birthYear = Number(birthYearInput.value);

  const newAge = currentYear - userProfile.birthYear;
  ageValue.textContent = newAge;
  profileResult.textContent = userProfile.name + " is " + newAge + " years old.";

  console.log(userProfile);
});

hobbyForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const hobby = newHobbyInput.value.trim();
  if (hobby === "") {
    return;
  }

  const item = document.createElement("li");
  item.textContent = hobby;
  hobbyList.appendChild(item);
  userProfile.hobbies.push(hobby);
  hobbyCount.textContent = userProfile.hobbies.length;
  newHobbyInput.value = "";
  hobbyMessage.textContent = "Hobby added.";
});

removeHobbyButton.addEventListener("click", function () {
  if (hobbyList.lastElementChild) {
    hobbyList.lastElementChild.remove();
    userProfile.hobbies.pop();
    hobbyCount.textContent = userProfile.hobbies.length;
    hobbyMessage.textContent = "Last hobby removed.";
  }
});
