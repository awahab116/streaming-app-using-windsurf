// React is automatically imported with the JSX transform
import { 
  Line, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell, AreaChart, Area,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ReferenceLine,
  ComposedChart, Brush
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

// Enhanced mock data for advanced charts
const dailyActiveUsers = [
  { name: 'Mon', users: 4000, newUsers: 2400, returningUsers: 1600, mobileUsers: 2200, desktopUsers: 1800 },
  { name: 'Tue', users: 3000, newUsers: 1398, returningUsers: 1602, mobileUsers: 1800, desktopUsers: 1200 },
  { name: 'Wed', users: 5000, newUsers: 2800, returningUsers: 2200, mobileUsers: 3100, desktopUsers: 1900 },
  { name: 'Thu', users: 2780, newUsers: 908, returningUsers: 1872, mobileUsers: 1680, desktopUsers: 1100 },
  { name: 'Fri', users: 1890, newUsers: 800, returningUsers: 1090, mobileUsers: 1190, desktopUsers: 700 },
  { name: 'Sat', users: 2390, newUsers: 1200, returningUsers: 1190, mobileUsers: 1590, desktopUsers: 800 },
  { name: 'Sun', users: 3490, newUsers: 2000, returningUsers: 1490, mobileUsers: 2290, desktopUsers: 1200 },
];

const weeklyActiveUsers = [
  { name: 'Week 1', users: 24000, newUsers: 9800, returningUsers: 14200, mobileUsers: 14400, desktopUsers: 9600 },
  { name: 'Week 2', users: 21000, newUsers: 8400, returningUsers: 12600, mobileUsers: 12600, desktopUsers: 8400 },
  { name: 'Week 3', users: 32000, newUsers: 16000, returningUsers: 16000, mobileUsers: 19200, desktopUsers: 12800 },
  { name: 'Week 4', users: 28000, newUsers: 11200, returningUsers: 16800, mobileUsers: 16800, desktopUsers: 11200 },
];

const monthlyActiveUsers = [
  { name: 'Jan', users: 95000, newUsers: 38000, returningUsers: 57000, mobileUsers: 57000, desktopUsers: 38000 },
  { name: 'Feb', users: 85000, newUsers: 34000, returningUsers: 51000, mobileUsers: 51000, desktopUsers: 34000 },
  { name: 'Mar', users: 102000, newUsers: 45900, returningUsers: 56100, mobileUsers: 61200, desktopUsers: 40800 },
  { name: 'Apr', users: 99000, newUsers: 39600, returningUsers: 59400, mobileUsers: 59400, desktopUsers: 39600 },
  { name: 'May', users: 126000, newUsers: 63000, returningUsers: 63000, mobileUsers: 75600, desktopUsers: 50400 },
  { name: 'Jun', users: 118000, newUsers: 53100, returningUsers: 64900, mobileUsers: 70800, desktopUsers: 47200 },
];

// Enhanced user type data with more segments
const userTypeData = [
  { name: 'New Users', value: 2400 },
  { name: 'Returning Users', value: 4567 },
  { name: 'Inactive Users', value: 1398 },
];

// Enhanced user engagement data
const userEngagementData = [
  { subject: 'Watch Time', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chat Activity', A: 98, B: 130, fullMark: 150 },
  { subject: 'Subscriptions', A: 86, B: 130, fullMark: 150 },
  { subject: 'Donations', A: 99, B: 100, fullMark: 150 },
  { subject: 'Clip Creation', A: 85, B: 90, fullMark: 150 },
  { subject: 'Social Sharing', A: 65, B: 85, fullMark: 150 },
];


// Platform distribution data
const platformData = [
  { name: 'Mobile', value: 58 },
  { name: 'Desktop', value: 32 },
  { name: 'Smart TV', value: 7 },
  { name: 'Console', value: 3 },
];

// Enhanced revenue data
const revenueData = [
  { name: 'Jan', subscriptions: 45000, donations: 12000, ads: 8000, merchandise: 5000 },
  { name: 'Feb', subscriptions: 52000, donations: 14000, ads: 9000, merchandise: 6000 },
  { name: 'Mar', subscriptions: 49000, donations: 13500, ads: 8500, merchandise: 5500 },
  { name: 'Apr', subscriptions: 60000, donations: 16000, ads: 10000, merchandise: 7000 },
  { name: 'May', subscriptions: 72000, donations: 19000, ads: 12000, merchandise: 8500 },
  { name: 'Jun', subscriptions: 68000, donations: 18000, ads: 11500, merchandise: 8000 },
];

// Color schemes for charts
const COLORS = {
  primary: ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c'],
  secondary: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6B8B'],
  tertiary: ['#8884d8', '#4CAF50', '#FF5722', '#03A9F4', '#9C27B0'],
  gradient: ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c'],
  dark: ['#2D3748', '#4A5568', '#718096', '#A0AEC0', '#CBD5E0'],
};

// Top live streams data
const topLiveStreams = [
  { id: 1, title: 'Gaming Championship Finals', viewers: 45600, thumbnail: 'https://placehold.co/300x200/9333ea/ffffff?text=Gaming+Finals', category: 'Gaming', trending: true, growth: '+15%' },
  { id: 2, title: 'Music Festival Live', viewers: 32400, thumbnail: 'https://placehold.co/300x200/3b82f6/ffffff?text=Music+Festival', category: 'Music', trending: true, growth: '+8%' },
  { id: 3, title: 'Cooking Masterclass', viewers: 18900, thumbnail: 'https://placehold.co/300x200/ef4444/ffffff?text=Cooking+Show', category: 'Food', trending: false, growth: '+2%' },
  { id: 4, title: 'Tech Talk: AI Innovations', viewers: 15700, thumbnail: 'https://placehold.co/300x200/10b981/ffffff?text=Tech+Talk', category: 'Technology', trending: true, growth: '+12%' },
];

const DashboardPage = () => {
  const totalLiveViewers = 112600;
  const viewersTrend = '+5.2%';

  return (
    <div className="p-6 space-y-6 bg-gray-900 text-white min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Analytics Dashboard</h1>
          <p className="text-gray-400 mt-1">Comprehensive insights for your streaming platform</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300">{new Date().toLocaleString()}</span>
          </div>
          <select className="bg-gray-800/60 backdrop-blur-sm text-gray-300 border border-gray-700 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Year to date</option>
            <option>Custom range</option>
          </select>
        </div>
      </div>

      {/* Key Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Live Viewers Card with Sparkline */}
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none col-span-1 overflow-hidden relative group hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
          <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-300 text-sm font-medium">Live Viewers</CardTitle>
              <div className="p-1.5 rounded-full bg-purple-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {totalLiveViewers.toLocaleString()}
                </div>
                <div className="flex items-center mt-1">
                  <div className={`flex items-center text-sm ${viewersTrend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {viewersTrend.startsWith('+') ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                      </svg>
                    )}
                    {viewersTrend} from last week
                  </div>
                </div>
              </div>
              <div className="h-16 w-24">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailyActiveUsers.slice(-7)}>
                    <defs>
                      <linearGradient id="colorViewers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} fillOpacity={1} fill="url(#colorViewers)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Streams Card with Sparkline */}
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none col-span-1 overflow-hidden relative group hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300">
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-300 text-sm font-medium">Total Streams</CardTitle>
              <div className="p-1.5 rounded-full bg-blue-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">1,248</div>
                <div className="flex items-center mt-1">
                  <div className="flex items-center text-sm text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    +12% from last month
                  </div>
                </div>
              </div>
              <div className="h-16 w-24">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailyActiveUsers.slice(-7)}>
                    <defs>
                      <linearGradient id="colorStreams" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="newUsers" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorStreams)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Watch Time Card with Sparkline */}
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none col-span-1 overflow-hidden relative group hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300">
          <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-300 text-sm font-medium">Avg. Watch Time</CardTitle>
              <div className="p-1.5 rounded-full bg-green-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">42 min</div>
                <div className="flex items-center mt-1">
                  <div className="flex items-center text-sm text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    +8% from last month
                  </div>
                </div>
              </div>
              <div className="h-16 w-24">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailyActiveUsers.slice(-7)}>
                    <defs>
                      <linearGradient id="colorWatchTime" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="mobileUsers" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorWatchTime)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Card with Sparkline */}
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none col-span-1 overflow-hidden relative group hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
          <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-300 text-sm font-medium">Subscription Revenue</CardTitle>
              <div className="p-1.5 rounded-full bg-amber-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">$68,000</div>
                <div className="flex items-center mt-1">
                  <div className="flex items-center text-sm text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                    </svg>
                    -3% from last month
                  </div>
                </div>
              </div>
              <div className="h-16 w-24">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData.slice(-6)}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="subscriptions" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Users Chart - Enhanced with stacked area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none overflow-hidden">
          <CardHeader className="border-b border-gray-700/50 pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Active Users</CardTitle>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>New</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Returning</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="daily" className="w-full">
              <div className="px-6 pt-4">
                <TabsList className="w-full grid grid-cols-3 bg-gray-800/50 backdrop-blur-sm p-1 rounded-lg">
                  <TabsTrigger value="daily" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white rounded-md">Daily</TabsTrigger>
                  <TabsTrigger value="weekly" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white rounded-md">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white rounded-md">Monthly</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="daily" className="h-[400px] mt-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailyActiveUsers}
                    margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorNewUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorReturningUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                    <XAxis dataKey="name" stroke="#888" axisLine={false} tickLine={false} />
                    <YAxis stroke="#888" axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(30, 30, 30, 0.8)', backdropFilter: 'blur(4px)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`${value.toLocaleString()}`, '']}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Legend verticalAlign="top" height={36} iconType="circle" />
                    <Area 
                      type="monotone" 
                      dataKey="returningUsers" 
                      name="Returning Users"
                      stackId="1" 
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorReturningUsers)" 
                      animationDuration={1500}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="newUsers" 
                      name="New Users"
                      stackId="1" 
                      stroke="#8884d8" 
                      fillOpacity={1} 
                      fill="url(#colorNewUsers)" 
                      animationDuration={1500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="weekly" className="h-[400px] mt-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyActiveUsers}
                    margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorNewUsersWeekly" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorReturningUsersWeekly" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                    <XAxis dataKey="name" stroke="#888" axisLine={false} tickLine={false} />
                    <YAxis stroke="#888" axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(30, 30, 30, 0.8)', backdropFilter: 'blur(4px)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`${value.toLocaleString()}`, '']}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Legend verticalAlign="top" height={36} iconType="circle" />
                    <Area 
                      type="monotone" 
                      dataKey="returningUsers" 
                      name="Returning Users"
                      stackId="1" 
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorReturningUsersWeekly)" 
                      animationDuration={1500}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="newUsers" 
                      name="New Users"
                      stackId="1" 
                      stroke="#8884d8" 
                      fillOpacity={1} 
                      fill="url(#colorNewUsersWeekly)" 
                      animationDuration={1500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="monthly" className="h-[400px] mt-0">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={monthlyActiveUsers}
                    margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorNewUsersMonthly" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorReturningUsersMonthly" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                    <XAxis dataKey="name" stroke="#888" axisLine={false} tickLine={false} />
                    <YAxis stroke="#888" axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(30, 30, 30, 0.8)', backdropFilter: 'blur(4px)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`${value.toLocaleString()}`, '']}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Legend verticalAlign="top" height={36} iconType="circle" />
                    <Area 
                      type="monotone" 
                      dataKey="returningUsers" 
                      name="Returning Users"
                      stackId="1" 
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorReturningUsersMonthly)" 
                      animationDuration={1500}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="newUsers" 
                      name="New Users"
                      stackId="1" 
                      stroke="#8884d8" 
                      fillOpacity={1} 
                      fill="url(#colorNewUsersMonthly)" 
                      animationDuration={1500}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      name="Total Users"
                      stroke="#10b981" 
                      strokeWidth={3} 
                      dot={{ r: 4, fill: '#10b981', stroke: '#10b981', strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }}
                    />
                    <Brush dataKey="name" height={30} stroke="#8884d8" fill="rgba(30, 30, 30, 0.4)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* User Engagement Dashboard */}
        <div className="space-y-6">
          {/* New vs Returning Users - Enhanced Donut Chart */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none overflow-hidden">
            <CardHeader className="border-b border-gray-700/50 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">User Segments</CardTitle>
                <div className="flex items-center gap-2">
                  <select className="bg-gray-800/60 text-xs backdrop-blur-sm text-gray-300 border border-gray-700 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <defs>
                      {userTypeData.map((_entry, index) => (
                        <linearGradient key={`gradient-${index}`} id={`colorSegment${index}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={COLORS.secondary[index]} stopOpacity={1}/>
                          <stop offset="100%" stopColor={COLORS.secondary[index]} stopOpacity={0.7}/>
                        </linearGradient>
                      ))}
                    </defs>
                    <Pie
                      data={userTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={90}
                      cornerRadius={8}
                      paddingAngle={4}
                      dataKey="value"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth={2}
                    >
                      {userTypeData.map((_, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={`url(#colorSegment${index})`} 
                          className="drop-shadow-xl hover:opacity-80 transition-opacity duration-300"
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 30, 30, 0.8)', 
                        backdropFilter: 'blur(4px)', 
                        borderRadius: '8px', 
                        border: '1px solid rgba(255, 255, 255, 0.1)', 
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' 
                      }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`${value.toLocaleString()} users`, '']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-center gap-6 mt-4">
                {userTypeData.map((entry, index) => (
                  <div key={`legend-${index}`} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS.secondary[index] }}></div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-300">{entry.name}</span>
                      <span className="text-xs text-gray-400">{((entry.value / userTypeData.reduce((acc, curr) => acc + curr.value, 0)) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Engagement Radar Chart */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none overflow-hidden">
            <CardHeader className="border-b border-gray-700/50 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">User Engagement Metrics</CardTitle>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>Current</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Previous</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userEngagementData}>
                    <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#888', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fill: '#888', fontSize: 10 }} />
                    <Radar 
                      name="Previous Period" 
                      dataKey="B" 
                      stroke="#3b82f6" 
                      fill="#3b82f6" 
                      fillOpacity={0.3} 
                      animationDuration={1500}
                    />
                    <Radar 
                      name="Current Period" 
                      dataKey="A" 
                      stroke="#8884d8" 
                      fill="#8884d8" 
                      fillOpacity={0.5} 
                      animationDuration={1500}
                    />
                    <Legend iconType="circle" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 30, 30, 0.8)', 
                        backdropFilter: 'blur(4px)', 
                        borderRadius: '8px', 
                        border: '1px solid rgba(255, 255, 255, 0.1)', 
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' 
                      }}
                      itemStyle={{ color: '#fff' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Platform Distribution */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none overflow-hidden">
            <CardHeader className="border-b border-gray-700/50 pb-3">
              <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Platform Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {platformData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS.tertiary[index % COLORS.tertiary.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 30, 30, 0.8)', 
                        backdropFilter: 'blur(4px)', 
                        borderRadius: '8px', 
                        border: '1px solid rgba(255, 255, 255, 0.1)', 
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' 
                      }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`${value}%`, '']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Revenue Analytics */}
      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none overflow-hidden">
        <CardHeader className="border-b border-gray-700/50 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-400">Revenue Analytics</CardTitle>
            <div className="flex items-center gap-2">
              <select className="bg-gray-800/60 text-xs backdrop-blur-sm text-gray-300 border border-gray-700 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-amber-500">
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={revenueData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  <linearGradient id="colorSubscriptions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorAds" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorMerchandise" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                <XAxis dataKey="name" stroke="#888" axisLine={false} tickLine={false} />
                <YAxis 
                  stroke="#888" 
                  axisLine={false} 
                  tickLine={false} 
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(30, 30, 30, 0.8)', 
                    backdropFilter: 'blur(4px)', 
                    borderRadius: '8px', 
                    border: '1px solid rgba(255, 255, 255, 0.1)', 
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' 
                  }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value) => [`$${value.toLocaleString()}`, '']}
                  labelFormatter={(label) => `${label}`}
                />
                <Legend 
                  verticalAlign="top" 
                  height={36} 
                  iconType="circle" 
                  iconSize={10}
                  wrapperStyle={{ paddingBottom: '10px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="subscriptions" 
                  name="Subscriptions" 
                  stackId="1"
                  stroke="#f59e0b" 
                  fill="url(#colorSubscriptions)" 
                  fillOpacity={1}
                  animationDuration={1500}
                />
                <Area 
                  type="monotone" 
                  dataKey="donations" 
                  name="Donations" 
                  stackId="1"
                  stroke="#3b82f6" 
                  fill="url(#colorDonations)" 
                  fillOpacity={1}
                  animationDuration={1500}
                />
                <Area 
                  type="monotone" 
                  dataKey="ads" 
                  name="Ad Revenue" 
                  stackId="1"
                  stroke="#10b981" 
                  fill="url(#colorAds)" 
                  fillOpacity={1}
                  animationDuration={1500}
                />
                <Area 
                  type="monotone" 
                  dataKey="merchandise" 
                  name="Merchandise" 
                  stackId="1"
                  stroke="#8b5cf6" 
                  fill="url(#colorMerchandise)" 
                  fillOpacity={1}
                  animationDuration={1500}
                />
                <Line 
                  type="monotone" 
                  name="Total Revenue"
                  dataKey={(data) => data.subscriptions + data.donations + data.ads + data.merchandise}
                  stroke="#fff" 
                  strokeWidth={2} 
                  dot={{ r: 4, fill: '#fff', stroke: '#fff', strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: '#fff', stroke: '#fff', strokeWidth: 2 }}
                  animationDuration={2000}
                />
                <Brush 
                  dataKey="name" 
                  height={30} 
                  stroke="#8884d8" 
                  fill="rgba(30, 30, 30, 0.4)"
                  startIndex={0}
                  endIndex={revenueData.length - 1}
                />
                <ReferenceLine 
                  y={60000} 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  strokeDasharray="3 3" 
                  label={{ 
                    value: 'Target', 
                    position: 'right', 
                    fill: '#888',
                    fontSize: 12
                  }} 
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          {/* Revenue Summary Cards */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
              <div className="text-xs text-gray-400 mb-1">Subscriptions</div>
              <div className="text-lg font-bold text-amber-400">$68,000</div>
              <div className="text-xs text-green-400 flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                <span>+5.2%</span>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
              <div className="text-xs text-gray-400 mb-1">Donations</div>
              <div className="text-lg font-bold text-blue-400">$18,000</div>
              <div className="text-xs text-green-400 flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                <span>+12.7%</span>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
              <div className="text-xs text-gray-400 mb-1">Ad Revenue</div>
              <div className="text-lg font-bold text-green-400">$11,500</div>
              <div className="text-xs text-red-400 flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
                <span>-2.3%</span>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
              <div className="text-xs text-gray-400 mb-1">Merchandise</div>
              <div className="text-lg font-bold text-purple-400">$8,000</div>
              <div className="text-xs text-green-400 flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                <span>+18.4%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Live Streams - Enhanced with performance metrics */}
      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none overflow-hidden">
        <CardHeader className="border-b border-gray-700/50 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-400">Top Live Streams</CardTitle>
            <div className="flex items-center gap-2">
              <select className="bg-gray-800/60 text-xs backdrop-blur-sm text-gray-300 border border-gray-700 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-purple-500">
                <option>All Categories</option>
                <option>Gaming</option>
                <option>Music</option>
                <option>Food</option>
                <option>Technology</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topLiveStreams.map((stream) => (
              <div 
                key={stream.id} 
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="aspect-video overflow-hidden rounded-t-xl">
                    <img 
                      src={stream.thumbnail} 
                      alt={stream.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="absolute top-2 left-2 flex items-center gap-2">
                    <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-md font-semibold flex items-center gap-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      LIVE
                    </div>
                    {stream.trending && (
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
                        TRENDING
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    {stream.viewers.toLocaleString()}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-1">{stream.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="text-xs text-gray-400 px-2 py-0.5 rounded-full bg-gray-700/50">{stream.category}</div>
                        <div className="text-xs text-green-400 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                          {stream.growth}
                        </div>
                      </div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-700/50">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div>Stream Performance</div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Excellent</span>
                      </div>
                    </div>
                    <div className="mt-2 h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" 
                        style={{ width: `${Math.min(90, (stream.viewers / 50000) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex items-center justify-center">
            <button className="bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white text-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300 flex items-center gap-2">
              View All Streams
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
