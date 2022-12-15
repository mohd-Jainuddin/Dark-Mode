let container = document.getElementById("container");
let icon = document.getElementById("icon");

let dataPush = () => {
  data.map((item) => {
    container.innerHTML += ` <div class="box" id="box">
        <p>
           ${item.quote}
        </p>
      </div>`;
  })
};
dataPush();

icon.addEventListener("click",() => {
    let sun = `<i class="fa-solid fa-sun"></i>`;
    let night = `<i class="fa-solid fa-moon"></i>`;
    if(icon.innerHTML == sun){
        icon.innerHTML = night;
        let box = document.querySelectorAll("#box");
        let data = [...box];
        data.map((x) => {
           x.setAttribute("class","box")
        })
        document.querySelector("body").style.backgroundColor = 'lightGrey';
    }
    else{
        icon.innerHTML = sun;
        let box = document.querySelectorAll("#box");
        let data = [...box];
        data.map((x) => {
          x.setAttribute("class", "darkBox");
        });
        document.querySelector("body").style.backgroundColor = "black";
    }
})