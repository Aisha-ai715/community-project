const moduleImport = document.querySelectorAll('[data-import]');

for (let element of moduleImport){
    const link = element.getAttribute('data-import');
    
    fetch(link).then((res)=>{

        return res.text();

    }).then((component)=>{
        
      
        element.innerHTML = component;
        loadScripts(element);

    }).catch(()=>{
        element.innerHTML= '<h2>There are nothing in the page<h2>';
    });
}

function loadScripts(element){
    const scripts = element.querySelectorAll("script");
    for (let script of scripts) {
        const newScript = document.createElement('script');
        if(script.src){
            newScript.src = script.src;
        }
        if(script.textContent){
            newScript.textContent = script.textContent;
        }
        script.remove()
        
        document.body.appendChild(newScript)
    }

}
