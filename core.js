window.onload = loadImages;
window.onresize = loadImages;
altStyles=["gray"]
function loadImages() {
    document.querySelectorAll(".img").forEach((x) => {
        var g="";
        altStyles.forEach(y=>x.classList.contains(y)? g="g":null)
        x.style.background = "tranparent";
        var bgm = "https://picsum.photos/"+ g +"/" + x.offsetWidth + "/"+x.offsetHeight+ "/?random";
        x.tagName=="IMG"?x.src=bgm:x.style.backgroundImage = "url("+bgm+")";
    })
}
//         window.onclick = () => {
//             console.clear()
//             var sup = document.childNodes;
//             var varr = "";
//             //var newe = sup.forEach((xx)=>{varr += String(xx.nodelist)})
//             console.log(sup)
//             console.log(newe)
//         }
function whatch(targetNode){
    var config = { childList: true };
    var ll=new MutationObserver(loadImages);
    ll.observe(targetNode, config);
}
