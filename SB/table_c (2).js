function makeTableFromCountry (symbol,i){
        let tab,tr,td,h1;  // объявляем переменные
        tab="<table width=100%>"; // инициализируем переменную открывающим тегом таблицы
            tr="<tr>"; // инициализируем переменную открывающим тегом строки таблицы
                td='<td id="th1" colspan=2>';  // инициализируем переменную открывающим тегом столбца таблицы и атрибутом объединения
                    h1="<h1>" + symbol[0] + " - " + symbol[1] + "</h1>"; // инициализируем переменную тегом h1
                    // внутри которого производим конкатенацию объектов переданного массива
                td+=h1 + "</td>";
            tr+=td + "</tr>"
            tab+=tr; // все выше образованное складываем в переменную
            // шапка
    
            let tinfo1, tinfo2; // объявляем переменные // let - более современный способ объявления, есть очень тонкое различие у var
            for (let i=2;i<6;i++)
            { 
                tr="<tr width=75%>";
                    td="<td>";
                    // присваиваем переменным новые открывающие теги
                        tinfo1=about[i]; // описание информаций
                        tinfo2=symbol[i]; // сама информация
                     	// инициализируем переменные элементами массива 
                        td+=tinfo1;
                        tr+=td;
                    td="<td>";
                    td+=tinfo2;
                tr+=td;
                tab+=tr; // все выше образованное складываем в переменную
            }
            // общая информация
    
            let count1=symbol[6].length; // инициализируем переменную значением длины массива
            for (let i=0;i<count1;i++)
            {
                tr="<tr>";
                    td="<td>";
                    // присваиваем переменным новые открывающие теги
                        tinfo1=about[6];
                        tinfo2=symbol[6][i];
                        // инициализируем переменные элементами массива 
                        if (i===2) // строгое сравнение без приведения
                            td+=tinfo1;
                        tr+=td;
                    td="<td>";
                    td+=tinfo2;
                tr+=td;
                tab+=tr; // все выше образованное складываем в переменную
            }
            // географические объекты

            count1=symbol[7].length;
            for (let i=0;i<count1;i++)
            {
                tr="<tr>";
                    td="<td>";
                    // присваиваем переменным новые открывающие теги
                        tinfo1=about[7];
                        tinfo2=symbol[7][i];
                        // инициализируем переменные элементами массива
                        if (i===0)
                            td+=tinfo1;
                        tr+=td;
                    td="<td>";
                    td+=tinfo2;
                tr+=td;
                tab+=tr; // все выше образованное складываем в переменную
            }
            // литературные произведения
    
            let count=0;
            for ( let key in symbol[8]) // игнорируем использующиеся свойства
            {
                let length=Object.keys(symbol[8]).length; // Object.keys - возвращает массив ключей, length - длину массива
                tr="<tr>";
                    td="<td>";
                        tinfo1=about[8];
                        tinfo2=symbol[8][key];
                        count++;
                        if (count===Math.floor(length/2)) //Math.floor - округление вниз
                            td+=tinfo1;
                        tr+=td;
                    td="<td>";
                    td+=key;
                    td+="-";
                    td+=tinfo2;
                tr+=td;
                tab+=tr; // все выше образованное складываем в переменную
            }
            // исторические события
        tab+="</table>"; // закрываем таблицу
    return tab; // возвращаем таблицу
}
// функция




let arr=countries.map((symbol,i)=>{  // map - возвращает массив результатов функций // функциональное выражение стрелки
	return makeTableFromCountry(symbol,i)
});
arr.forEach(function(person, i, array) { // forEach - перебирает элементы массива
        document.write(person); // выводим элемент массива
        document.write("<br>");
    }) 


// объекты 4 лб дальше

let obj1 = {
    countries: countries, // поле с исходными данными 
    outCountries: function() { // метод вывода данных
        let arr=countries.map((symbol,i)=>{  // map - возвращает массив результатов функций // функциональное выражение стрелки
           return makeTableFromCountry(symbol,i)
        });
        
        arr.forEach(function(person, i, array) { // forEach - перебирает элементы массива
            document.write(person); // выводим элемент массива
            document.write("<br>");
        }) 
      }
};


obj1.outCountries();


function Changes(obj1) {
   this.countries = obj1;
   this.changeCountries = function(data) {
       this.countries = obj1.filter(function(symbol, i, arr) {
            let len = symbol[0].length; // длина названия стран
            if (len <= data) { // если длина названия меньше или равно data
                return symbol; // то закидываем его в массив (удовлетворяет условию)
            }
        }); // новый массив с исключенными странами
       
       let edit_per = this.countries.map((symbol,i)=>{  // map - возвращает массив результатов функций // функциональное выражение стрелки
           return makeTableFromCountry(symbol,i)
        });
       
       edit_per.forEach(function(person, i, array) { // forEach - перебирает элементы массива
            document.write(person); // выводим элемент массива
            document.write("<br>");
        }) 
   }
};

let obj2 = new Changes(obj1.countries);

obj2.changeCountries(9);


























