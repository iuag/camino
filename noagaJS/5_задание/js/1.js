let existedUserLogin = "Hai_Vai";

let existedUserPassword = Hai_Vai;

userLogin = prompt("Введите логин");
userLogin = userLogin.trim();

userPassword = prompt("Введите пароль");
userPassword = Number(userPassword.trim());

if(existedUserLogin === userLogin && existedUserPassword === userPassword){
    alert(`Добро пожаловать, ${existedUserLogin}`);
}else{
    alert(`Логин и (или) Пароль введены неверно!`);
}