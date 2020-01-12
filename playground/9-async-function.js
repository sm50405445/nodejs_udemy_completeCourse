const add = (a,b) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0||b<0){
                return reject('Number must be non-negative')
            }

            resolve(a+b)
        },300)
    })
}

const doWork = async() =>{
    const sum = await add(1,200)
    const sum2 = await add(sum,200)
    const sum3 = await add(sum2,-1)
    return sum3
}
console.log(doWork())

doWork().then((data)=>{
    console.log('result',data)
}).catch((err)=>{
    console.log('err',err)
})