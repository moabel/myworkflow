window.onload = loadImages;
window.onresize = loadImages;
function loadImages() {
    var valuess= "";
    var altStyles= ["gray"];
    var altSizeCounter= 1;
    document.querySelectorAll(".img").forEach( ( imgClass ) => {
        var g="", num  = "/?random";
        if ( imgClass.classList.value.includes(...altStyles) ){ g = "g" }
        var size = imgClass.offsetWidth + "/" + imgClass.offsetHeight + "";
        valuess = [...valuess, size]
        if ( valuess.includes(size) ){ num ="/?images=" + altSizeCounter++ }
        imgClass.style.background = "tranparent";
        var bgm = "https://picsum.photos/" + (g +"/") + size + num;
        imgClass.tagName=="IMG"? imgClass.src = bgm : imgClass.style.backgroundImage = "url(" + bgm + ")";
    })
}
function watch(targetNode){
    var event=new MutationObserver(loadImages);
    event.observe(targetNode, { childList: true });
}
