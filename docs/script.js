(() => {
    var packs = null;
    function startup() {
        packs = document.getElementsByClassName("pack");
        console.log(packs);
        for (var i = 0; i < packs.length; i++) {
            packs[i].outerHTML = "<a href=\"" + packs[i].getAttribute('packdownload') + "\" target=\"_blank\" download>" + packs[i].outerHTML + "</a>"
            var packicon = document.createElement("img");
            packicon.src = packs[i].getAttribute("data-pack-icon");
            packicon.classList.add("pack-icon");
            packs[i].appendChild(packicon);
            packicon = null;
            var tdcontainer = document.createElement("div");
            tdcontainer.classList.add("pack-text-container");
            var title = document.createElement("p");
            title.classList.add("pack-title");
            title.textContent = packs[i].getAttribute("data-pack-title");
            var description = document.createElement("p");
            description.classList.add("pack-description");
            description.textContent = packs[i].getAttribute("data-pack-description");
            tdcontainer.appendChild(title);
            tdcontainer.appendChild(description);
            packs[i].appendChild(tdcontainer);
        }
    }
    window.onload = startup;
})();