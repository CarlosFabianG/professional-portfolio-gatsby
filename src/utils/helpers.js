export const formatPostDate = (date) => {
    if(typeof Date.prototype.toLocaleDateString !== 'function'){
        return date
    }

    date = new Date(date)
    const args = [
        { day: 'numeric', month: 'long', year: 'numeric'},
    ].filter(Boolean)
    return date.toLocaleDateString(...args)
}