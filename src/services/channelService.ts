import api from "./api";

export type TPaginateChannelResponse = {
    data: {
        id: number,
        platform: string,
        handleName: string,
        createdAt: string
    }[],
    metadata: {
        currentPage: number,
        nextPage: number,
        prevPage: number,
        isFirstPage: boolean,
        isLastPage: boolean,
        pages: number[],
        pageCount: number
    }
}
export const paginateChannelService = async (page: number): Promise<TPaginateChannelResponse> => await api.get(`/v1/channels?page=${page}`)
export const deleteChannelService = async (id: number): Promise<void> => await api.delete(`/v1/channels/${id}`)