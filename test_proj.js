// תוקן

// בעיה בסינטקס של יצירת לולאה
// תיקנו אותו וניתן היה לראות את הבעיה אפילו רק מהעורך קוד של vs code
// כמו כן הטעות השניה היא הייתה כי הוא לא מצליח להוסיף את הערך האחרון וראינו את זה גם מזה שמדבגים ורואים כי הערך האחרון לא מתווסף ולכן הוספנו את הסימון = לתנאי עצירה של הלולאה
// export function sumTo(n) {
//     let s = 0;
//     for (let i = 1; i <= n; i++) {
//         s += i;
//     }
//     return s;
// }
// console.log(sumTo(-5));


// תוקן 
// export function maxOrNull(arr) {

//     // נפתרה הבעיה על ידי זה שאנחנו מגדירים את האיבר הראשון כמקסימום 
//     let max = arr[0];

//     for (const x of arr) if (x > max) max = x;
//     return arr.length ? max : null;
// }
// console.log(maxOrNull([]));


export function findObjectByValue(objArr, value) {
    for (const obj of objArr) {``
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                if (element === value) {
                    return obj;
                }
            }
        }
    }
    return "not found";
}

export const objArr = [
    {
        "name": 'alice',
        "job": 'programer',
        "age": '30',
        "salary": '25,000$'
    },
    {
        "name": 'bob',
        "job": 'programer',
        "age": '40',
        "salary": '35,000$'
    },
    {
        "name": 'david',
        "job": 'programer',
        "age": '29',
        "salary": '27,000$'
    }
]


console.log(findObjectByValue(objArr, '27,000$'));
