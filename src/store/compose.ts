export function compose (...fns) {
    return (arg) => fns.reduce((acc, curr) => curr(acc), arg)
}
