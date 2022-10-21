const buttonGenerate = document.querySelector("#generateToc");
const buttonGenerateIdealResult = document.querySelector("#generateIdealResult");
const textBefore = document.querySelector("#textBefore");
const textAfter = document.querySelector("#textAfter");
const search = /<(h[23])>(.*)<\/\1>/g;
// const searchTOC = /h1/g;
const log = document.querySelector("#log");

textBefore.value = `<p>p text</p>
<h2>h2 Text</h2>
<p>p text</p>
<h3>h3 Text</h3>
<p>p text</p>`

generateIdealResult();

function generateIdealResult(){
document.querySelector("#headerResult").innerHTML="Ideal Result"
textAfter.value = `<!--TOC START-->\n<div class="table-of-content">
<p><b>Table of Contents</b></p> 
<li><a href='h2-text'>h2 Text</a></li>
<li><a href='h3-text'>h3 Text</a></li>
</ol>\n</div>
<!--TOC END-->\n
<p>p text</p>
<a id='h2-text' data-hs-anchor='true'></a>
<h2>h2 text</h2>
<p>p text</p>
<a id='h3-text' data-hs-anchor='true'></a>
<h3>h3 text</h3>
<p>p text</p>
`
}

/* Button */
function generateToc(){
    addToc();
    //addAnchors();
    document.querySelector("#headerResult").innerHTML="Result"
    
    function addAnchors(){// TODO treat $2 to make it URL-friendly
        const replaceAnchors = "<a id=`"+ `$2` +"` data-hs-anchor='true'></a>\n$1$2$3`";
        textAfter.value = textBefore.value.replaceAll(search,replaceAnchors);
    }
    
    function addToc() { // TODO catch only headers
      tocContent = ""
      anchorContent = ""
      // Find all h2,h3 headers
      for (const match of textBefore.value.matchAll(/<(h[23])>(.*)<\/\1>/g)) {
        const ref = match[2].replaceAll(" ", "-").toLowerCase();
        tocLine = "<li><a href=" + ref + ">" + match[2] + "</a></li>";
        //console.log("tocLine " + tocLine);
        //console.log(match[0] + ":" + match[1] + ":" + match[2]);
        tocContent += tocLine + "\n";

        anchorLine = "<a id=`" + ref + "` data-hs-anchor='true'></a>\n" + match[0];
        anchorContent += anchorLine + "\n"
      }
        textAfter.value = tocContent + "\n\n" + anchorContent

        
        // Build TOC
        /* 
        const tocAll = `<!--TOC START-->\n<div class="table-of-content">
<p><b>Table of Contents</b></p> 
<ol>\n` + 
tocContent + 
`</ol></div>
<!--TOC END-->`
*/
        // Combine everything
        // textAfter.value = tocAll + "\n\n" + textAfter.value;

    }
    
 
}

buttonGenerate.addEventListener("click", () =>
generateToc(buttonGenerate)
);
buttonGenerateIdealResult.addEventListener("click", () =>
generateIdealResult()
);
