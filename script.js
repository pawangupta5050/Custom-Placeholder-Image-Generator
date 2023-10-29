const inputAll = document.querySelectorAll('input')
const selectDimension = document.querySelector('#selectImageDim')
let dimension = document.querySelector('#dimension')
// console.log(dimension)
const textArea = document.querySelector('textarea')
const image = document.querySelector('img')

const copyURL = document.querySelector('.fa-solid')

const removeHashTag = (str) => {
    return str.replace("#", "")
}

const addPlus = (str) => {
    return str.split(" ").join("+");
}

const createURL = () => {

    const selectedDimension = selectDimension.value;
    dimension.textContent = selectDimension.value;
    const textOnImage = addPlus(inputAll[0].value);
    const backgroundColor = removeHashTag(inputAll[1].value);
    const textColor = removeHashTag(inputAll[2].value);

    const URL = `https://via.placeholder.com/${selectedDimension}/${backgroundColor}/${textColor}?text=${textOnImage}`
    textArea.value = URL
    image.src = URL
    console.log(image)

    copyURL.classList.remove('fa-check')
    copyURL.classList.add('fa-clipboard')
}

inputAll.forEach((input) => {
    input.addEventListener('change', createURL);
})

selectDimension.addEventListener('change', createURL)

copyURL.addEventListener('click', () => {
    if (textArea.value) {
        navigator.clipboard.writeText(textArea.value)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch(err => {
                console.error('Error copying text: ', err);
            });

        copyURL.classList.remove('fa-clipboard')
        copyURL.classList.add('fa-check')
        setTimeout(() => {
            copyURL.classList.remove('fa-check')
            copyURL.classList.add('fa-clipboard')
        }, 3000)
    }
})




