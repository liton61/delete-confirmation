document.getElementById('input-field').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deleteBtn = document.getElementById('delete-btn');
    if (text == 'delete') {
        deleteBtn.removeAttribute('disabled')
    }
    else {
        deleteBtn.setAttribute('disabled', true)
    }
})
document.getElementById('delete-btn').addEventListener('click', function () {
    const hideText = document.getElementById('delete-confirmation');
    hideText.style.display = 'none';

    const clearField = document.getElementById('input-field');
    clearField.value = '';

})