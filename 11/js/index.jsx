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

debugger;

function alertValue() {
    console.log(firstNameEl.value);
    console.log(lastNameEl.className);
    console.log(hobbiesEl.value);
}
alertValue();

firstNameId = 'first-name';
firstNameEl = document.getElementById(firstNameId);
lastNameId = 'last-name';
lastNameEl = document.getElementById(lastNameId);
addressId = 'address';
addressEl = document.getElementById(addressId);
sitiesId = 'sities';
sitiesEl = document.getElementById(sitiesId);
hobbiesId = 'hobbies';
hobbiesEl = document.getElementById(hobbiesId);
avatarId = 'avatar';
avatarEl = document.getElementById(avatarId);

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