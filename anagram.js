function alphabetize(word) {
    if (!word) {
        return;
    }
    word = word.split('');
    word = word.sort();
    word = word.join('');
    return word;
}


function helper1(words) {
    let wordsNew = []
    for (let i = 0; i < words.length; i++) {
        wordsNew.push(alphabetize(words[i]))
    }
    return wordsNew
}


function helper2(word) {
    word = word.split('')
    word = word.sort()
    word = word.join('')
    return word
}

helper1(a)

function anagram(word, words) {
    let results = []
    let arr = (helper1(words))
    let w = (helper2(word))

    for (let i = 0; i < words.length; i++) {
        if (arr[i] === w) {
            results.push(true)
        } else {
            results.push(false)
        }
    }
    return results


}