//--------------------------------------------------------------------
// Configuración
//--------------------------------------------------------------------
const urlScriptsCookies = ['https://www.googletagmanager.com/gtag/js?id=UA-xxxxxxxx-1'];

function contenidoScriptsCookies () {
    // Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-xxxxxxxx-1');
    // Fin Google Tag Manager
}