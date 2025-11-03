
import create from 'zustand';

const dailyGoal = 10000;

const useFitnessStore = create((set, get) => ({
  activities: [],
  addActivity: (activity) =>
    set((state) => ({ activities: [...state.activities, { ...activity, id: Date.now() }] })),
  getDailyProgress: () => {
    const { activities } = get();
    const today = new Date().toLocaleDateString();
    return activities
      .filter((activity) => new Date(activity.id).toLocaleDateString() === today)
      .reduce((total, activity) => total + (activity.steps || 0), 0);
  },
  hasMetGoal: () => {
    return get().getDailyProgress() >= dailyGoal;
  },
  dailyGoal,
}));

export default useFitnessStore;
