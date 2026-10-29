import type { TResponseAPI } from "../lib/types/response.type"
import api from "./api"

export type TLoginPayload = {
    email: string,
    password: string
}

type TLoginResponse = {
    user: {
        name: string,
        role: string
    },
    token: string
}
export const login = async ({email, password}: TLoginPayload): Promise<TResponseAPI<TLoginResponse>> => await api.post("/v1/auth/login", {
    email: email,
    password: password
})