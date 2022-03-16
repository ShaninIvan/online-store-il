module.exports = [
    {
        type: 'input',
        name: 'parent',
        message: 'Введите имя компонента-родителя',
    },
    {
        type: 'input',
        name: 'element',
        message: 'Введите корневой элемент компонента (div по умолчанию)',
    },
    {
        type: 'confirm',
        name: 'hasChildren',
        message: 'У элемента есть children?',
    },
    {
        type: 'confirm',
        name: 'stories',
        message: 'Создать stories-файл?',
    },
]
