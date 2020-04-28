//get data from API
// https://cors-anywhere.herokuapp.com/
 function getData() {
    const URL = new Request(`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://aimtell.com/files/sites.json`);
   //fetch the API
      fetch(URL).then((response)=>{
        return response.json();
       }).then((data)=>{
        let results = data.sites;
        results.forEach(cur => {
            //display the data on the UI
            document.querySelector('.tbody').innerHTML += `
                        <tr>
                        <th scope="row">${cur.id}</th>
                        <td></td>
                        <td>${cur.name}</td>
                        <td>${cur.url}</td>
                        </tr>
                        
            `
        });
       })
       .catch(error => console.log(error)) 
       //disable to button after fetching data
    document.querySelector('.btn').disabled = true;
}



document.querySelector('.btn').addEventListener('click', getData)