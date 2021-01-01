function solve(string) {

    let words = string.split(/[\.,\!\?\s\:;\(\)\-\'\"]/).filter(x => x !== '').map(e => e.toUpperCase());
    console.log(words.join(', '));
}
solve('Hi, how are you?');