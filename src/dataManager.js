module.exports = function(){

    let baseUrl = "https://moves-backend-a.herokuapp.com/api/"

    // Create a data base open request, named "dataBase", version 1
    let request = indexedDB.open("dataBase", 1);
    let dataBase;
   
    // Data base did NOT already exist, but now created
    request.onupgradeneeded = function() {
        // Store data base reference
        dataBase = request.result;
        // Check data base to see if objectStore exists. if not, create one
        if (!dataBase.objectStoreNames.contains('tokenObjectStore')) {
            dataBase.createObjectStore('tokenObjectStore',{autoIncrement:true});
        } 
    };
   
    request.onsuccess = function() {
        // Store data base reference
        dataBase = request.result;
        // Make a transaction object that has "read" access to the tokenObjectStore
        let transaction = dataBase.transaction("tokenObjectStore", "readonly");
        // Make a reference to the tokenObjectStore
        let tokenObjectStore = transaction.objectStore("tokenObjectStore");
        //Make a get request to the objectStore, to get the value for key 1
        let getRequest = tokenObjectStore.get(1);
        getRequest.onsuccess = function(){
            if (getRequest.result){
                localStorage.setItem("token", getRequest.result);
            }
        }
        getRequest.onerror = function(){
            console.log("ERROR: Could not retrive token")
        } 
    }
    request.onerror = function(){
        console.log("ERROR: could not open data base")
    }

    return {

        getAllPersonnel(){
            let token = localStorage.getItem("token")
            if(token){
                 return fetch(baseUrl + "personnel", {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': ("BEARER " + token)
                    }
                })
                .then(res => res.json())
                .then(data => {
                    return Promise.resolve(data)
                })
                .catch(error => {
                    console.log("ERROR: " + error)
                })
            }
        },

        getAllAnnouncement(){
            let token = localStorage.getItem("token")
            if(token){
                return fetch(baseUrl + "announcement/active", {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': ("BEARER " + token)
                    }
                })
                .then(res => res.json())
                .then(data => {
                    return Promise.resolve(data)
                })
                .catch(error => {
                    console.log("Error: " + error)
                });
            }
        },

        logIn(userName, password){
            return fetch(baseUrl + "useraccounts/login", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'userName': userName,
                    'password': password
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.token){
                    this.saveToken(data.token)
                    return true;
                } else {
                    return false;
                }
            })
            .catch(error => {
                console.log("Error: " + error)
            });
        },

        // Not using this anywhere
        getTokenFromIDB() {
            return new Promise((resolve, reject)=>{
                request.onsuccess = function(event){
                    let dataBase = request.result
                    // Make a transaction object that has "read and write" access to the tokenObjectStore
                    let transaction = dataBase.transaction("tokenObjectStore", "readonly");
                    // Make a reference to the tokenObjectStore
                    let tokenObjectStore = transaction.objectStore("tokenObjectStore");
                    //Make a get request to the objectStore, to get the value for key 1
                    let getRequest = tokenObjectStore.get(1);
                    getRequest.onsuccess = function(){
                        resolve(getRequest.result)
                    }
                    getRequest.onerror = function(){
                        console.log("ERROR: Could not get token")
                        reject()
                    }           
                }
            })
        },
        
        saveToken(token){
            if (token !== ""){
                // Make a transaction object that has "read and write" access to the tokenObjectStore
                let transaction = dataBase.transaction("tokenObjectStore", "readwrite");
                // Make a reference to the tokenObjectStore
                let tokenObjectStore = transaction.objectStore("tokenObjectStore");
                // Store the token in objectStore, with key 1
                tokenObjectStore.put(token, 1)
                // Store the token in localStorage, with key "token"
                localStorage.setItem("token", token);
            }
        },
    
        tokenIsValid(){
            // Get token from localStorage if one exists, if not return null
            let token = localStorage.getItem("token")
            if (token !== null) {
                const _tokenExpireDate = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).exp;
                const _currentTime = Math.floor(Date.now() / 1000);
                if (_tokenExpireDate > _currentTime) { return true } else { return false };
            } else {
                return false
            }
        },
    
        removeToken(){
            // Make a transaction object that has "read and write" access to the tokenObjectStore
            let transaction = dataBase.transaction("tokenObjectStore", "readwrite");
            // Make a reference to the tokenObjectStore
            let tokenObjectStore = transaction.objectStore("tokenObjectStore");
            // Delete the token in objectStore, with key 1
            tokenObjectStore.delete(1)
            // Remove the token in localStorage, with key "token"
            localStorage.removeItem("token")
        }

    }

}