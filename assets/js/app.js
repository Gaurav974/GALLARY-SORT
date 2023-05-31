
let cl = console.log;
const showmoves = document.getElementById('showmoves'),
mymodel = document.getElementById('mymodel'),
backdrop = document.getElementById('backdrop'),
titlecontrol = document.getElementById('title'),
Imagecontrol = document.getElementById('imageurl'),
ratingcontrol = document.getElementById('rating'),
moveform = document.getElementById('moveform'),
movecontainer = document.getElementById("movecontainer")
const moveclose = [...document.querySelectorAll(".moveclose")]

const onclicthandler = (eve) => {
    mymodel.classList.toggle('visible');
    backdrop.classList.toggle('visible')
}
const templating = (arr) => {
    let reault = " ";
    arr.forEach(ele => {
        reault += `
                    <div class="col-md-4 col-sm-6">
                        <div class="card">
                            <div class="card-header">
                                <h2>
                                    ${ele.title}
                                </h2>
                            </div>
                            <div class="card-body">
                                <img src="${ele.mgeurl}" alt="" class="img-fluid imagecover">
                            </div>
                            <div class="card-footer">
                            ${ele.rating}/5
                            </div>
                        </div>
        
        `
    })
    movecontainer.innerHTML = reault
}
const movearray = [

];
templating(movearray);
const onclicksumbmit = (eve) => {
    eve.preventDefault();
    // cl(`hi................`)
    let obj = {
        title: titlecontrol.value,
        imgeurl: Imagecontrol.value,
        rating: ratingcontrol.value
    }
    movearray.push(obj)
    templating(movearray);
    eve.target.reset()
    onclicthandler()
    cl(movearray)

}

showmoves.addEventListener('click', onclicthandler);
moveclose.forEach(ele => ele.addEventListener('click', onclicthandler));
moveform.addEventListener("submit", onclicksumbmit)

