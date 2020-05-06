const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
  hamster: 'squeak',
}

const res = Object.entries(dict)
  .filter(([, value]) => value === 'squeak')
  .map(([key]) => key)

console.log(res)

// <TodoListItem
//   label={item.label}
//   important={item.important}
// />

// <TodoListItem {...item} />

deleteItem = (id) => {
  this.setState(({ todoData }) => {
    const idx = todoData.findIndex((el) => el.id === id)
    // todoData.splice(idx, 1)

    const before = todoData.slice(0, idx)
    const after = todoData.slice(idx + 1)
    const newData = [...before, ...after]

    return {
      todoData: newData,
    }
  })
}
