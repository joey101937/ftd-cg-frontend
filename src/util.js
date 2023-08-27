

export const shortHandNumber = (number) => {
    if(number > 1000000) {
        return `${(number/1000000).toFixed(2)} M`;
    } else if (number > 1000) {
        return `${(number/1000).toFixed(0)}k`;
    }
    return `${number}`;
}