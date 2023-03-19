export const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType })
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
}

export const exportToCSV = (e, data, fileName) => {
    e.preventDefault()
    downloadFile({
        data: JSON.stringify(reformatObject(data)),
        fileName,
        fileType: 'text/csv',
    })
}

const reformatObject = (data) => {
    let jsonData = []
    for (let i = 0; i < data.length; i++) {
        jsonData.push({
            name: data[i]
        })
    }
    return jsonData
}