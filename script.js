function sendEmail(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const mailtoLink = `mailto:singhdeepanshu578@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
    window.location.href = mailtoLink;
}


document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const imageDisplay = document.querySelector('.image-container img');
    console.log('Initial elements:', { fileInput, imageDisplay });
    fileInput.addEventListener('change', function(event) {
        console.log('File input changed');
        const file = event.target.files[0];
        if (file) {
            console.log('File selected:', file); 
            const reader = new FileReader();
            reader.onload = function(e) {
                console.log('FileReader loaded');
                imageDisplay.src = e.target.result;
                console.log('Image source updated');
            };
            reader.readAsDataURL(file);
        }
    });
    document.querySelector('.animated-button').addEventListener('click', function() {
        console.log('Button clicked');
        fileInput.click();
    });
});
