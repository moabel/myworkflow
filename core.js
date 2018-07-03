window.onload = () => {
            loadImages()
        }
        window.onresize = () => {
            loadImages()
        }

        function loadImages() {
            document.querySelectorAll(".img").forEach((x) => {
                console.log(x);
                x.style.background = "tranparent";
                var yey = "url(https://picsum.photos/" + x.offsetWidth + "/?random)";
                x.style.backgroundImage = yey;
            })
        }
        window.onclick = () => {
            console.clear()
            var sup = document.childNodes;
            var varr = "";
            //var newe = sup.forEach((xx)=>{varr += String(xx.nodelist)})
            console.log(sup)
            console.log(newe)
        }
