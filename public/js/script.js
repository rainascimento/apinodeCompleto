

function alerta() {
   
    fetch('http://localhost:3000/posts')
        .then(result => {

            return result.json();
        })
        .then(data => {
            console.log(data);
        })

}

function byid() {

    fetch('http://localhost:3000/posts/601ae87b716d6d141cccf9bf')
        .then(result => {

            return result.json();
        })
        .then(data => {
            console.log(data);
        })
}

function add() { 
        
    let user = {
            title: "Raí",
            description: "Parabéns",
            nome: "Euzin"
          };
          
          let response =  fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
          });         

}