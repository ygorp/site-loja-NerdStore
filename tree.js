export default function(data) {
  //pega a tag principal que irá receber o menu
  const tree = document.querySelector('nav#tree')
  
  //recebe toda a arvore de elementos
  const menu = document.createElement('ul')



const firstLevel = data.filter(item => !item.parent)

firstLevel.forEach( item => {
    //primeiro elemento
    const li = document.createElement('li')
    li.innerHTML = item.name


    const children = data.filter(child => child.parent === item.id)
    children.forEach( child => {
        const li2 = document.createElement('li')
        li2.innerHTML = child.name

        li.append(li2)
    })



     //adicionar os elementos ao ul
    menu.append(li)
});










  
   

 

  //adiciona o menu no HTML
  tree.append(menu)

}