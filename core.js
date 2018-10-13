const myflow = (function(){
	window.onload = loadImages;
	window.addEventListener("resize", loadImages);
	altStyles=["gray"];
	//altStyles refere á tags com estilos diferentes, até agora só criei cinza mas o código é fácil de acrescentar mais outras com só uma linha de código
	function loadImages() {
		document.querySelectorAll(".img").forEach((x) => {
			var g="";
			if ( altStyles.forEach(y=>x.classList.contains(y) ) { g = "g" })
			x.style.background = "tranparent";
			//O uso de ""+"" foi escolhido ao invéz de ${} simplismente por ser mais compativel
			var bgm = "https://picsum.photos/"+ g +"/" + x.offsetWidth + "/"+x.offsetHeight+ "/?random";
			x.tagName == "IMG" ? x.src = bgm : x.style.backgroundImage = "url("+bgm+")";
		})
	}
    return {
        watch : function ( targetNode ) {
        var event = new MutationObserver( loadImages );
        event.observe( targetNode, { childList: true } );
        }
    }
})()
