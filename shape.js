function getShape(n) {
    let shape = null
    if(n % 2 === 0) {
        shape = `Circle`
    }

    else if(n % 3 === 0){
        shape = `Star`
    }

    else if(n % 2 === 0 && n % 3 === 0) {
        shape = `Circle Star`
    }
    return shape
}

console.log(getShape(5))