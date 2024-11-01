import React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import Header from '../components/layout/Header';
import Sidebar from '../components/navigation/Sidebar';
import NavigationTabs from '../components/navigation/NavigationTabs';
import ProfileCard from '../components/cards/ProfileCard';
import ActionCard from '../components/cards/ActionCard';
import SearchInput from '../components/inputs/SearchInput';
import StatCard from '../components/displays/StatCard';
import AlertBanner from '../components/displays/AlertBanner';
import SettingsForm from '../components/forms/SettingsForm';
import Panel from '../components/layout/Panel';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main sticker sheet content */}
      <div className="p-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">NextUI Component Sticker Sheet</h1>
          <p className="text-gray-600">A comprehensive collection of essential UI components</p>
        </div>

        {/* Navigation Components */}
        <section>
          <h1 className="text-3xl font-bold mb-8 pb-2 border-b">Navigation Components</h1>
          <div className="grid gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Sidebar Navigation</h2>
              <div className="w-64 border rounded-lg overflow-hidden">
                <Sidebar />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Tabs Navigation</h2>
              <NavigationTabs />
            </div>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h1 className="text-3xl font-bold mb-8 pb-2 border-b">Cards</h1>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Profile Card</h2>
              <ProfileCard 
                name="Alex Johnson"
                role="Senior Developer"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Action Card</h2>
              <ActionCard 
                title="Project Settings"
                description="Configure your project settings and preferences."
              />
            </div>
          </div>
        </section>

        {/* Rest of your sections... */}
      </div>
    </div>
  );
}