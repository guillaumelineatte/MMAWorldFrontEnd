
//Requête ajax pour ajouter des articles UFC
$.ajax({
    url: "http://195.154.118.169/guillaume/projetMMA/start.php?c=ufc&t=ufcData",
    context: document.body
}).done(function(data) {
    console.log("Data received from server:", data);
    var ufcData = JSON.parse(data);
    var screenWidth = window.innerWidth;
    var delay = 200;
    var delayIncrement = screenWidth < 992 ? 0 : 200;
    ufcData.forEach(function(ufc, index) {
        var uniqueId = `ufcModal${index}`;
        var nouvelUfc = `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card-custom bg-base shadow-effect h-100">
                    <div class="card-custom-image">
                        <img src="data:image/png;base64,${ufc.image}" alt="UFC Image">
                    </div>
                    <div class="card-custom-body">
                        <h5 class="card-title">${ufc.title}</h5>
                        <p class="card-text">${ufc.description}</p>
                        <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${uniqueId}">En savoir plus</a>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="${uniqueId}" tabindex="-1" aria-labelledby="${uniqueId}Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${uniqueId}Label">${ufc.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${ufc.description}
                        </div>
                    </div>
                </div>
            </div>`;
        console.log("Appending new UFC item:", nouvelUfc);
        $(".ufc-container .row.gy-4").append(nouvelUfc);
        delay += delayIncrement;
    });
});

//Requête ajax pour ajouter des articles PFL
$.ajax({
    url: "http://195.154.118.169/guillaume/projetMMA/start.php?c=pfl&t=pflData",
    context: document.body
}).done(function(data) {
    console.log("Data received from server:", data);
    var pflData = JSON.parse(data);
    var screenWidth = window.innerWidth;
    var delay = 200;
    var delayIncrement = screenWidth < 992 ? 0 : 200;
    pflData.forEach(function(pfl, index) {
        var uniqueId = `pflModal${index}`;
        var nouveauPfl = `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card-custom bg-base shadow-effect h-100">
                    <div class="card-custom-image">
                        <img src="data:image/png;base64,${pfl.image}" alt="PFL Image">
                    </div>
                    <div class="card-custom-body">
                        <h5 class="card-title">${pfl.title}</h5>
                        <p class="card-text">${pfl.description}</p>
                        <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${uniqueId}">En savoir plus</a>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="${uniqueId}" tabindex="-1" aria-labelledby="${uniqueId}Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${uniqueId}Label">${pfl.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${pfl.description}
                        </div>
                    </div>
                </div>
            </div>`;
        console.log("Appending new PFL item:", nouveauPfl);
        $(".pfl-container .row.gy-4").append(nouveauPfl);
        delay += delayIncrement;
    });
});

//Requête ajax pour ajouter des articles ONE
$.ajax({
    url: "http://195.154.118.169/guillaume/projetMMA/start.php?c=one&t=oneData",
    context: document.body
}).done(function(data) {
    console.log("Data received from server:", data);
    var oneData = JSON.parse(data);
    var screenWidth = window.innerWidth;
    var delay = 200;
    var delayIncrement = screenWidth < 992 ? 0 : 200;
    oneData.forEach(function(one, index) {
        var uniqueId = `oneModal${index}`;
        var nouveauOne = `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card-custom bg-base shadow-effect h-100">
                    <div class="card-custom-image">
                        <img src="data:image/png;base64,${one.image}" alt="ONE Image">
                    </div>
                    <div class="card-custom-body">
                        <h5 class="card-title">${one.title}</h5>
                        <p class="card-text">${one.description}</p>
                        <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${uniqueId}">En savoir plus</a>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="${uniqueId}" tabindex="-1" aria-labelledby="${uniqueId}Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${uniqueId}Label">${one.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${one.description}
                        </div>
                    </div>
                </div>
            </div>`;
        console.log("Appending new ONE item:", nouveauOne);
        $(".one-container .row.gy-4").append(nouveauOne);
        delay += delayIncrement;
    });
});

//Requête qui ajoute des éléments vêtement
$.ajax({
    url: "http://195.154.118.169/guillaume/projetMMA/start.php?c=cloth&t=clothData",
    context: document.body
}).done(function(data) {
    console.log("Data received from server:", data);
    var clothData = JSON.parse(data);
    var screenWidth = window.innerWidth;
    var delay = 200;
    var delayIncrement = screenWidth < 992 ? 0 : 200;
    clothData.forEach(function(cloth, index) {
        var uniqueId = `clothModal${index}`;
        var nouveauCloth = `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card-custom bg-base shadow-effect h-100">
                    <div class="card-custom-image">
                        <img src="data:image/png;base64,${cloth.image}" alt="VETEMENT Image">
                    </div>
                    <div class="card-custom-body">
                        <h5 class="card-title">${cloth.title}</h5>
                        <p class="card-text">${cloth.description}</p>
                        <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${uniqueId}">En savoir plus</a>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="${uniqueId}" tabindex="-1" aria-labelledby="${uniqueId}Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${uniqueId}Label">${cloth.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${cloth.description}
                        </div>
                    </div>
                </div>
            </div>`;
        console.log("Appending new VETEMENT item:", nouveauCloth);
        $(".cloth-container .row.gy-4").append(nouveauCloth);
        delay += delayIncrement;
    });
});


//Requête qui ajoute des éléments equipment
$.ajax({
    url: "http://195.154.118.169/guillaume/projetMMA/start.php?c=equipment&t=equipmentData",
    context: document.body
}).done(function(data) {
    console.log("Data received from server:", data);
    var equipmentData = JSON.parse(data);
    var screenWidth = window.innerWidth;
    var delay = 200;
    var delayIncrement = screenWidth < 992 ? 0 : 200;
    equipmentData.forEach(function(equipment, index) {
        var uniqueId = `equipmentModal${index}`;
        var nouveauEquipment = `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card-custom bg-base shadow-effect h-100">
                    <div class="card-custom-image">
                        <img src="data:image/png;base64,${equipment.image}" alt="VETEMENT Image">
                    </div>
                    <div class="card-custom-body">
                        <h5 class="card-title">${equipment.title}</h5>
                        <p class="card-text">${equipment.description}</p>
                        <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${uniqueId}">En savoir plus</a>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="${uniqueId}" tabindex="-1" aria-labelledby="${uniqueId}Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${uniqueId}Label">${equipment.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${equipment.description}
                        </div>
                    </div>
                </div>
            </div>`;
        console.log("Appending new VETEMENT item:", nouveauEquipment);
        $(".equipment-container .row.gy-4").append(nouveauEquipment);
        delay += delayIncrement;
    });
});


//Requête qui ajoute des éléments complément
$.ajax({
    url: "http://195.154.118.169/guillaume/projetMMA/start.php?c=complement&t=complementData",
    context: document.body
}).done(function(data) {
    console.log("Data received from server:", data);
    var complementData = JSON.parse(data);
    var screenWidth = window.innerWidth;
    var delay = 200;
    var delayIncrement = screenWidth < 992 ? 0 : 200;
    complementData.forEach(function(complement, index) {
        var uniqueId = `complementModal${index}`;
        var nouveauComplement = `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card-custom bg-base shadow-effect h-100">
                    <div class="card-custom-image">
                        <img src="data:image/png;base64,${complement.image}" alt="VETEMENT Image">
                    </div>
                    <div class="card-custom-body">
                        <h5 class="card-title">${complement.title}</h5>
                        <p class="card-text">${complement.description}</p>
                        <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${uniqueId}">En savoir plus</a>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="${uniqueId}" tabindex="-1" aria-labelledby="${uniqueId}Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${uniqueId}Label">${complement.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${complement.description}
                        </div>
                    </div>
                </div>
            </div>`;
        console.log("Appending new VETEMENT item:", nouveauComplement);
        $(".complement-container .row.gy-4").append(nouveauComplement);
        delay += delayIncrement;
    });
});
