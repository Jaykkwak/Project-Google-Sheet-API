function testGS() {
    const url = "https://script.google.com/macros/s/AKfycby6_t3itwpV2Pkku9wzyGKURlerfJF0fvstziwoAJcQcirIHh4_/exec"

}

function addGS() {
    const url = "https://script.google.com/macros/s/AKfycby6_t3itwpV2Pkku9wzyGKURlerfJF0fvstziwoAJcQcirIHh4_/exec"

    fetch(url, {
        // Default options are marked with *
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'omit', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify({first:"Enju", last:"Park", phone:"4084372437"}) // body data type must match "Content-Type" header
        });
}

document.getElementById("btn2").addEventListener("click", addGS);
