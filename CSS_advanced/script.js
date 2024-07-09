function openContactForm() {
    document.getElementById('contactModal').style.display = "block";
}

function closeContactForm() {
    document.getElementById('contactModal').style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('contactModal')) {
        document.getElementById('contactModal').style.display = "none";
    }
}