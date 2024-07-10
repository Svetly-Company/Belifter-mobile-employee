const date = new Date()
const actualMonth = date.getMonth() + 1
const actualYear = date.getFullYear();
const dayOfWeek = date.getDay();
const actualDay = date.getDate();
const monthDays = daysInMonth(actualMonth, actualYear);
const lastMonthDays = daysInMonth(actualMonth-1, actualYear);

function daysInMonth(month:number, year:number){
    const date = new Date(year, month, 0);
    return date.getDate();
}

function formatWeek(weekArray:number[], lastMonthDays:number, monthDays:number){
    for(let i = 0; i < 7; i++){
        if(weekArray[i] <= 0){
            weekArray[i] += lastMonthDays
        }else if(weekArray[i] > monthDays){
            weekArray[i] %= monthDays;
        }
    }
    return weekArray
}

function createWeek(dayOfWeek:number, dayOfMonth:number){
    let week:number[] = [];
    let referncialValue:number = 0 - dayOfWeek;
    for(let i = 0; i < 7; i++, referncialValue++){
        week[i] = dayOfMonth + referncialValue;
    }
    return formatWeek(week, lastMonthDays, monthDays)
    
}
export function getDayOfWeek(type:'number'|'string'){
    const week:string[] = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
    switch(type){
        case 'number':
            return dayOfWeek;
        case 'string':
            return week[dayOfWeek]
    }
}
export function getWeek(){
    return createWeek(dayOfWeek, actualDay);
}