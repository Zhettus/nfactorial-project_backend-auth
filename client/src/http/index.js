import axios from "axios";

export const login = async (user) => 
    {
        try{
            const response = await axios({
                method: 'post',
                url: 'http://localhost:7000/api/login',
                data: {
                    'email': user.email,
                    'password': user.password,
                },
                headers: {
                  'Content-Type': 'application/json'
                } 
            })
            console.log(response.data)
            console.log(response.data.user.name)
            return response.data
            
        }catch(e){
            console.log(e)
        }
    }
