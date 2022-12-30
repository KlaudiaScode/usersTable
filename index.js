const tableUsers = document.querySelector('table');
const tableBody = document.querySelector('tbody');
function getUsers(){
    const parent = tableUsers.parentElement;
    const loadingDiv = document.createElement('div');
    const errorDiv = document.createElement('div');
    loadingDiv.setAttribute('id','loadingContainer');
    errorDiv.setAttribute('id','errorContainer');
    loadingDiv.textContent = 'Trwa ładowanie danych..';
    parent.append(loadingDiv);
    fetch('https://randomuser.me/api/?results=50&inc=name,gender,nat')
      .then(async (response)=>{
        if(response.ok){
            const loadingContainer = document.getElementById('loadingContainer');
            loadingContainer.remove();
            const data = await response.json();
            console.log(data.results);
            data.results.forEach((user) => {
                const row = document.createElement('tr');
                const cellSurname = document.createElement('td');
                const cellName = document.createElement('td');
                const cellGender = document.createElement('td');
                const cellNat = document.createElement('td');
                cellSurname.textContent = user.name.last;
                cellName.textContent = user.name.first;
                cellGender.textContent = user.gender;
                cellNat.textContent = user.nat;
                row.append(cellSurname);
                row.append(cellName);
                row.append(cellGender);
                row.append(cellNat);
                tableBody.append(row);
            });
            tableUsers.append(tableBody);
        }else{
            throw new Error('Wystąpił błąd spróbuj ponownie później');
        }
      })
      .catch((error)=>{
        loadingDiv.remove();
        errorDiv.textContent = error.message;
        parent.append(errorDiv);
      })
}
getUsers();