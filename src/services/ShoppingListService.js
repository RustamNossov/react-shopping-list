import { useHttp } from "../hooks/http.hook";

const useShoppingListService = () => {

    const { loading, request, error, clearError, errorRedirect} = useHttp();
    const _apiBase = 'http://localhost:3001/'; 

    

    // const getAllLists = async () => {
    //     const res = await request(`${_apiBase}lists`)
    //     return res
    // }
    

    const getAList = async(name) => {
        const res = await request(`${_apiBase}${name}`)
        return res
    }

    // const putData = async(name,  body) => {
        
    //     const res = await request(`${_apiBase}${name}`, 'PUT', body)
    //     return res
    // }

    const postData = async(name, body) => {
        
        const res = await request(`${_apiBase}${name}`, 'POST', body)
        return res
    }

    const patchData = async(name, body) => {
        
        const res = await request(`${_apiBase}${name}`, 'PATCH', body)
        return res
    }

    const deleteData = async(name) => {
        
        const res = await request(`${_apiBase}${name}`, 'DELETE')
        return res
    }

    return {loading, error, errorRedirect, clearError,  getAList, postData, patchData, deleteData}
}
export default useShoppingListService;