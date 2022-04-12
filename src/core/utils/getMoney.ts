const getMoney = (value: number) => {
    const money = value.toLocaleString('en-EN')

    return money.includes('.') ? `$${money}` : `$${money}.00`
}

export default getMoney
