



const formData = {
    email: "",
    message: ""
};

const inputEl = document.querySelector('.feedback-form');
const inputVa = inputEl.elements.email;
const messageEl = inputEl.elements.message;
const info = localStorage.getItem('feedback-form-state');
const savedData = JSON.parse(info);

if (savedData !== null) {

formData.email = savedData.email || "";
formData.message = savedData.message || "";
inputVa.value = formData.email;
messageEl.value = formData.message;
};
inputEl.addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});


inputEl.addEventListener('submit', event => {
    event.preventDefault();
    if (formData.email === "" || formData.message === '') {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
localStorage.removeItem('feedback-form-state');
formData.email = "";
formData.message = "";
inputEl.reset();
});
