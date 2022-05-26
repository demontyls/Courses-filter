// Список курсов
const courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
  ];
  
  // Варианты цен (фильтры), которые ищет пользователь
  const requiredRange1 = [null, 200],
    requiredRange2 = [100, 350],
    requiredRange3 = [200, null];
    
  function courseFilter(range, courseArray) {
    const filteredArray = [];
    let [minRange, maxRange] = range;
  
    if (maxRange === null) {
      maxRange = Infinity;
    }
  
    courseArray.forEach((course) => {
      let [minPrices, maxPrices] = course.prices;
      if (maxPrices === null && minPrices !== null) {
        maxPrices = Infinity;
      }
  
      if (minRange > maxPrices && minRange >= minPrices) {
      } else {
        if (minRange >= minPrices && minRange <= maxPrices) {
          filteredArray.push(course.prices);
        }
        else if (maxRange >= minPrices) {
          filteredArray.push(course.prices);
        }
      }
    });
  
    return console.log(filteredArray);
  }
  
  console.log('Первый вариант');
  courseFilter(requiredRange1, courses);
  console.log('Второй вариант');
  courseFilter(requiredRange2, courses);
  console.log('Третий вариант');
  courseFilter(requiredRange3, courses);