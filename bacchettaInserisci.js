function aggiungiBac(){
    let bacchettadati = localStorage.getItem("bacchetta") != null ? JSON.parse(localStorage.getItem("bacchetta")):[];

    let varCod=$("#input-codice-bacchetta").val();
    let varMateriale=$("#input-materale").val();
    let varNucleo=$("#input-nucleo").val();
    let varLunghezza=$("#input-lunghezza").val();
    let varResistenza=$("#input-resistenza").val();
    let varMagoProprietaro=$("#input-magoPro").val();
    let varSceltaCasata=$("#input-scelta-casata").val();
    let varImgCas=$("#input-img").val();
    
    
    let bct={
        codice:varCod,
        materiale:varMateriale,
        nucleo:varNucleo,
        lunghezza:varLunghezza,
        resistenza:varResistenza,
        magoProprietario:varMagoProprietaro,
        sceltaCasata:varSceltaCasata,
        imgCasata:varImgCas,
    }
    bacchettadati.push(bct);
    localStorage.setItem("bacchetta", JSON.stringify(bacchettadati))

    location.href="bacchetta.html"
}