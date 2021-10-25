// Variables
const submitBtn = document.getElementById('btn_sub');

class PrimaryEmotion {
    constructor(primary, secondary, tertiary) {
        this.primary = primary,
        this.secondary = secondary,
        this.tertiary = tertiary
    }
}

let fear = new PrimaryEmotion('fear', ['humiliated', 'rejected', 'submissive', 'insecure', 'anxious', 'scared'], ['ridiculed', 'disrespected', 'alienated', 'incompetent', 'insignificant', 'worthless', 'inferior', 'inadequate', 'worried', 'overwhelmed', 'frightened', 'terrified']);

let anger = new PrimaryEmotion('anger', ['hurt', 'threatened', 'hateful', 'mad', 'aggressive', 'frustrated', 'distant', 'critical'], ['embarrassed', 'devasted', 'insecure', 'jealous', 'resentful', 'violated', 'furious', 'enraged', 'provoked', 'hostile', 'infuriated', 'irritated', 'withdrawn', 'suspicious', 'skeptical', 'sarcastic']);

let disgust = new PrimaryEmotion('disgust', ['disapproval', 'disappointed', 'awful', 'avoidance'], ['judgemental', 'loathing', 'repugnant', 'revolted', 'revulsion', 'detestable', 'aversion', 'hesitant']);

let sad = new PrimaryEmotion('sad', ['guilty', 'abandoned', 'despair', 'depressed', 'lonely', 'bored'], ['remorseful', 'ashamed', 'ignored', 'victimized', 'powerless', 'vulnerable', 'inferior', 'empty', 'unwanted', 'isolated', 'apathetic', 'indifferent']);

let happy = new PrimaryEmotion('happy', ['optimistic', 'intimate', 'peaceful', 'powerful', 'accepted', 'proud', 'interested', 'joyful'], ['inspired', 'open', 'playful', 'sensitive', 'hopeful', 'loving', 'provocative', 'courageous', 'fulfilled', 'respected', 'confident', 'important', 'inquisitive', 'amused', 'estatic', 'liberated']);

let surprise = new PrimaryEmotion('surprise', ['excited', 'amazed', 'confused', 'startled'], ['energetic', 'eager', 'awe', 'astonished', 'perplexed', 'disillusioned', 'dismayed', 'shocked'])


console.log(fear.secondary[3]);


const radioArray = document.getElementsByClassName('primaryRadio');

console.log(radioArray);

for(let i = 0; i < radioArray.length ; i++) {
    if(radioArray[i].checked) {
        console.log(radioArray[i].getAttribute('value'))
    }
}


console.log(anger.primary)
const txtMessage = [];
const txtArea = document.getElementById("answer");

const textFunc = () => {
    txtMessage.push(txtArea.value);
    alert(txtMessage);   
}


submitBtn.addEventListener('click', textFunc);