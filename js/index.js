let signUpNameInput = document.getElementById("signUpName")
let signUpEmailInput = document.getElementById("signUpEmail")
let signUpPasswordInput = document.getElementById("signUpPassword")
let signUpBtn = document.getElementById("signUpBtn")
let emptyAlertElement = document.getElementById('alert-empty')
let successAlertElement = document.getElementById('alert-success')
let alertRepeatElement = document.getElementById("alert-repeat")
let alertNameElement = document.getElementById("alert-name")
let dataList = [];



let usernameValue = localStorage.getItem('hambozo');
if (usernameValue) {
    document.getElementById('username').innerHTML = 'welcome ' + usernameValue;
}




if (localStorage.getItem("dataContainer") !== null) {
    dataList = JSON.parse(localStorage.getItem("dataContainer"));

}


function signUp() {

    if (!isEmailExist() && validateName() == true && validateEmail() ==true && validatePass()==true) {
        let user = {
            name: signUpNameInput.value,
            email: signUpEmailInput.value,
            password: signUpPasswordInput.value

        }
        dataList.push(user);
        localStorage.setItem("dataContainer", JSON.stringify(dataList))

        signUpNameInput.classList.remove('is-invalid')
        signUpEmailInput.classList.remove('is-invalid')



        successAlertElement.classList.remove("d-none")
        emptyAlertElement.classList.add("d-none")

    }
    else {
        alertRepeatElement.classList.remove("d-none")
        successAlertElement.classList.add("d-none")

    }



    if (signUpNameInput.value == "" || signUpEmailInput.value == '' || signUpPasswordInput.value == '') {
        emptyAlertElement.classList.remove("d-none")
        alertNameElement.classList.add("d-none")
        signUpNameInput.classList.remove("is-invalid")
        alertRepeatElement.classList.add("d-none")

    }
    else {
        emptyAlertElement.classList.add("d-none")

    }
    clearInputs();

}
   

if (signUpBtn !== null) {

    signUpBtn.addEventListener("click", signUp);


    function isEmailExist() {
        for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].email.toLowerCase() == signUpEmailInput.value.toLowerCase()) {
                return true;

            }
        }
    }

    function validateName() {

        let text = signUpNameInput.value;
        let regex = /^\w{3,}(\s+\w+)*$/

        let alertNameElement = document.getElementById('alert-name')

        if (regex.test(text) == true) {
            signUpNameInput.classList.add('is-valid')
            signUpNameInput.classList.remove('is-invalid')
            alertNameElement.classList.add('d-none')
            return true;

        }
        else {
            signUpNameInput.classList.add('is-invalid')
            signUpNameInput.classList.remove('is-valid')
            alertNameElement.classList.remove('d-none')
            return false;
        }

    }
    // signUpNameInput.addEventListener('input', validateName)



    function validateEmail() {
        let text = signUpEmailInput.value;
        let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/



        let alertEmailElement = document.getElementById('alert-email')

        if (regex.test(text) == true) {
            signUpEmailInput.classList.add('is-valid')
            signUpEmailInput.classList.remove('is-invalid')
            alertEmailElement.classList.add('d-none')
            return true;

        }
        else {
            signUpEmailInput.classList.add('is-invalid')
            signUpEmailInput.classList.remove('is-valid')
            alertEmailElement.classList.remove('d-none')
            return false;
        }


    }
    // signUpEmailInput.addEventListener('input', validateEmail)

    function validatePass() {
        let text = signUpPasswordInput.value;
        let regex = /^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9]).{8,}$/

        let signUpPasswordAlert = document.getElementById("signUpPasswordAlert")

        if (regex.test(text) == true) {
            signUpPasswordInput.classList.add('is-valid')
            signUpPasswordInput.classList.remove('is-invalid')
            signUpPasswordAlert.classList.add('d-none')
            return true;

        }
        else {
            signUpPasswordInput.classList.add('is-invalid')
            signUpPasswordInput.classList.remove('is-valid')
            signUpPasswordAlert.classList.remove('d-none')
            return false;
        }


    }
    // signUpPasswordInput.addEventListener('input', validatePass)


}


function clearInputs() {
    signUpNameInput.value = "";
    signUpEmailInput.value = "";
    signUpPasswordInput.value = "";
  
}




/////////////////////////////////////////////////log in ///////////////////////////////////////////////////////////////////////


let logInEmailInput = document.getElementById("logInEmail")
let logInPasswordInput = document.getElementById("logInPassword")


let logInBtn = document.getElementById("logInBtn")
let incorrect = document.getElementById("incorrect")



if (logInBtn !== null) {
    logInBtn.addEventListener('click', logIn)


    function logIn() {
        


        if (logInEmailInput.value == "" || logInPasswordInput.value == "") {
            incorrect.classList.add('d-none')
            emptyAlertElement.classList.remove("d-none")
return;
        }


        let email = logInEmailInput.value;
        let password = logInPasswordInput.value




let found = false;
        for (let i = 0; i < dataList.length; i++) {

            if (dataList[i].email.toLowerCase() === email.toLowerCase() && dataList[i].password.toLowerCase() === password.toLowerCase()) {
                localStorage.setItem("hambozo", dataList[i].name)
                window.location.href = './welcome.html'

                found= true;

            }
       

        }
        if(!found){
            logInEmailInput.classList.add("is-invalid");
            logInPasswordInput.classList.add("is-invalid");
            incorrect.classList.remove("d-none");
            emptyAlertElement.classList.add("d-none");
        }else {
            incorrect.classList.add("d-none"); 
        }

    }
    clearInputsIn()
}


    function validateEmailIn() {
        let text = logInEmailInput.value;
        let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/



        let logInEmailAlert = document.getElementById("logInEmailAlert")

        if (regex.test(text) == true) {
            logInEmailInput.classList.add('is-valid')
            logInEmailInput.classList.remove('is-invalid')
            logInEmailAlert.classList.add('d-none')
            return true;

        }
        else {
            logInEmailInput.classList.add('is-invalid')
            logInEmailInput.classList.remove('is-valid')
            logInEmailAlert.classList.remove('d-none')
            return false;
        }


    }

    function validatePassIn() {
        let text = logInPasswordInput.value;
        let regex = /^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9]).{8,}$/

        let logInPassAlert = document.getElementById("logInPassAlert")

        if (regex.test(text) == true) {
            logInPasswordInput.classList.add('is-valid')
            logInPasswordInput.classList.remove('is-invalid')
            logInPassAlert.classList.add('d-none')
            // console.log("dgdgdg");
            return true;

        }
        else {
            logInPasswordInput.classList.add('is-invalid')
            logInPasswordInput.classList.remove('is-valid')
            logInPassAlert.classList.remove('d-none')
            // log("hhhh")
            return false;
        }


    }

    function logout() {
        localStorage.removeItem('loginData')
    }



    function clearInputsIn() {
       logInEmailInput.value = ''
       logInPasswordInput.value = ''
      
    }




















































































