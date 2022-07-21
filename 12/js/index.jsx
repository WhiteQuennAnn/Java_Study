var lastNameId;
var lastNameEl;
var firstNameId;
var firstNameEl;
var addressId;
var addressEl;
var sitiesId;
var sitiesEl;
var hobbiesId;
var hobbiesEl;
var avatarWrapperId;
var avatarWrapperEl;
var avatarId;
var avatarEl;

function alertFirstNameValues () {
    console.log(firstNameEl.value);
    console.log(firstNameEl.className);
};

function alertLastNameValues () {
    console.log(lastNameEl.value);
    console.log(lastNameEl.className);
};

function alertValues (elementParametr) {
    console.log(elementParametr.value);
    console.log(elementParametr.className);
}

firstNameId = 'first-name';
firstNameEl = document.getElementById(firstNameId);
alertValues (firstNameEl);

lastNameId = 'last-name';
lastNameEl = document.getElementById(lastNameId);
alertValues (lastNameEl);

addressId = 'address';
addressEl = document.getElementById(addressId);

sitiesId = 'sities';
sitiesEl = document.getElementById(sitiesId);

hobbiesId = 'hobbies';
hobbiesEl = document.getElementById(hobbiesId);

avatarId = 'avatar';
avatarEl = document.getElementById(avatarId);

// debugger;

// function alertValue() {
//     console.log(firstNameEl.value);
//     console.log(lastNameEl.className);
//     console.log(hobbiesEl.value);
// }
// alertValue();
// window.alert(firstNameEl.value);
// window.alert(lastNameEl.className);
// window.alert(addressEl.value);
// window.alert(sitiesEl.value);
// window.alert(hobbiesEl.value);
// window.alert(avatarEl.alt);

firstNameEl.value = 'Pina';
// lastNameEl.value='Odanova';
lastNameEl.setAttribute = ('value', 'Koio');
//    window.alert(lastNameEl.className);
//    lastNameEl.className = 'error-input';
//    avatarEl.title = 'Kartinka';
hobbiesEl.value = 'I am have not interests';
sitiesEl.value = 'Paris';
    // avatarWrapperEl.innerHTML = 'dfvdevbdrb';