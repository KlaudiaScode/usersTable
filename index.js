function getUsers(){
    fetch('https://randomuser.me/api/?results=50&inc=name,gender,nat')
      .then(async (response)=>{
        if(response.ok){
            const data = await response.json()
            console.log(data.results)
            data.results.forEach((user) => {
                //stworzyć rzędy, a w nich komórki z textContent
            });
        }else{
            throw new Error('Wystąpił błąd spróbuj ponownie później')
        }
      })
      .catch((error)=>{})
}

getUsers();


// <tr>
//<th>Katarzyna</th> 
//<td>Stosio</td> 
//<td>Kobieta</td> 
//<td>Polska</td> 
//<td>Średnie</td> 
//<td>Informatyk</td>
//<td>Panna</td>
//</tr>