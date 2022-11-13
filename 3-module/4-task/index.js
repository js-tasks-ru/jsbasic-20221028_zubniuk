function showSalary(users, age) {
  return users
  .filter(item => item.age <= age)
  .map((item, index) => (`${item.name}, ${item.balance}`))
  .join('\n')
}
