window.onload = loadImages;
window.onresize = loadImages;
function loadImages() {
    var sizeHistory = [], altStyles = ["gray"], altSizeCounter = 1;
    
    document.querySelectorAll(".img").forEach( ( imgClass ) => {
        var g="", num  = "/?random", size = imgClass.offsetWidth + "/" + imgClass.offsetHeight;
        if ( imgClass.classList.value.includes(...altStyles) ){ g = "g/"}
        if ( sizeHistory.includes(size) ){ num ="/?images=" + altSizeCounter++ }
        else { sizeHistory.push(size) }
        var bgm = "https://picsum.photos/" + g + size + num;
        imgClass.tagName=="IMG"? imgClass.src = bgm : imgClass.style.backgroundImage = "url(" + bgm + ")";
    })
}
function watch(targetNode,callback){
    var event = new MutationObserver(callback || loadImages);
    event.observe(targetNode, { childList: true });
}
