let drones = document.getElementById("droneList")
console.log(drones)

for(let i = 0; i < 10; i++) {
drones.insertAdjacentHTML("beforeend",

`<div id = "droneList" class="card-deck mb-4">
      <div class="card rounded-0 shadow mx-md-2 mx-1">
        <img class="card-img-top" src="images/rent/1.jpg" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title mb-0 text-left">X213 DRONE</h4>
          <hr class="float-left">
        </div>
        <div class="card-footer bg-lightblue">
            <div class="row">
                <div class="offset-1">
                    <h6 class="mb-0"><a href="#" class="text-white">$490</a></h6>
                </div>
                <div class="offset-5">
                    <h6 class="mb-0"><a href="#" class="text-white"><i>BUY</i></a></h6>
                </div>
            </div>
        </div>
      </div>
      <div class="card rounded-0 shadow mx-md-2 mx-1">
        <img class="card-img-top" src="images/rent/3.jpg" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title mb-0 text-left">X213 DRONE</h4>
          <hr class="float-left">
        </div>
        <div class="card-footer bg-lightblue">
            <div class="row">
                <div class="offset-1">
                    <h6 class="mb-0"><a href="#" class="text-white">$490</a></h6>
                </div>
                <div class="offset-5">
                    <h6 class="mb-0"><a href="#" class="text-white"><i>BUY</i></a></h6>
                </div>
            </div>
        </div>
      </div>
      <div class="card rounded-0 shadow mx-md-2 mx-1">
        <img class="card-img-top" src="images/rent/4.jpg" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title mb-0 text-left">X213 DRONE</h4>
          <hr class="float-left">
        </div>
        <div class="card-footer bg-lightblue">
            <div class="row">
                <div class="offset-1">
                    <h6 class="mb-0"><a href="#" class="text-white">$490</a></h6>
                </div>
                <div class="offset-5">
                    <h6 class="mb-0"><a href="#" class="text-white"><i>BUY</i></a></h6>
                </div>
            </div>
        </div>
      </div>
    </div>`)
}