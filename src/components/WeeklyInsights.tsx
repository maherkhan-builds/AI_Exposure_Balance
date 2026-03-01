import { AppScreen } from '../App';

interface WeeklyInsightsProps {
  setCurrentScreen: (screen: AppScreen) => void;
}

export default function WeeklyInsights({ setCurrentScreen }: WeeklyInsightsProps) {
  return (
    <div className="p-4 bg-dark-card rounded-lg shadow-lg border border-neon-blue">
      <h2 className="text-2xl font-display font-semibold text-neon-blue mb-4">Weekly Insights</h2>
      <p className="text-gray-text mb-4">Summary of your child's weekly AI exposure.</p>
      <button
        onClick={() => setCurrentScreen(AppScreen.LEARNING_MODULES)}
        className="bg-neon-yellow text-dark-bg font-bold px-4 py-2 rounded-md shadow-lg hover:bg-opacity-80 transition-all border border-neon-green"
      >
        <span className="font-display">Next: Learning Modules</span>
      </button>
    </div>
  );
}
