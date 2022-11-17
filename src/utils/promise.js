let ok = true

export const promise = (time, task) => {
    return new Promise ((res, rej) => {
        setTimeout(()=>{
            ok ? res(task) : rej("oh no")
        }, time)
    })
}