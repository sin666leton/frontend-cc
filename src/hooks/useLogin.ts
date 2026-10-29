import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { login, type TLoginPayload } from "../services/authService"
import { useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"

const useLogin = () => {
    const initState = {
        email: "",
        password: ""
    }
    const [formState, setFormState] = useState<TLoginPayload>(initState)
    const [errorMessage, setErrorMessage] = useState<null|string>(null)
    const navigate = useNavigate()
        
    const mutation = useMutation({
        mutationFn: login,
        onError: (err: AxiosError) => {
            setFormState(prev => ({...prev, password: ""}))
            switch (err.status) {
                case 401:
                    setErrorMessage("Email atau passwordnya salah nih..")
                    break
            }
        },
        onSuccess: (result) => {
            localStorage.setItem('user', result.data.token)

            setFormState(initState)

            switch (result.data.user.role) {
                case "creator":
                    navigate("/creator/dashboard")
                    break
                default:
                    navigate("/dashboard")
            }
        }
    })

    const handleSubmit =  (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        mutation.mutate(formState)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        if (errorMessage) setErrorMessage(null)

        setFormState({...formState, [e.target.name]: e.target.value})
    }

    return {
        form: formState,
        errorMessage,
        handleSubmit,
        handleChange,
        isLoading: mutation.isPending
    }

    
}

export default useLogin