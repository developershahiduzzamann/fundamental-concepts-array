const subject = ['bangla', 'english', 'math'];
// const rev = subject.reverse();
// console.log(rev);

const reversedSubjects = [];

for (let i = subject.length - 1; i >= 0; i--) {
  reversedSubjects.push(subject[i]);
}

console.log(reversedSubjects)


const number = [11, 12, 13, 14, 15, 16, 17];
for(let i = number.length - 1; i >=0; i--){
    const num = number[i];
    console.log(num)
}