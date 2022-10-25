//creating an array and passing the number,questions ,options and answers
let questions=[
    {
      num:1,
      question:'First operating system designed using C programming language',
      answer:'UNIX',
      options:[
        'DOS',
        'Windows',
        'UNIX',
        'Mac'
      ]
    },
    {
        num:2,
        question:'Who is the father of C language?',
        answer:'DennisRitchie',
        options:[
          'SteveJobs',
          'JamesGosling',
          'DennisRitchie',
          'Rasmus Lerdorf'
        ]
      },
      {
        num:3,
        question:'How can you create a variable with the numeric value 5?',
        answer:'int num=5;',
        options:[
          'int num=5;',
          'var num=5;',
          'integer num=5;',
          'num=5;'
        ]
      },
      {
        num:4,
        question:'How can you create a variable with the floating number 2.8?',
        answer:'float num=2.8;',
        options:[
            'num=2.8;',
            'float num=2.8;',
            'floating num=2.8;',
            'var num=2.8;'
        ]
      },
      {
        num:5,
        question:'What is the scope of global variable?',
        answer:'Throught the program',
        options:[
          'within a function',
          'within a block',
          'Throught the program',
          'None'
        ]
      },
      {
        num:6,
        question:'What is the size of int?',
        answer:'4 bytes',
        options:[
          '4 bytes',
          '2 bytes',
          '24 bits',
          '1 byte'
        ]
      },
      {
        num:7,
        question:'What is the range of char?',
        answer:'-128 to 127',
        options:[
          '1.2E-38 to 3.4E+38',
          '-2,147,483,648 to 2,147,483,647',
          '-(2^63) to (2^63)-1',
          '-128 to 127'
        ]
      },
      {
        num:8,
        question:'Which of the following is used to declare a pointer to pointer variable',
        answer:'**',
        options:[
          '*',
          '**',
          '2*',
          '2**'
        ]
      },
      {
        num:9,
        question:'Longevity of a variable refers to',
        answer:'The duration for which the variable retains a given value during the execution of a program',
        options:[
          'The duration for which the variable retains a given value during the execution of a program',
          'The portion of a program in which the variable may be visible.',
          'Internal linkage of a variable',
          'External linkage of a variable'
        ]
      },
      {
        num:10,
        question:'Which is not a storage class?',
        answer:'Struct',
        options:[
          'Auto',
          'Struct',
          'Typedef',
          'Static'
        ]
      },
      {
        num:11,
        question:'Which predefined function is used to take input from the keyboard?',
        answer:'scanf();',
        options:[
          'clrscr();',
          'printf();',
          'scanf();',
          'getch();'
        ]
      },
      {
        num:12,
        question:'Which predefined function is used to output the content on the console?',
        answer:'printf();',
        options:[
          'clrscr();',
          'printf();',
          'scanf();',
          'getch();'
        ]
      },
      {
        num:13,
        question:'What is the Priority among (*, /, %), (+, -) and (=) C Operators?',
        answer:'(*, /, %) > (+, -) > (=)',
        options:[
          '(*, /, %) > (+, -) < (=)',
          '(*, /, %) < (+, -) < (=)',
          '(*, /, %) > (+, -) > (=)',
          '(*, /, %) < (+, -) == (=)'
        ]
      },  
      {
        num:14,
        question:'Choose a syntax for C Ternary Operator from the list',
        answer:'condition ? expression1 : expression2',
        options:[
          'condition ? expression1 : expression2',
          'condition : expression1 ? expression2',
          'condition ? expression1 < expression2',
          'condition < expression1 ? expression2'
        ]
      },
      {
        num:15,
        question:'What is #include?',
        answer:'preprocessor directive',
        options:[
          'inclusion directive',
          'preprocessor directive',
          'file inclusion directive',
          'None of the mentioned'
        ]
      },     
      {
        num:16,
        question:'Which of the following are c preprocessors?',
        answer:'all of the above',
        options:[
          '#ifdef',
          '#define',
          '#endif',
          'all of the above'
        ]
      },
      {
        num:17,
        question:'An entire array is always passed by ___ to a called function',
        answer:'Call by reference',
        options:[
          'Call by value',
          'Call by reference',
          'Address relocation',
          'Address restructure'
        ]
      },  
      {
        num:18,
        question:'Which of the following loop will execute atleast once irrespective of the condition',
        answer:'do..while loop',
        options:[
          'for loop',
          'while loop',
          'do..while loop',
          'none of the above'
        ]
      },
      {
        num:19,
        question:'Which loop executes the block a specific number of times?',
        answer:'for loop',
        options:[
          'for loop',
          'while loop',
          'do..while loop',
          'all of the above'
        ]
      },
      {
        num:20,
        question:'A function calling itsef is known as?',
        answer:'Recursive Function',
        options:[
          'Self Function',
          'Auto Function',
          'Recursive Function',
          'Static Function'
        ]
      },
      {
        num:21,
        question:'What is the predefined function that starts execution of the program?',
        answer:'main()',
        options:[
          'main()',
          'printf()',
          'scanf()',
          'getch()'
        ]
      }, 
      {
        num:22,
        question:'Which is an indirection operator among the following?',
        answer:'*',
        options:[
          '&',
          '*',
          '^',
          '~'
        ]
      },
      {
        num:23,
        question:'Enumeration (or enum) is a __ data type in C?',
        answer:'user defined',
        options:[
          'user defined',
          'built-in',
          'library',
          'None Of the above'
        ]
      },
      {
        num:24,
        question:' If we do not explicitly assign values to enum names, the compiler by default assigns values to ?',
        answer:'0',
        options:[
          'null',
          '-1',
          '0',
          'Garbage'
        ]
      }, 
      {
        num:25,
        question:'What is the size of a C structure?',
        answer:'Size of C structure is the total bytes of all elements of structure',
        options:[
          'C structure size is undefined',
          'Size of C structure is the total bytes of all elements of structure',
          'Size of C structure is the size of largest element',
          'None of the above'
        ]
      },
      {
        num:26,
        question:'What is the size of a C union?',
        answer:'Size of C union is the size of largest element',
        options:[
          'C union size is undefined',
          'Size of C union is the total bytes of all elements of structure',
          'Size of C union is the size of largest element',
          'None of the above'
        ]
      }, 
      {
        num:27,
        question:'Which of the following is used to dynamically allocate an array of memory blocks of a specified type?',
        answer:'calloc()',
        options:[
          'calloc()',
          'free()',
          'malloc()',
          'realloc()'
        ]
      },
      {
        num:28,
        question:'Which of the following is used to increase or decrease the size of an allocated memory block?',
        answer:'realloc()',
        options:[
          'calloc()',
          'free()',
          'malloc()',
          'realloc()'
        ]
      },
      {
        num:29,
        question:'What is the keyword used to declare a C file pointer?',
        answer:'FILE',
        options:[
          'file',
          'FILE',
          'FILEP',
          'filefp'
        ]
      },
      {
        num:30,
        question:'A mode which is used to open an existing file for both reading and writing __',
        answer:'"R+"',
        options:[
          '"W"',
          '"W+"',
          '"R+"',
          '"A+"'
        ]
      },                                        
];
