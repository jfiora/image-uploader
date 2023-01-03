import create from 'zustand';

const useImageStore = create((set) => ({
    photo: '',
    addImage: (img) => set((state) => ({ photo: img })),
    deleteImage: () => set({ photo: '' }),
}));

export default useImageStore;
