import { useMutation } from "@tanstack/react-query"
import { deleteChannelService } from "../../services/channelService"

const useDeleteChannel = () => {
    const mutation = useMutation({
        mutationKey: ['channels'],
        mutationFn: deleteChannelService
    })

    return {
        isLoading: mutation.isPending
    }
}

export default useDeleteChannel