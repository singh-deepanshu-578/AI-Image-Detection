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

document.getElementById('fileInput').addEventListener('change', function(e) {
    const resultDivs = document.querySelectorAll('.result');
    resultDivs.forEach(div => {
        const paragraphs = div.querySelectorAll('p');
        paragraphs.forEach(p => p.remove());
        
        const newParagraph = document.createElement('p');
        newParagraph.textContent = '0%';
        div.insertBefore(newParagraph, div.querySelector('.bar'));
        
        const fill = div.querySelector('.fill');
        if (fill) fill.style.width = '0%';
    });
});

document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const x = (rect.left + rect.width / 2);
        const y = (rect.top + rect.height / 2);
        const rad = Math.atan2(e.pageX - x, e.pageY - y);
        const rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.style.transform = `rotate(${rot}deg)`;
    });
});
