let text = '{}{}{}';

function validParentheses(text){
    const arrayText = text.split('');

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    let finalCount = 0;

    for(i =0; i< arrayText.length; i++){
        if(arrayText[i] == '('){
            count1 += 1;
        } else if(arrayText[i] == ')'){
            count1 -=1;
        } else if(arrayText[i] == '['){
            count2 +=1;
        } else if (arrayText[i] == ']'){
            count2 -=1;
        } else if (arrayText[i] == '{'){
            count3 +=1;
        } else if(arrayText[i] == '}'){
            count3 -=1;
        }
    }

    finalCount = count1 + count2 +count3;

    if(finalCount != 0){
        return console.log(false);
    } else{
        return console.log(true)
    }
}

validParentheses(text);