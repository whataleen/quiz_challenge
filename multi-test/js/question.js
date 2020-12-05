const arrayQuestions = [];

class Question {

    constructor(q, oA, oB, oC, oD, cA) {
        this.questions = q;
        this.optionA = oA;
        this.optionB = oB;
        this.optionC = oC;
        this.optionD = oD;
        this.correctAnswer = cA;
    }
}

arrayQuestions.push(new Question("Inside which HTML element do we put the JavaScript?", "js", "javascript", "script", "scripting", 3));

arrayQuestions.push(new Question("Of the following, if statements, which one correctly executes three instructions if the condition is true?", "If (x<0)a=b*2;y=x;z=a-y;", "{if(x<0)a=b*2;y=x;z=a–y;}", "If{(x<0)a=b*2;y=x;z=a–y;}", "If(x<0){a=b*2;y=x;z=a–y;}", 4));

arrayQuestions.push(new Question("Where is the correct place to insert a JavaScript?", "body", "both head and body", "head", "None", 2));

arrayQuestions.push(new Question("What is node.js?", "backend javascript", "front-end language", "a way of running your code", "a language like english", 1));

arrayQuestions.push(new Question("A loop that never ends is referred to as a(n)_________.", "While loop", "Infinite loop", "Recursive loop", ") for loop", 2));

arrayQuestions.push(new Question("Which command will stop an infinite loop?", "Alt-C", "Shift-C", "Esc", "Ctrl-C", 4));

arrayQuestions.push(new Question("Sal needs to execute a section of code ten times within a program. Compare the selection structures below and select which one meets the needs identified.", "If-Else", "For", "While", "If", 2));

arrayQuestions.push(new Question("Which of the sets of statements below will add 1 to x if x is positive and subtract 1 from x if x is negative but leave x alone if x is 0??", "If (x > 0) x++; else x--;", "If (x > 0) x++; else if (x < 0) x--;", "If (x == 0) x = 0; else x++; x--;", "X++; x--;", 3));

arrayQuestions.push(new Question("During program development, software requirements specify?", "How the program will accomplish the task", "What the task is that the program must perform", "How to divide the task into subtasks", "How to test the program when it is done", 2));

arrayQuestions.push(new Question("Kim has just constructed her first for loop within the Java language.  Which of the following is not a required part of a for loop??", "Initialization", "Condition", "Variable", ") increment", 2));