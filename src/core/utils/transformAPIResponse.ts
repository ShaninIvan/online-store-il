type StrApiResponseType = {
    data: {
        id: number
        attributes: {
            [key: string]: any
        }
    }[]
    meta: {
        pagination: {
            page: number
            pageSize: number
            pageCount: number
            total: number
        }
    }
}

const transformAPIResponse = (data: StrApiResponseType) => {
    const result = data.data.map((current) => {
        const obj: { [key: string]: any } = { id: current.id }
        for (const key in current.attributes) {
            if (typeof current.attributes[key].data === 'object') {
                obj[key] = current.attributes[key].data
                continue
            }

            obj[key] = current.attributes[key]
        }

        return obj
    })

    return result
}

export default transformAPIResponse
