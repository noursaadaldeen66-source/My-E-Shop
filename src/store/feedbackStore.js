
import create from 'zustand';

const useFeedbackStore = create((set) => ({
  feedbacks: [],
  addFeedback: (feedback) =>
    set((state) => ({ feedbacks: [...state.feedbacks, { ...feedback, id: Date.now() }] })),
  updateFeedback: (id, newText) =>
    set((state) => ({
      feedbacks: state.feedbacks.map((feedback) =>
        feedback.id === id ? { ...feedback, text: newText } : feedback
      ),
    })),
  deleteFeedback: (id) =>
    set((state) => ({
      feedbacks: state.feedbacks.filter((feedback) => feedback.id !== id),
    })),
}));

export default useFeedbackStore;
