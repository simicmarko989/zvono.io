function azurirajVreme() {
    const trenutnoVreme = new Date();
    const datum = trenutnoVreme.toLocaleDateString('sr-RS');
    const vreme = trenutnoVreme.toLocaleTimeString('sr-RS');
    const element = document.getElementById('current-time');
    element.textContent = `Trenutni datum: ${datum}`;
    const date = document.getElementById('current-date');
    date.textContent = `Trenutno vreme: ${vreme}`;
   
}
setInterval(azurirajVreme, 1000);