export const Validations = (email,password)=>{
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(password);
    
    if(isEmailValid===false){
        return "Email is not valid";
    }
    else if(isPasswordValid===false){
        return "Password is not valid"
    }
    else{
        return null;
    }

}