function requestCurrencyInfo() {
    var url = '//koinex.in/api/ticker';
    fetch(url)
    .then(
        response => {
            if(response.status == 200) {
                console.log(response.json());
            }
            else {
                console.log(`response code: ${response.status}`);
            }
        }
    )
    .catch(err => {
        console.log(err);
    })
}