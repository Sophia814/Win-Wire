import React from 'react';
import { Trophy, Target, Zap, Sparkles, Users } from 'lucide-react';

const SuccessStorySlide = () => {
  return (
    <div className="bg-gradient-to-br from-violet-600 via-indigo-500 to-blue-500 h-screen p-8 font-sans relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 max-w-4xl mx-auto relative border border-white/20">
        <div className="absolute -right-3 -top-3 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-2xl shadow-lg">
          <Trophy className="text-white w-6 h-6" />
        </div>

        <div className="mb-6">
          <p className="text-blue-600 text-sm font-medium mb-1">CUSTOMER WIN</p>
          <h1 className="text-3xl font-bold text-gray-800">Success Story</h1>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <div className="bg-blue-50/80 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-blue-600" />
                <h2 className="text-sm font-medium text-blue-600">CLIENT</h2>
              </div>
              <p className="text-lg text-gray-800">Fortune 500 Tech Company</p>
            </div>
            
            <div className="bg-blue-50/80 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <h2 className="text-sm font-medium text-blue-600">CHALLENGE</h2>
              </div>
              <p className="text-gray-700">Needed to scale cloud infrastructure while reducing operational costs by 30%</p>
            </div>
            
            <div className="bg-blue-50/80 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <h2 className="text-sm font-medium text-blue-600">SOLUTION</h2>
              </div>
              <p className="text-gray-700">Implemented our enterprise automation platform with custom workflows</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-sm font-medium text-blue-600 mb-3">KEY ACHIEVEMENTS</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl">
                  <p className="text-3xl font-bold text-white">40%</p>
                  <p className="text-sm text-blue-100">Cost Reduction</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl">
                  <p className="text-3xl font-bold text-white">2x</p>
                  <p className="text-sm text-blue-100">Productivity Gain</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50/80 p-4 rounded-2xl">
              <h2 className="text-sm font-medium text-blue-600 mb-3">HOW WE WON</h2>
              <p className="text-gray-700">Through deep technical expertise and close collaboration with the client's team, we delivered a customized solution that exceeded performance targets.</p>
              <p className="text-sm text-gray-600 mt-2">- CTO, Client Company</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-blue-600" />
            <h2 className="text-sm font-medium text-blue-600">KEY PLAYERS</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl">
              <div className="w-8 h-8 bg-blue-600/10 rounded-full mb-2 flex items-center justify-center">
                <p className="text-blue-600 font-medium">SC</p>
              </div>
              <p className="font-medium text-gray-800">Sarah Chen</p>
              <p className="text-sm text-gray-600">Solution Architect</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl">
              <div className="w-8 h-8 bg-blue-600/10 rounded-full mb-2 flex items-center justify-center">
                <p className="text-blue-600 font-medium">MT</p>
              </div>
              <p className="font-medium text-gray-800">Mark Thompson</p>
              <p className="text-sm text-gray-600">Technical Lead</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl">
              <div className="w-8 h-8 bg-blue-600/10 rounded-full mb-2 flex items-center justify-center">
                <p className="text-blue-600 font-medium">LR</p>
              </div>
              <p className="font-medium text-gray-800">Lisa Rodriguez</p>
              <p className="text-sm text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStorySlide;
