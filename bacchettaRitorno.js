    function tabellaBacchetta() {
    
        let bacchettadati = localStorage.getItem("bacchetta") != null ? JSON.parse(localStorage.getItem("bacchetta")) : [];
    
        let contenitore = "";
        for (let [idx, item] of bacchettadati.entries()) {
            contenitore += `
                <tr>
                    <td>${idx + 1}</td>
                    <td>${item.codice}</td>
                    <td>${item.materiale}</td>
                    <td>${item.nucleo}</td>
                    <td>${item.lunghezza}</td>
                    <td>${item.resistenza}</td>
                    <td>${item.magoProprietario}</td>
                    <td>${item.sceltaCasata}</td>
                    <td><img src="${item.imgCasata}" class="img-thumbnail" style="width: 100px; height:100 h"></td>
                    <td>
                        <button type="button" class="btn btn-danger mt-2 btn-sm" onclick="eliminaBacchetta(${idx})">Elimina</button>
                        <button type="button" class="btn btn-warning mt-2 btn-sm" onclick="modificaBacchetta(${idx})">Modifica</button>
                    </td>
                </tr>
            `;
        }
        document.getElementById("corpo-tabella-bacchette").innerHTML = contenitore;
    }
     


function eliminaBacchetta(indice){
    let bacchettadati = localStorage .getItem("bacchetta")!= null ? JSON.parse(localStorage.getItem("bacchetta")):[];
    bacchettadati.splice(indice,1);
    localStorage.setItem("bacchetta",JSON.stringify(bacchettadati))
    tabellaBacchetta();
}


function modificaBacchetta(indice) {
    $("#modalModificaBacchetta").modal('show');
    $("#btn-salva-nuovo").data('identif', indice);

    let bacchettadati = localStorage.getItem("bacchetta") != null ? JSON.parse(localStorage.getItem("bacchetta")) : [];

    for (let [idx, item] of bacchettadati.entries()) {
        if (indice == idx) {
            $("#input-codice-bacchetta").val(item.codice);
            $("#input-materale").val(item.materiale);
            $("#input-nucleo").val(item.nucleo);
            $("#input-lunghezza").val(item.lunghezza);
            $("#input-resistenza").val(item.resistenza);
            $("#input-magoPro").val(item.magoProprietario);
            $("#input-scelta-casata").val(item. sceltaCasata);
            $("#input-img").val(item. imgCasata);

            
        }
    }
}


function salvaBacchetta(varBottone){
    let posizione = $(varBottone).data('identif');
    let varCod = $("#input-nome-bacchetta").val();
    let varMateriale=$("#input-materale").val();
    let varNucleo=$("#input-nucleo").val();
    let varLunghezza=$("#input-lunghezza").val();
    let varResistenza=$("#input-resistenza").val();
    let varMagoProprietaro=$("#input-magoPro").val();
    let varSceltaCasata=$("#input-scelta-casata").val();
    let varImgCas=$("#input-img").val();
    
    let bacchettadati = localStorage.getItem("bacchetta") != null ? JSON.parse(localStorage.getItem("bacchetta")) : []; 
    

    for (let [idx, item] of bacchettadati.entries()){
        if(idx == posizione){
            item.codice=varCod;
            item.materiale=varMateriale;
            item.nucleo=varNucleo;
            item.lunghezza=varLunghezza;
            item.resistenza=varResistenza;
            item.magoProprietario=varMagoProprietaro;
            item.sceltaCasata=varSceltaCasata;
            item.imgCasata=varImgCas;


            localStorage.setItem("bacchetta",JSON.stringify(bacchettadati));
            tabellaBacchetta();
            $("#modalModificaBacchetta").modal('hide');
            return;
    
        }
    
    }


}





tabellaBacchetta();