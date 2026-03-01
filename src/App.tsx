import { useState } from 'react';
import Onboarding from './components/Onboarding';
import ChildProfileSetup from './components/ChildProfileSetup';
import AiLiteracyPlan from './components/AiLiteracyPlan';
import DailyBalanceTracker from './components/DailyBalanceTracker';
import WeeklyInsights from './components/WeeklyInsights';
import LearningModules from './components/LearningModules';
import SettingsAndControls from './components/SettingsAndControls';
import Header from './components/Header';
import Navbar from './components/Navbar';

export enum AppScreen {
  ONBOARDING = 'Onboarding',
  CHILD_PROFILE_SETUP = 'ChildProfileSetup',
  AI_LITERACY_PLAN = 'AiLiteracyPlan',
  DAILY_BALANCE_TRACKER = 'DailyBalanceTracker',
  WEEKLY_INSIGHTS = 'WeeklyInsights',
  LEARNING_MODULES = 'LearningModules',
  SETTINGS_AND_CONTROLS = 'SettingsAndControls',
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.ONBOARDING);

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.ONBOARDING:
        return <Onboarding setCurrentScreen={setCurrentScreen} />;
      case AppScreen.CHILD_PROFILE_SETUP:
        return <ChildProfileSetup setCurrentScreen={setCurrentScreen} />;
      case AppScreen.AI_LITERACY_PLAN:
        return <AiLiteracyPlan setCurrentScreen={setCurrentScreen} />;
      case AppScreen.DAILY_BALANCE_TRACKER:
        return <DailyBalanceTracker setCurrentScreen={setCurrentScreen} />;
      case AppScreen.WEEKLY_INSIGHTS:
        return <WeeklyInsights setCurrentScreen={setCurrentScreen} />;
      case AppScreen.LEARNING_MODULES:
        return <LearningModules setCurrentScreen={setCurrentScreen} />;
      case AppScreen.SETTINGS_AND_CONTROLS:
        return <SettingsAndControls setCurrentScreen={setCurrentScreen} />;
      default:
        return <Onboarding setCurrentScreen={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-gray-text font-sans flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        {renderScreen()}
      </main>
      <Navbar currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </div>
  );
}
