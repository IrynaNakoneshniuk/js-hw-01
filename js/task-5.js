alert('Task 5');

let countryOfOrder= prompt('Вкажіть країну доставки');
let priceOrder;

switch(countryOfOrder.toLowerCase()){
    case 'китай':
        priceOrder=100;
        alert(`Доставка в ${countryOfOrder} буде коштувати ${priceOrder} кредитів`);
        break;

    case 'чилі':
        priceOrder=250;
        alert(`Доставка в ${countryOfOrder} буде коштувати ${priceOrder} кредитів`);
        break;

    case 'австралія':
        priceOrder=170;
        alert(`Доставка в ${countryOfOrder} буде коштувати ${priceOrder} кредитів`);
        break;

    case 'індія':
        priceOrder=80;
        alert(`Доставка в ${countryOfOrder} буде коштувати ${priceOrder} кредитів`);
        break;

    case 'ямайка':
        priceOrder=120;
        alert(`Доставка в ${countryOfOrder} буде коштувати ${priceOrder} кредитів`);
        break;
    default:
    alert('В вашу країні немає доставки');
    break;
}


