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

function getEl (id) {
    var el = document.getElementById(id);
    return el;
}
firstNameId = 'first-name';
firstNameEl = getEl(firstNameId);
alertValues (firstNameEl);

lastNameId = 'last-name';
lastNameEl = getEl(lastNameId);
alertValues (lastNameEl);

addressId = 'address';
addressEl = getEl(addressId);

sitiesId = 'sities';
sitiesEl = getEl(sitiesId);

hobbiesId = 'hobbies';
hobbiesEl = getEl(hobbiesId);

avatarId = 'avatar';
avatarEl = getEl(avatarId);

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