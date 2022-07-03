document.addEventListener('DOMContentLoaded',function()
{
    var gobutton = document.getElementById("gobutton");
    var save = document.getElementById("saving");

    gobutton.addEventListener('click', function(){findStream()});
    save.addEventListener('click', function(){saveLinks()});
    
    loadLinks();
}
);

function decipherTextArea()
{
    let input = document.getElementById("links");
    let text = input.innerText;
    let sparsed_text = text.match(/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/igm);
    //sparsed text is a string ARRAY with links
    return sparsed_text;
}

function findStream()
{
    let SPARSED = decipherTextArea();
    localStorage.setItem("LINKS",JSON.stringify(SPARSED));

    let openlink = SPARSED[Math.floor(Math.random() * (SPARSED.length))];
    window.open(openlink,"_blank");
    //console.log(localStorage.getItem('LINKS'))

}

function saveLinks()
{   
    localStorage.setItem('LINKS', JSON.stringify(decipherTextArea()));
    //console.log(localStorage.getItem("LINKS"));
}

function loadLinks()
{
    console.log(localStorage.getItem("LINKS"));
    if(localStorage.getItem("LINKS") == null)
    {
        document.getElementById("links").innerText ="";
    }
    else
    {
        var storedLinks = JSON.parse(localStorage.getItem("LINKS"));
        document.getElementById("links").innerText = storedLinks[0];
        for(let i = 1; i < storedLinks.length; i++)
        {
            document.getElementById("links").innerText += "\n" + storedLinks[i];
        }
    }
}
