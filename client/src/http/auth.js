import axios from "axios";

export const register = async (user) => {
    try{
        const response = await axios({  
            method: 'post',
            url: 'http://localhost:7000/api/registration',
            data: {
                'name':user.name,
                'email': user.email,
                'password': user.password,
                'role': user.role,
                'activateLink':user.activateLink
            },
            headers: {
                'Content-Type': 'application/json'
            } 
        })
        return response.data
    }catch(e){
        console.log(e)
    }
}
