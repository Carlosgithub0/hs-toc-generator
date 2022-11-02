// Aliases // 
const btnGenerateToc = document.querySelector("#btnGenerateToc");
const btnOldBasic = document.querySelector("#btnOldBasic");
const btnOldComplex = document.querySelector("#btnOldComplex");
const textOld = document.querySelector("#textOld"); 
const textNew = document.querySelector("#textNew");
const textView = document.querySelector("#textView");

// regex rules // 
const isHeaderRegex = /<(h[23])>(.*)<\/\1>/i; // should get h2 and h3 headers only, plus content inside
const headerHasTagsRegex = /<(\/?)strong>|<(\/?)b>/gi; // should get tags <strong> and <b> (both open and closed) TODO get all tags except headers

// // Add sample at the start //
// generateSampleBasic();
// textView.innerHTML = textOld.value;

/* Button */
function generateToc(){
  // UI validation - if empty, shows alert//
  if (textOld.value == "") {
    alert("Copy the HTML from Hubspot into the left textfield")
    return
    } 
    
  /* Structure:
  1. Toc -> tocContentBefore, tocContent, tocContentAfter
  2. textContent 
  */
  tocContentBefore = `<div class="table-of-content">\n<p><b>Table of Contents</b></p>\n<ol>\n`
  tocContent = ""
  tocContentAfter = `</ol>\n</div>\n\n`
  textContentNew = ""//textOld.value

  // Assemble TOC + full blog text with anchors
  function assembleResult(){
    textNew.value = tocContentBefore + tocContent + tocContentAfter + textContentNew;
    textView.innerHTML = textNew.value; // Show result in User View panel
  }

	for (const line of textOld.value.split('\n')) { // For every line of textOld (line is defined by the split \n)
		
		// It is a header
		match = line.match(isHeaderRegex)
		if (match != null) {
    
      /* Make header inner HTML (ref) URL-friendly by
        1. replacing Tags with "" (regex rule headerHasTagsRegex)
        2. replacing spaces with dashes
        3. making it lower case
      */
      const ref = match[2].replaceAll(headerHasTagsRegex,"").replaceAll(" ", "-").toLowerCase(); // ref is URL-Friendly version replaces + lower cases the inner html of the header 
			
      // Toc content//
      tocLine = createTocLine(ref) // defines Toc line
      tocContent += tocLine // adds Toc line to Toc

      // Anchor lines //
      anchor = createAnchor(ref) // defines anchor line
			textContentNew += anchor// adds anchor line to text

		} else {

		}
			textContentNew += line + "\n"
	}

	// Add anchors to text (textContentNew)
	function createAnchor(ref) {
		return `<a id="${ref}" data-hs-anchor="true"></a>\n`; // This is an anchor
	}

	function createTocLine(ref) {
    const headerClean = match[2].replaceAll(headerHasTagsRegex,"")
		return `<li><a href="#${ref}">` + headerClean + "</a></li>\n";
	}

  assembleResult();
    
}



function generateIdealBasicResult(){
textNew.value = `<div class="table-of-content">
<p><b>Table of Contents</b></p>
<ol>
<li><a href="#h2-text">h2 Text</a></li>
<li><a href="#h3-text-1">h3 Text 1</a></li>
<li><a href="#h3-text-2">h3 Text 2</a></li>
</ol>
</div>

<p>p text</p>
<a id="#h2-text" data-hs-anchor='true'></a>
<h2>h2 Text</h2>
<p>p text 1</p>
<a id="#h3-text-1" data-hs-anchor='true'></a>
<h3>h3 Text 1</h3>
<p>p text 2</p>
<p>p text 3</p>
<a id="#h3-text-2" data-hs-anchor='true'></a>
<h3>h3 Text 2</h3>
<p>p text 4</p>
`
  textView.innerHTML = textNew.value;
  
  }

btnGenerateToc.addEventListener("click", () =>
generateToc(btnGenerateToc)
);

btnOldBasic.addEventListener("click", () =>
generateSampleBasic(btnOldBasic)
);

btnOldComplex.addEventListener("click", () =>
generateSampleComplex(btnOldComplex)
);