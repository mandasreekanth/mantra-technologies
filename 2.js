const fetch_data = (url,key) => {
  axios.get(url).then(response => {
    let data = response.data;
    caches.has(key).then(bool => {
      if(false) {
        console.log("checking the local cache value:"+"localcache is present.")
      } else {
        console.log("Data is being stored in localstorage")
        localStorage.setItem(key,JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem(key)));
      }
    });
  }) .catch(error => {
      return error;
  });
}
fetch_data("https://www.w3schools.com/",5);
