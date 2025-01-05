function startProgress() {
    const progressBar = document.getElementById("progressBar");
    let progress = 0;

    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 10;
            progressBar.style.width = progress + "%";
            progressBar.textContent = progress + "%";
        } else {
            clearInterval(interval);
        }
    }, 500);
}