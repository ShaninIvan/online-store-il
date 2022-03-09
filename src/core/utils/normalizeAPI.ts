const normalizeAPI = (data: any): any => {
    const isObject = (data: any) => Object.prototype.toString.call(data) === '[object Object]'

    const flatten = (data: any) => {
        if (!data.attributes) return data

        return {
            id: data.id,
            ...data.attributes,
        }
    }

    if (Array.isArray(data)) {
        return data.map((item: any) => normalizeAPI(item))
    }

    if (isObject(data)) {
        if (Array.isArray(data.data)) {
            data = [...data.data]
        } else if (isObject(data.data)) {
            data = flatten({ ...data.data })
        } else if (data.data === null) {
            data = null
        } else {
            data = flatten(data)
        }

        for (const key in data) {
            data[key] = normalizeAPI(data[key])
        }

        return data
    }

    return data
}

export default normalizeAPI
