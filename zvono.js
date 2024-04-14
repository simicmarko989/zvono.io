// Definisanje funkcije za odbrojavanje do kraja časa unutar setInterval
setInterval(function() {
    // Funkcija koja odbrojava do kraja časa
    function odbrojDoKrajaCasa(cas) {   
        const trenutniDatum = new Date();
        const trenutniSat = trenutniDatum.getHours();
        const trenutneMinute = trenutniDatum.getMinutes();
        const krajTrenutnogCasa = cas.sati + cas.trajanje;
        
        // Provera da li trenutno vreme odgovara početku trenutnog časa
        if (trenutniSat === cas.sati && trenutneMinute === cas.minute) {
            const krajCasa = new Date().setHours(cas.sati, cas.minute + cas.trajanje, 0); // Definisanje krajCasa ovde

            // Postavljanje intervala da se odbrojava svake sekunde
            const interval = setInterval(function() {
                // Trenutno vreme u milisekundama
                const trenutnoVrijeme = new Date().getTime();
                
                // Izračunavanje preostalog vremena do kraja časa u sekundama
                const preostaloVrijemeSekundi = Math.max(Math.floor((krajCasa - trenutnoVrijeme) / 1000), 0);     
                const preostaloMinute = Math.floor(preostaloVrijemeSekundi / 60);       
                const preostaloSekundi= preostaloVrijemeSekundi % 60
                // Ispiši preostalo vrijeme u sekundama
                
                const trajanje = document.getElementById('zvono');
                trajanje.textContent = `(${cas.smena})`; 
                const timeElement = document.getElementById('preostalo-vreme');
                timeElement.textContent = `${preostaloMinute}:${preostaloSekundi.toString().padStart(2, '0')}`;
                const timeElemen = document.getElementById('current-lesson');
                timeElemen.textContent = `Trenutno je ${cas.cas} `;
                const kraj = document.getElementById('kraj');
                // Ako je preostalo vrijeme 0, čas je završio, brišemo interval i prelazimo na sledeći čas
                if (preostaloVrijemeSekundi === 0) {
                    clearInterval(interval);
                     // kraj.textContent = ``;
                    // trajanje.textContent = ``;
                    // timeElement.textContent= ``;
                    timeElemen.textContent= ``;
                    timeElement.textContent= ``;
                    kraj.textContent = ``;
                    // Pronalazimo indeks trenutnog časa
                    const index = rasporedCasova.indexOf(cas);
                    if (index < rasporedCasova.length - 1) {
                        // Ako postoji sledeći čas, pozivamo funkciju odbrojavanja za sledeći čas                  
                        odbrojDoKrajaCasa(rasporedCasova[index + 1]);   
                        // kraj.textContent = `Trenutno nema `;                    
                    } else {
                        // Inače, kada nema više časova, obavesti korisnika 
                        
                    }
                }
            }, 1000); // Provera svake sekunde    
        } else {            
            // Ako trenutno vreme ne odgovara početku trenutnog časa, prelazimo na sledeći čas
            const index = rasporedCasova.indexOf(cas);
            if (index < rasporedCasova.length - 1) {
                odbrojDoKrajaCasa(rasporedCasova[index + 1]);                
            } else {
                // trajanje.textContent = ``;
                // timeElement.textContent= ``;
                // timeElemen.textContent= ``;
                kraj.textContent =`Trenutno nema časova`;
                // Inače, kada nema više časova, obavesti korisnika
                //   setTimeout(function() {
                //     window.location.reload();
                // }, 30000); // Reload stranice nakon 5 sekundi
            }
        }
    }

    const rasporedCasova = [
        {cas: "prvi časa", sati: 8, minute: 0, trajanje: 45,smena:"Prva smena"},
        {cas: "odmor", sati: 8, minute: 45, trajanje: 5,smena:"Prva smena"},
        {cas: "drugi časa", sati: 8, minute: 50, trajanje: 45,smena:"Prva smena"},
        {cas: "veliki odmor", sati: 9, minute: 35, trajanje: 25,smena:"Prva smena"},
        {cas: "treći časa", sati: 10, minute: 0, trajanje: 45,smena:"Prva smena"},
        {cas: "odmor", sati: 10, minute: 45, trajanje: 5,smena:"Prva smena"},
        {cas: "četvrti časa", sati: 10, minute: 50, trajanje: 45,smena:"Prva smena"},
        {cas: "odmor", sati: 11, minute: 35, trajanje: 5,smena:"Prva smena"}, 
        {cas: "peti časa", sati: 11, minute: 40, trajanje: 45,smena:"Prva smena"},
        {cas: "odmor časa", sati: 12, minute: 25, trajanje: 5,smena:"Prva smena"},
        {cas: "šesti časa", sati: 12, minute: 30, trajanje: 45,smena:"Prva smena"},
        {cas: "odmor", sati: 13, minute: 15, trajanje: 5,smena:"Prva smena"},
        {cas: "sedmi časa", sati: 13, minute: 20, trajanje: 40,smena:"Prva smena"},        
        {cas: "prvi časa", sati: 14, minute: 0, trajanje: 45,smena:"Druga smena"},
        {cas: "odmor", sati: 14, minute: 45, trajanje: 5,smena:"Druga smena"},
        {cas: "drugi časa", sati: 14, minute: 50, trajanje: 45,smena:"Druga smena"},
        {cas: "veliki odmor", sati: 15, minute: 35, trajanje: 25,smena:"Druga smena"},
        {cas: "treći časa", sati: 16, minute: 0, trajanje: 45,smena:"Druga smena"},
        {cas: "odmor", sati: 16, minute: 45, trajanje: 5,smena:"Druga smena"},
        {cas: "četvrti časa", sati: 17, minute: 50, trajanje: 45,smena:"Druga smena"},
        {cas: "odmor", sati: 17, minute: 35, trajanje: 5,smena:"Druga smena"}, 
        {cas: "peti časa", sati: 17, minute: 40, trajanje: 45,smena:"Druga smena"},
        {cas: "odmor časa", sati: 18, minute: 25, trajanje: 5,smena:"Druga smena"},
        {cas: "šesti časa", sati: 18, minute: 30, trajanje: 45,smena:"Druga smena"},
        {cas: "odmor", sati: 19, minute: 15, trajanje: 5,smena:"Druga smena"},
        {cas: "sedmi časa", sati: 19, minute: 20, trajanje: 40,smena:"Druga smena"},
        
        
    ];

    // Pokretanje odbrojavanja za prvi čas u rasporedu
    odbrojDoKrajaCasa(rasporedCasova[0]);
    // setTimeout(function() {
    //     window.location.reload();
    
},1000); // Provera svake sekunde        