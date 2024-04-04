function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
  
    //pegar a imagem
    const img = document.querySelector("#profile img")

    //substituir a imagem
     if(html.classList.contains('light')){
    //se tiver light mode, adcionar a imagem light
        img.setAttribute('src', './assets/Perfil Curriculo arredondado.png')
        img.setAttribute('alt', "Foto de Guilherme Fiuza sorrindo de dia")
    }else{
    //se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/Perfil arredondado a noite.png')
        img.setAttribute('alt', "Foto de Guilherme Fiuza sorrindo a noite")
    }
}