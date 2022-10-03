const Car = function (x, y) {
    this.x = x;
    this.y = y;
};

Car.prototype.drow = function (car) {
    const carHtml = '<img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/menu/09_09/menu_asterion.png">';
    const carElement = $(carHtml);
    carElement.css({
        position: "absolute",
        width: '450px',
        height: '250px',
        left: this.x,
        top: this.y
    });
    $("body").append(carElement);
}


// function drawCar(car) {
//     const carHtml = '<img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/menu/09_09/menu_asterion.png">';
//     const carElement = $(carHtml);
//     carElement.css({
//         position: "absolute",
//         width: '450px',
//         height: '250px',
//         left: car.x,
//         top: car.y
//     });
//     $("body").append(carElement);
// }

// const lambo = new Car(40,40);
// drawCar(lambo)



const lambo = new Car(40,40);
lambo.drow()



if (window.jQuery) {
    let verJquery = jQuery.fn.jquery;
    console.log(verJquery)
}