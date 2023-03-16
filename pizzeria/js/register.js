

// register nappulan functio 
function onregisterClick() {
    //haetaan evästeistä nimi ja salasana
    const nimi = document.getElementById("nimi").value
    const salasana = document.getElementById("salasana").value
    
    //katsotaan että nimi ja salasana ei ole tyhjä stringejä 
    if(nimi && salasana) 
    {
      //laitetaan nimi ja salasana evästeisiin joka tulee olemaan inputti molemmista
      localStorage.setItem("nimi", nimi)
      localStorage.setItem("salasana", salasana)
      //Otetaan muistosta nimi
      const name = localStorage.getItem("nimi");
      //näytetään nimi
      const nameDisplay = document.getElementById("name-display");
      nameDisplay.textContent = name;
      //viedään etusivulle
      window.location.href = "index.html"
    }
}
//tämä osa activoituu sivuston laukausussa
document.addEventListener("DOMContentLoaded", function launch() {
  const name = localStorage.getItem("nimi");
  const nameDisplay = document.getElementById("name-display");
  nameDisplay.textContent = name;
});

