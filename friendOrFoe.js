// IF ITEM INARRAY IS EXACTLY FULL CHARS IT WILL PUSH IT TO THE NEW ARRAY


function friend(friends) {
    let friendArray = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            friendArray.push(friends[i])
        }
    }
    return friendArray;
}