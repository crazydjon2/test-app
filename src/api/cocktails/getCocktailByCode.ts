import httpClient from "../http-client"
import type { CODES } from "./cocktailCodes"

export const getCocktailtsByCode = async (code: CODES) => {
    return await httpClient.get(`/search.php?s=${code}`)
        .then((res) => {
            return res
        })
        .catch((e) => {
            throw e
        })
}