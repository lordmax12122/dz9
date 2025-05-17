const userForm = document.querySelector("#form");
const userDelete = document.querySelector("#delete");


function addUserToLocalStorage(userData, key) {
    localStorage.setItem(key, JSON.stringify(userData));
}

userForm.addEventListener("submit", (event) => {
event.preventDefault();
    const userGmail = document.querySelector("#gmail").value;
    const userNumber = document.querySelector("#number").value;
    const userName = document.querySelector("#name").value;

    const userForm = {
        name: userName,
        number: userNumber,
        gmail: userGmail,
    };

    addUserToLocalStorage(userForm, "userData");
});

userDelete.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.clear();
});