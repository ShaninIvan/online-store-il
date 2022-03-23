const getCardcroppedDesc = (description: string) => {
    const croppedDescription =
        description.length > 55 ? `${description.substring(0, 55)}...` : description

    return croppedDescription
}

export default getCardcroppedDesc
