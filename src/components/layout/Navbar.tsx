import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Separator } from '../../components/ui/separator';
import { Star, Search, BarChart2, MoreVertical, X, CheckCircle, ArrowRight, User } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('games');

  return (
    <nav className="bg-[#18181b] px-4 flex items-center justify-between sticky top-0 z-50 w-full" style={{ minHeight: '56px' }}>
      {/* Left */}
      <div className="flex items-center gap-2 min-w-[200px]">
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="22" rx="8" fill="#fff" />
            <path d="M13 10L8 16.5V33H16V37H22L26 33H32V10H13Z" fill="#9147FF" />
            <rect x="18" y="17" width="2" height="8" rx="1" fill="#fff" />
            <rect x="25" y="17" width="2" height="8" rx="1" fill="#fff" />
          </svg>
        </div>
        <Button variant="link" asChild className="text-white font-semibold text-base hover:text-white px-2">
          <a href="#">Browse</a>
        </Button>
        <Button variant="link" asChild className="flex items-center gap-1 text-white font-semibold text-base hover:text-purple-400 px-2">
          <Link to="/dashboard">
            <BarChart2 className="h-5 w-5" />
            Analytics
          </Link>
        </Button>
        <Separator orientation="vertical" className="mx-2 h-4 bg-white/30 hidden md:inline-block" />
        <Button variant="ghost" size="icon" className="text-white hover:text-white md:inline-block">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>

      {/* Center */}
      <div className="flex-1 max-w-lg mx-4">
        <div className="flex items-center bg-white/10 rounded focus-within:ring-2 focus-within:ring-white px-2" style={{ height: '36px' }}>
          <Input
            type="text"
            className="flex-1 bg-transparent text-white px-3 py-1 border-0 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-white/70 text-base font-medium h-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="ghost" size="icon" className="px-2 text-white hover:text-white h-full">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 min-w-[200px] justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-yellow-300 hover:text-yellow-400">
              <Star className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[400px] bg-[#18181b] border-gray-700 p-0">
            <ScrollArea className="h-[80vh] max-h-[600px]">
              {/* Header */}
              <Card className="border-0 rounded-none bg-transparent">
                <CardHeader className="p-4 border-b border-gray-700">
                  <div className="flex items-center justify-between mb-1 pb-2">
                    <div className="flex items-center gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 2L2 6.5V19H8V23H12L16 19H20V2H6.5Z" fill="#9147FF" />
                      </svg>
                      <span className="text-white font-bold">prime gaming</span>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={() => document.body.click()}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <CardTitle className="text-white text-lg font-bold">Claim your games today</CardTitle>
                  <CardDescription className="text-white">
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span>Included with Amazon Prime</span>
                    </div>
                  </CardDescription>
                  <p className="text-gray-300 text-sm mt-3">
                    Get a monthly Twitch channel sub for your favorite streamer, games every week, and other gaming benefits.
                  </p>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium mt-3 flex items-center justify-center gap-1">
                    Claim now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <div className="text-center mt-2 text-sm">
                    <span className="text-gray-400">Already have Prime? </span>
                    <a href="#" className="text-purple-400 hover:underline font-medium">Sign in →</a>
                  </div>
                </CardHeader>
              </Card>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full rounded-none border-b border-gray-700 bg-transparent">
                  <TabsTrigger 
                    value="games" 
                    className="flex-1 py-3 data-[state=active]:text-purple-400 data-[state=active]:border-b-2 data-[state=active]:border-purple-400 data-[state=active]:font-medium rounded-none"
                  >
                    Games
                  </TabsTrigger>
                  <TabsTrigger 
                    value="twitch" 
                    className="flex-1 py-3 data-[state=active]:text-purple-400 data-[state=active]:border-b-2 data-[state=active]:border-purple-400 data-[state=active]:font-medium rounded-none"
                  >
                    Twitch channel sub
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="games" className="mt-0">
                  {/* Content cards */}
                  {[...Array(3)].map((_, index) => (
                    <Card key={index} className="p-4 border-0 rounded-none bg-transparent">
                      <CardTitle className="text-white text-lg font-bold mb-3">Celebrate Star Wars</CardTitle>
                      <CardContent className="p-0">
                        <div className="bg-black rounded overflow-hidden mb-3">
                          <img
                            src="https://placehold.co/600x300/000000/FFFFFF/png?text=STAR+WARS"
                            alt="Star Wars"
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-3">
                            <p className="text-white text-sm">Play a collection of Star Wars games included with Prime</p>
                            <p className="text-gray-400 text-xs mt-1">Prime Gaming</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-0">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium">
                          Start Your Free Trial
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="twitch" className="mt-0">
                  <Card className="p-4 border-0 rounded-none bg-transparent">
                    <CardTitle className="text-white text-lg font-bold mb-3">Subscribe to your favorite streamer</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-white text-sm mb-4">Use your monthly subscription token on any eligible channel.</p>
                    </CardContent>
                    <CardFooter className="p-0">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium">
                        Explore Channels
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Auth buttons */}
        <Button variant="outline" className="bg-white/10 text-white text-sm px-4 py-1.5 rounded font-semibold hover:bg-white/20 border-transparent">
          Log In
        </Button>
        <Button className="bg-[#9147ff] text-white text-sm px-4 py-1.5 rounded font-bold hover:bg-[#772ce8] border-[#9147ff]">
          Sign Up
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-white/10 text-white hover:bg-white/20">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
