function aggiungi() {

    let datiLocali = localStorage.getItem("casata") !=null ? JSON.parse(localStorage.getItem("casata")) : [];

            let varNome= $("#input-nome-casata").val();
            let varDescrizione= $("#input-descrizione-casata").val();
            let fileInput = document.getElementById("file-casata").files[0];
            let totaleBacchette=0;
            
           

          let reader = new FileReader();
            reader.onloadend = function () {
        let fileBase64 = reader.result; 

        let cst = {
            nome: varNome,
            descrizione: varDescrizione,
            file: fileBase64,
            tot:totaleBacchette,
        };

        datiLocali.push(cst);
        localStorage.setItem("casata", JSON.stringify(datiLocali));

       
        $("#input-nome-casata").val("");
        $("#input-descrizione-casata").val("");
        $("#file-casata").val("");
    };

    reader.readAsDataURL(fileInput); 
    location.href="casata.html"
}


// function aggiungi() {

//     let datiLocali = localStorage.getItem("casata") !=null ? JSON.parse(localStorage.getItem("casata")) : [];

//             let  varNome= $("#input-nome-casata").val();
//             let varDescrizione= $("#input-descrizione-casata").val();
//             let  varFile= $("#file-casata").val();   
            
//             let cst={
//                 nome:varNome,
//                 descrizione:varDescrizione,
//                 file:varFile,
//             }
            
//             datiLocali.push(cst);
//             localStorage.setItem("casata", JSON.stringify(datiLocali))

// } 