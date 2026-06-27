import { create } from "zustand";
import { setItems } from '../utils/storage';

const useBookmark = create((set, get)=> ({
    bookmarks: [],
    addBookmark: async (bookmark) => {
        const updatedBookmarks = [...get().bookmarks, bookmark];
        set({ bookmarks: updatedBookmarks });
        await setItems('bookmarks', JSON.stringify(updatedBookmarks));
    },
    removeBookmark: async (bookmarkId) => {
        const updatedBookmarks = get().bookmarks.filter((b) => (b.id !== bookmarkId));
        set({ bookmarks: updatedBookmarks });
        await setItems('bookmarks', JSON.stringify(updatedBookmarks));
    }
}))

export default useBookmark;