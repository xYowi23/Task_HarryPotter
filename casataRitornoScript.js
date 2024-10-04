
function tabellaCasata() {
    console.log("richiamo stampa");

    let datiLocali = localStorage.getItem("casata") != null ? JSON.parse(localStorage.getItem("casata")) : [];

    let contenitore = "";
    for (let [idx, item] of datiLocali.entries()) {
        contenitore += `
            <tr>
                <td>${idx + 1}</td>
                <td>${item.nome}</td>
                <td>${item.descrizione}</td>
                <td><img src="${item.file}" class="img-thumbnail" style="width: 100px; height:100 h"></td>
                <td>
                    <button type="button" class="btn btn-danger mt-2 btn-sm" onclick="eliminaCasata(${idx})">Elimina</button>
                    <button type="button" class="btn btn-warning mt-2 btn-sm" onclick="modifica(${idx})">Modifica</button>
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




