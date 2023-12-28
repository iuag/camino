const myName = "Данила";
let programmingLanguage = "YoptaScripts";
let beforeprogrammingLanguage = "Scratch";

const courseCreatorName = "Никиты Михайловича";
let reasonText = "Ни в чем себе не отказывать и продавать курсы в интернетике";
let numberOfMonth = "6";

programmingLanguage.toUpperCase();

const result = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования \
 ${programmingLanguage}. Сейчас я изучаю язык программирования ${programmingLanguage} ${courseCreatorName}. \ 
 Я хочу стать крипто миллиардером чтобы ${reasonText}. До этого я изучал ${beforeprogrammingLanguage} \
 ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;
console.log(result);






let myInfoText = result;

console.log(
  result.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
);
console.log(myInfoText.length);

console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length - 1]);