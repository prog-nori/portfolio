export const isSmartphone = () => {
    return navigator.userAgent.match(/iPhone|Android.+Mobile/)? true: false
}

export const isnotSmartphone = () => {
    return !isSmartphone()
}