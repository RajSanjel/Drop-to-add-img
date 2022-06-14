const dropArea = document.querySelector('.dropArea')
const uploadedImg = document.querySelector('.uploaded')
const browse = document.querySelector('.browse')
const input = document.querySelector(".input")
const imgs= uploadedImg.querySelectorAll("img").length
dropArea.addEventListener('dragover', function (event) {
    event.preventDefault()

})

browse.addEventListener('click', () => {
    input.click()

})
input.addEventListener('change', function () {
    file = this.files[0]
    displayFiles(file)
})

dropArea.addEventListener("dragleave", function (event) {
    event.preventDefault()
    dropArea.classList.remove("active")
})

dropArea.addEventListener("dragover", function (event) {
    event.preventDefault()
    dropArea.classList.add("active")
})

dropArea.addEventListener('drop', async function (event) {
    event.preventDefault()
    dropArea.classList.add("active")
    const file = await event.dataTransfer.files[0]
    console.log(file)
    displayFiles(file)
})

function displayFiles(file) {
    fileName = file.name
    fileFormat = file.type
    if (fileFormat === 'image/jpeg' || fileFormat === 'image/jpg' || fileFormat === 'image/png') {
        const fileReader = new FileReader()
        fileReader.onload = () => {
            fileURL = fileReader.result;

            const showImg = document.createElement('img')
            uploadedImg.appendChild(showImg)
            showImg.setAttribute("src", fileURL)
        }
        fileReader.readAsDataURL(file)
    } else {
        alert("File not supported!")
    }
}