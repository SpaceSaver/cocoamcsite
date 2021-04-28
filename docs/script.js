(() => {
    var packs = null;
    function startup() {
        packs = document.getElementsByClassName("pack");
        console.log(packs);
        for (var i = 0; i < packs.length; i++) {
            packs[i].outerHTML = "<a href=\"" + packs[i].getAttribute('packdownload') + "\" target=\"_blank\" download>" + packs[i].outerHTML + "</a>"
            /*packs[i].addEventListener("click", element => {
                console.log(element.path[element.path.length - 7].getAttribute('packdownload'));
                window.location.href = element.path[element.path.length - 7].getAttribute('packdownload');
            });*/
        }
    }
    window.onload = startup;
})();