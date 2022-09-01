let addButton = document.querySelector("#inputs #add-button");
let clearButton = document.querySelector("#inputs #clear-button");
let toast = document.querySelector("#toasts");
let success = document.querySelector("#success");
let cancel = document.querySelector("#cancelable");
let content = document.querySelector("#message-content");
let duration = document.querySelector("#duration");

addButton.addEventListener("click", function () {
    var divEl = document.createElement("div");
    let cancelBtn = document.createElement("button");
    let message = document.createElement("p");
    divEl.classList.add("toast");
    // message.classList.add("message");
    toast.appendChild(divEl);
    divEl.appendChild(message);
    divEl.appendChild(cancelBtn);
    message.innerHTML = content.value;

    cancelBtn.innerHTML = "X";
    cancel.checked ? cancelBtn.style.display = "block" : cancelBtn.style.display = "none";

    if (success.checked) {
        divEl.classList.add('success-toast')
        message.classList.add('message')
        cancelBtn.classList.add('cancel-button')

        if (content.value === '') {
            message.innerHTML = 'Success'
        }
    }
    if (error.checked) {
        divEl.classList.add('error-toast')
        message.classList.add('message')
        cancelBtn.classList.add('cancel-button')

        if (content.value === '') {
            message.innerHTML = 'Error'
        }
    }

    cancelBtn.addEventListener('click', () => {
        cancelBtn.parentElement.remove();

    })

    setTimeout(() => {
        divEl.remove();
    }, (duration.value=='' || duration.value<500 ) ? 500 : duration.value);
})


clearButton.addEventListener('click', () => {
    toast.innerHTML = "";
})