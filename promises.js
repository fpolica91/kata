const isChloeScared = true;

const chloeWillWalk = new Promise(
    (resolve, reject) => {
        if (isChloeScared) {
            const message = "Chloe is Walking"
            resolve(message)
        } else {
            const reason = new Error('Chloe is scared')
            reject(reason)
        }
    });


const walking = function (message) {
    const message = `hey look, ${message}`;
    return Promise.resolve(message)
}

const isChloeWalking = function () {
    chloeWillWalk
        .then(walking)
        .then(fulfilled => console.log(fulfilled))
        .catch(error => console.log(error.message))
}



