
function tabellaCasata() {
    console.log("richiamo stampa");

    // let datiLocali = localStorage.getItem("casata") != null ? JSON.parse(localStorage.getItem("casata")) : [];
    let datiLocali  = totBacchette();
    let contenitore = "";
    for (let [idx, item] of datiLocali.entries()) {
        contenitore += `
            <tr>
                <td class="align-middle dancing-script-tb text-center">${idx + 1}</td>
                <td class="align-middle dancing-script-tb text-center">${item.nome}</td>
                <td class="align-middle dancing-script-tb text-center">${item.descrizione}</td>
                <td class="text-center" ><img src="${item.file}" class="img-thumbnail" style="width: 100px; height:100 h"></td>
                <td class="align-middle dancing-script-tb text-center">${item.tot}</td>
                <td class="text-center">
                    <button type="button" class="btn btn-danger mt-2 btn-sm " onclick="eliminaCasata(${idx})"><i class="fa-solid fa-trash-can fa-xs" style="color: #1a1919;"></i></button>
                    <button type="button" class="btn btn-warning mt-2 btn-sm " onclick="modifica(${idx})"><i class="fa-regular fa-pen-to-square" style="color: #1f1f1f;"></i></button>
                </td>
            </tr>
        `;
    }
    document.getElementById("corpo-tabella-casata").innerHTML = contenitore;
}


function eliminaCasata(indice){
    let datiLocali = localStorage .getItem("casata")!= null ? JSON.parse(localStorage.getItem("casata")):[];
    datiLocali.splice(indice,1);
    localStorage.setItem("casata",JSON.stringify(datiLocali))
    tabellaCasata();
}



function modifica(indice) {
    $("#modalModifica").modal('show');
    $("#btn-salva-nuovo").data('identif', indice);

    let datiLocali = localStorage.getItem("casata") != null ? JSON.parse(localStorage.getItem("casata")) : [];

    for (let [idx, item] of datiLocali.entries()) {
        if (indice == idx) {
            $("#input-nome-casata").val(item.nome);
            $("#input-descrizione-casata").val(item.descrizione);
        }
    }
}


function totBacchette() {
    let listaCasate = [];
    let bacchette = localStorage.getItem("bacchetta");
    let casateSt = localStorage.getItem("casata");

    
    if (bacchette) {
        bacchette = JSON.parse(bacchette);
        casate = JSON.parse(casateSt);
        let tot = 0;
        casate.forEach(function(casata) {
            let nome = casata.nome;
            console.log("nome casata" + nome);
            bacchette.forEach(function(bacchetta) {
            console.log("nome bachetta " +bacchetta.sceltaCasata);
                if(nome.toLowerCase() == bacchetta.sceltaCasata.toLowerCase()){
                    tot += 1;
                    console.log (tot);
                }
            });
            casata.tot = tot;
            tot = 0;
            listaCasate.push(casata);

        });
        
    }
    return listaCasate; 
}


//totBacchette();

// console.log(listaBacchetta );

function salva(varBottone) {
    let posizione = $(varBottone).data('identif');
    let varNome = $("#input-nome-casata").val();
    let varDescrizione = $("#input-descrizione-casata").val();
    let fileInput = document.getElementById("file-casata").files[0];

    if (!fileInput) {
        alert("Seleziona un'immagine.");
        return;
    }

    let datiLocali = localStorage.getItem("casata") != null ? JSON.parse(localStorage.getItem("casata")) : [];

    let reader = new FileReader();
    reader.onloadend = function () {
        let fileBase64 = reader.result;

        for (let [idx, item] of datiLocali.entries()) {
            if (idx == posizione) {
                item.nome = varNome;
                item.descrizione = varDescrizione;
                item.file = fileBase64;  

                localStorage.setItem("casata", JSON.stringify(datiLocali));
                tabellaCasata();
                $("#modalModifica").modal('hide');
                return;
            }
        }
    };

    reader.readAsDataURL(fileInput);  
}



tabellaCasata();




