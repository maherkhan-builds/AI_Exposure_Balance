import { AppScreen } from '../App';

interface SettingsAndControlsProps {
  setCurrentScreen: (screen: AppScreen) => void;
}

export default function SettingsAndControls({ setCurrentScreen }: SettingsAndControlsProps) {
  return (
    <div className="p-4 bg-dark-card rounded-lg shadow-lg border border-neon-yellow">
      <h2 className="text-2xl font-display font-semibold text-neon-yellow mb-4">Settings & Controls</h2>
      <p className="text-gray-text mb-4">Manage app settings and controls here.</p>
      <button
        onClick={() => setCurrentScreen(AppScreen.ONBOARDING)}
        className="bg-neon-blue text-dark-bg font-bold px-4 py-2 rounded-md shadow-lg hover:bg-opacity-80 transition-all border border-neon-green"
      >
        <span className="font-display">Back to Onboarding</span>
      </button>
    </div>
  );
}
