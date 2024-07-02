new MutationObserver(evs=>{
    document.querySelectorAll("div.choice-info>div.text-area>yt-formatted-string.vote-percentage").forEach(e=>{
        e.parentNode.parentNode.childNodes.forEach(t=>{
            if(t.classList && t.classList.contains("progress-bar")){
                if(e.textContent != t.style.width){
                    e.textContent = t.style.width
                }
                e.removeAttribute("is-empty")
            }
        })
    })
}).observe(document.querySelector("ytd-app"),{
    subtree: true,
    attributes: true,
    childList: true,
    attributeFilter: ["style"]
})