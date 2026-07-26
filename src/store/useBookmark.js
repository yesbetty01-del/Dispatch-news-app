import { create } from "zustand";
import { setItems, getItems, removeItems } from '../utils/storage';

const useBookmark = create((set, get)=> ({
    bookmarks: [],
    setBookmarks: (bookmarks) => set({bookmarks: bookmarks}),
    loadBookmarks: async () => {
        const storedBookmarks = await getItems("bookmarks");
        if(storedBookmarks) {
            set({ bookmarks: JSON.parse(storedBookmarks)});
        }
    },
    isBookmarked: (articleId) => {
        return get().bookmarks.some((article) => article._id === articleId);
    },
    addBookmark: async (article) => {
        const updatedBookmarks = [...get().bookmarks, article];
        set({ bookmarks: updatedBookmarks });
        await setItems('bookmarks', JSON.stringify(updatedBookmarks));
    },
    removeBookmark: async (articleId) => {
        const updatedBookmarks = get().bookmarks.filter((article) => (article._id !== articleId));
        set({ bookmarks: updatedBookmarks });
        await removeItems('bookmarks')
        await setItems('bookmarks', JSON.stringify(updatedBookmarks));
    }
}))

export default useBookmark;