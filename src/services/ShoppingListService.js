import { useHttp } from "../hooks/http.hook";

const useShoppingListService = () => {

    const { loading, request, error, clearError, errorRedirect} = useHttp();
    const _apiBase = 'http://localhost:3001/'; 

    const getAList = async(name) => {
        const res = await request(`${_apiBase}${name}`)
        return res
    }

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