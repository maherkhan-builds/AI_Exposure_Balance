import { AppScreen } from '../App';

interface LearningModulesProps {
  setCurrentScreen: (screen: AppScreen) => void;
}

export default function LearningModules({ setCurrentScreen }: LearningModulesProps) {
  return (
    <div className="p-4 bg-dark-card rounded-lg shadow-lg border border-neon-pink">
      <h2 className="text-2xl font-display font-semibold text-neon-pink mb-4">Learning Modules</h2>
      <p className="text-gray-text mb-4">Explore AI literacy learning modules.</p>
      <button
        onClick={() => setCurrentScreen(AppScreen.SETTINGS_AND_CONTROLS)}
        className="bg-neon-green text-dark-bg font-bold px-4 py-2 rounded-md shadow-lg hover:bg-opacity-80 transition-all border border-neon-blue"
      >
        <span className="font-display">Next: Settings & Controls</span>
      </button>
    </div>
  );
}
