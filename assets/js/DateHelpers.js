export class DateHelpers{
  static displayDate(){
    let todayDate = new Date();

    let weekDay = todayDate.getDay();
    let weekDayString = DateHelpers.weekDay(weekDay);         

    let day = todayDate.getDate();
    let twoDigitsDay = DateHelpers.twoDigitsDate(day);

    let month = todayDate.getMonth() + 1;
    let twoDigitsMonth = DateHelpers.twoDigitsDate(month);
    
    let year = todayDate.getFullYear();    
    
    return `${weekDayString}, ${twoDigitsDay}-${twoDigitsMonth}-${year}.`;
  }

  static weekDay(day){
    let weekDayString = '';
    if(day == 0){
      weekDayString = 'Domingo'
    } if(day == 1){
      weekDayString = 'Segunda-Feira'
    } if(day == 2){
      weekDayString = 'Terça-Feira'
    } if(day == 3){
      weekDayString = 'Quarta-Feira'
    } if(day == 4){
      weekDayString = 'Quinta-Feira'
    } if(day == 5){
      weekDayString = 'Sexta-Feira'
    } if(day == 6){
      weekDayString = 'Sabado'
    }
    return weekDayString;
  }

  static twoDigitsDate(date){
    let stringDate = String(date);
    if(stringDate.length == 1){
      return stringDate =  '0' + stringDate;
    }
    return stringDate;
  }
}
