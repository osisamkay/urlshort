const input = document.querySelector(".domain");
const submitted = document.querySelector(".go");
submitted.addEventListener('click', function (event) {
    event.preventDefault();
    axios({
        method: 'get',
        url: `https://api.rebrandly.com/v1/links/new?apikey=8fdbd07245fb429a983f14b6c913972b&destination=${input.value}&domain[fullName]=rebrand.ly`
        
    })
    .then(function (response) {
        console.log(response.data.shortUrl);
        // const { data: { data } } = response
        const short=document.querySelector('.short');
      short.textContent=`${response.data.shortUrl}`;
      short.href=`http://${response.data.shortUrl}`;
      });
      
});