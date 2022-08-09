const colors={
p:'#388e3c',
div:'#1565c0',
span:'#e53935',
section:'#f67809',
ul:'#5e35b1',
ol:'#fbc02b',
header:'#d81b60',
nav:'#64dd17',
main:'#00acc1',
footer:'#304ffe',
form:'#9f6581',
body:'#25b6da',
padrao:'#616161',
get(tag){
return this[tag] ? this[tag] : this.padrao

}




}



document.querySelectorAll('.tag').forEach(box=>{
    const tagName = box.tagName.toLowerCase()
    box.style.borderColor = colors.get(tagName)
    //se o label esta contido na lista de classe nolabel?
    if(!box.classList.contains('nolabel')){
        
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        //vai inserir antes do elemento filho
        box.insertBefore(label,box.childNodes[0])


    }




})