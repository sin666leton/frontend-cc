const useCreateChannel = () => {
    const initState: TUserPayload = {
            handleName: "",
            platform: ""
        }
        
        const [formState, setFormState] = useState<TUserPayload>(initState)
        const queryClient = useQueryClient()
    
        const mutation = useMutation({
            mutationFn: createUserService,
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ['users']})
    
    
            }
        })
    
        const handleClose = () => setFormState(initState)
    
        const handleSelect = (name: string, value: string) => {
            const val = value.toLowerCase() === "active"
    
            setFormState({...formState, [name]: val})
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
            handleSelect
        }
}