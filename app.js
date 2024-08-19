// script.js
function analyzeSentence() {
    const sentence = document.getElementById('sentenceInput').value.trim();
    if (sentence.length === 0 || sentence[sentence.length - 1] !== '.') {
        alert('Please enter a valid sentence ending with a period.');
        return;
    }

    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let inWord = false;
    const vowels = 'aeiou';

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char === '.') break;

        length++;

        if (vowels.includes(char.toLowerCase())) {
            vowelCount++;
        }

        if (char === ' ') {
            if (inWord) {
                wordCount++;
                inWord = false;
            }
        } else {
            inWord = true;
        }
    }

    if (inWord) {
        wordCount++;
    }

    document.getElementById('length').textContent = `Length: ${length}`;
    document.getElementById('wordCount').textContent = `Word Count: ${wordCount}`;
    document.getElementById('vowelCount').textContent = `Vowel Count: ${vowelCount}`;
}
