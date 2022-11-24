function uuid() {
    return Math.random().toString(20).split('.')[1];
}

const defalutUrl = './images/icon.png';

const images = ["./images/cSharp.png", "./images/php.png", "./images/js.png", "./images/mysql.png", "./images/java.png", "./images/c++.png"]


let newCards = [...images, ...images].map(item => {
    return {
        id: uuid(),
        url: item,
        show: false,
        clicked: false
    }
});

export {newCards, defalutUrl, uuid}