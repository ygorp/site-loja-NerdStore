import Tree from './tree.js'

const menu = [
  {id: 1, name: "Camisas Masculinas", parent: 8},
  {id: 3, name: "Camisas Femininas", parent: 8},
  {id: 4, name: "Canecas", parent: 8},
  {id: 6, name: "Pop funko", parent: 8},
  {id: 7, name: "Decoração", parent: 8},
  {id: 8, name: "Categorias", parent: null}
]

Tree(menu)