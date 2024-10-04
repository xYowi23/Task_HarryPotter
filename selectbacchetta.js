function casataSceltaSelect(){
     
    let casate = localStorage.getItem("casata");

    if (casate){
        casate = JSON.parse(casate);
        let select = document.getElementById('input-scelta-casata')
       casate.forEach(function(casata){
        const option = `<option value="${casata.nome.toLowerCase()}">${casata.nome}</option>`;
            select.innerHTML += option;
             });

        }
       
    }
    document.addEventListener('DOMContentLoaded', casataSceltaSelect);