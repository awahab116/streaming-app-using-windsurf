import React from 'react';
import { TimeRangeProvider } from '../contexts/TimeRangeContext';
import {
  DashboardHeader,
  LiveViewersCard,
  TotalStreamsCard,
  WatchTimeCard,
  RevenueCard,
  ActiveUsersChart,
  UserSegmentsCard,
  UserEngagementCard,
  PlatformDistributionCard,
  RevenueAnalyticsCard,
  TopLiveStreamsCard
} from '../components';

import { 
  dailyActiveUsers, 
  weeklyActiveUsers, 
  monthlyActiveUsers, 
  userTypeData, 
  userEngagementData, 
  platformData, 
  revenueData, 
  topLiveStreams 
} from '../data';

const DashboardPage: React.FC = () => {
  return (
    <TimeRangeProvider>
      <div className="p-6 space-y-6 bg-gray-900 text-white min-h-screen">
        <DashboardHeader />

        {/* Key Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <LiveViewersCard 
            totalLiveViewers={112600} 
            viewersTrend="+5.2%" 
            sparklineData={dailyActiveUsers.slice(-7)} 
          />
          
          <TotalStreamsCard 
            totalStreams={1248} 
            streamsTrend="+12%" 
            sparklineData={dailyActiveUsers.slice(-7)} 
          />
          
          <WatchTimeCard 
            averageWatchTime="42 min" 
            watchTimeTrend="+8%" 
            sparklineData={dailyActiveUsers.slice(-7)} 
          />
          
          <RevenueCard 
            revenue={68000} 
            revenueTrend="-3%" 
            sparklineData={revenueData.slice(-6)} 
          />
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActiveUsersChart 
            dailyData={dailyActiveUsers} 
            weeklyData={weeklyActiveUsers} 
            monthlyData={monthlyActiveUsers} 
          />
          
          <div className="space-y-6">
            <UserSegmentsCard data={userTypeData} />
            <UserEngagementCard data={userEngagementData} />
            <PlatformDistributionCard data={platformData} />
          </div>
        </div>

        {/* Revenue Analytics */}
        <RevenueAnalyticsCard data={revenueData} />

        {/* Top Live Streams */}
        <TopLiveStreamsCard streams={topLiveStreams} />
      </div>
    </TimeRangeProvider>
  );
};

export default DashboardPage;