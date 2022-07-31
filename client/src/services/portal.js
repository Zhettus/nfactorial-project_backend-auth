import axios from 'axios'

export default class Portal 
{
    static async login(user)
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

    static async register(user)
    {
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
    static async logout()
    {
        try{
            const response = await axios({
                method: 'post',
                url: 'http://localhost:7000/api/logout',
                data: {
                },
                headers: {
                  'Content-Type': 'application/json'
                } 
            })
            console.log(response.data)

            localStorage.removeItem('token')
                return response.data
        }catch(e){
            console.log(e)
        }
    }
    
    
    static async getUsers(user)
    {
        
        try{
            console.log("GET USERS")
            const localToken=localStorage.getItem('token') 
            console.log(localToken,"GET")
            const response = await axios({
                method: 'get',
                url: 'http://localhost:7000/api/users',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localToken}` 

                } 
            })
            console.log(response.data)
            return response.data
        }catch(e){
            console.log(e)
        }
    }
}