const formatDate = (date = Date.now()) => {
    return `${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()}`
}
export default formatDate