module.exports = function toReadable (number) {
    let zetoTen = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let twenty = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let Hundred = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    let string = '';
    let index = 0 ;
    let verNum = number;
    
    if (verNum >= 100) {
        index = (verNum - (verNum % 100)) / 100;
        string = zetoTen[index] + ' hundred';
        verNum = verNum % 100;

        // console.log('index= ' + index, 'string= ' + string, 'verNum=' + verNum);
    }

    if (verNum >= 20 && verNum < 100){
        index = ((verNum - (verNum % 10)) / 10) - 2;        
        string ? string +=' '+ Hundred[index] : string += Hundred[index];
        verNum = verNum % 10;

        // console.log('index=' + index, 'string=' + string, 'verNum=' + verNum);
    }

    if (verNum >= 10 && verNum <= 19) {
        index = verNum % 10;
        string ? string += ' ' + twenty[index] : string +=  twenty[index];

        console.log('index=' + index, 'string=' + string, 'verNum=' + verNum);
    }

    if (verNum > 0 && verNum < 10){
        index = verNum%10;
        string ? string +=' ' + zetoTen[index] : string += zetoTen[index];
    }

    if (verNum == 0 && string.length == 0){
        string = zetoTen[verNum];
    }

    return string;
}
// console.log(toReadable(796))