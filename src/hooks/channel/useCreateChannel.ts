import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createChannelService, type TCreateChannelPayload } from "../../services/channelService"
import { useState } from "react"

const useCreateChannel = () => {
    const initState: TCreateChannelPayload = {
        handleName: "",
        platform: ""
    }
    
    const [formState, setFormState] = useState<TCreateChannelPayload>(initState)
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: createChannelService,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['channels']})
        }
    })

    const handleClose = () => setFormState(initState)

    const handleSelect = (name: string, value: string) => {
        setFormState({...formState, [name]: value})
    }

    const handleSubmit =  (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        mutation.mutate(formState)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => setFormState({...formState, [e.target.name]: e.target.value})

    return {
        handleSubmit,
        handleChange,
        isLoading: mutation.isPending,
        handleClose,
        handleSelect,
        form: formState
    }
}

export default useCreateChannel