
if (document.startViewTransition) {
    
    window.navigation.addEventListener('navigate', (event) => {
        console.log(event.destination.url)
        const toUrl = new URL(event.destination.url);
    
        // si es una pagina externa
        if (location.origin !== toUrl.origin) return
    
        // si es una pagina interna
        event.intercept({
            async handler (){
                // vamos a cargar la pagina de destino
                // utilizando un fetch para obtener el html
                const response = await fetch(toUrl.pathname); 
                const text = await response.text();
                // quedarnos solo con el contenido html con regex
                const [, data] = text.match(/<body>([\s\S]*?)<\/body>/);
    
                // utilizar la api de viewtransition
                document.startViewTransition(() => {
                    // como tiene que actualizar la vista
                    // el scroll hjacia arriba del todo
                    document.body.innerHTML = data;
                    document.documentElement.scrollTop = 0;
                    
                });
            }
        })
    
    });
}
