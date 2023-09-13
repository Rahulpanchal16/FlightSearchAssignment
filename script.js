let x = fetch("flightData.json");
x.then((response) => {
  return response.json();
}).then((result) => {
  console.log(result);
  ihtml = "";
  for (let data in result) {
    console.log(result[data]);
    ihtml += `
    
    <div class="card">
                    <div class="card-body text-start">
                      <div class="row">
                        <div class="row"><h2>&#8377; ${result[data].price_in_rupees}</h2></div>
                        <div class="col-4">
                          <p>${result[data].from} > ${result[data].to}</p>
                          <p>Depart:${result[data].depart_time}</p>
                          <p>Arrive:${result[data].arrive_time}</p>
                        </div>
                        <div class="col-4">
                          <p>${result[data].to} > ${result[data].from}</p>
                          <p>Arrive:${result[data].depart_time}</p>
                          <p>Depart:${result[data].arrive_time}</p>
                        </div>
                        <div class="col">
                          <a class="btn btn-primary">Book Flight</a>
                        </div>
                      </div>
                    </div>
                  </div>`;
  }
  cardContainer.innerHTML = ihtml;
});
