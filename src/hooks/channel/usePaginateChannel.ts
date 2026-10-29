import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { paginateChannelService } from "../../services/channelService"
import { useState } from "react"

const usePaginateChannel = (page: number) => {
    const [currentPage, setCurrentPage] = useState(page)
    
    const query = useQuery({
        queryKey: ['channels', currentPage],
        queryFn: () => paginateChannelService(currentPage),
        placeholderData: keepPreviousData
    })

    return {
        ...query,
        setPage: setCurrentPage
    }
}

export default usePaginateChannel