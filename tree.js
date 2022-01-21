export default function (data) {
  //pega a tag principal que irá receber o menu
  const tree = document.querySelector('nav#tree')

  //recebe toda a arvore de elementos
  const menu = document.createElement('ul')

  const firstLevel = data.filter(item => !item.parent)

  firstLevel.forEach(item => {
    //primeiro elemento
    const li = document.createElement('li')
    li.innerHTML = item.name

    const children = data.filter(child => child.parent === item.id)

    li.addEventListener('click', event => {
      event.stopPropagation()
      event.target.classList.toggle('open')
    })

    li.classList.add('has-children')

    children.forEach(child => {
      const subMenu = document.createElement('ul')

      const li2 = document.createElement('li')
      li2.innerHTML = child.name

      subMenu.append(li2)

      li.append(subMenu)
    })

    //adicionar os elementos ao ul
    menu.append(li)
  })

  //adiciona o menu no HTML
  tree.append(menu)
}
