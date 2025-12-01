import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { generateRenovationIdeas } from '../services/gemini';
import { RoomType, DesignStyle } from '../types';

const AIPlanner: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<RoomType>(RoomType.KITCHEN);
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>(DesignStyle.MODERN);
  const [budget, setBudget] = useState('$20,000 - $30,000');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const data = await generateRenovationIdeas(selectedRoom, selectedStyle, budget);
      setResult(data);
      setStep(2);
    } catch (error) {
      console.error(error);
      alert('Sorry, we could not generate ideas at this moment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setResult(null);
  };

  return (
    <section id="ai-planner" className="py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 skew-x-12 transform translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Side */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 text-orange-500 mb-4">
              <Sparkles className="animate-pulse" />
              <span className="font-bold uppercase tracking-widest text-sm">Gemini AI Powered</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Design Your <br/> Dream Space
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Not sure where to start? Use our advanced AI consultant to generate personalized renovation concepts, material suggestions, and cost estimates instantly.
            </p>
          </div>

          {/* Interactive Side */}
          <div className="lg:w-2/3 w-full bg-white rounded-xl shadow-2xl overflow-hidden text-slate-800">
            {step === 1 ? (
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                  Tell us about your project
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">Room Type</label>
                    <select 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                      value={selectedRoom}
                      onChange={(e) => setSelectedRoom(e.target.value as RoomType)}
                    >
                      {Object.values(RoomType).map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">Design Style</label>
                    <select 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                      value={selectedStyle}
                      onChange={(e) => setSelectedStyle(e.target.value as DesignStyle)}
                    >
                      {Object.values(DesignStyle).map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-600">Approximate Budget</label>
                    <input 
                      type="text"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="e.g. $15,000"
                    />
                  </div>
                </div>

                <button 
                  onClick={handleGenerate}
                  disabled={loading}
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-slate-900 font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Analyzing structural possibilities...
                    </>
                  ) : (
                    <>
                      Generate Concepts
                      <Sparkles size={18} />
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="p-8 md:p-12 bg-slate-50 max-h-[600px] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">AI Recommendations</h3>
                  <button onClick={handleReset} className="text-sm text-slate-500 hover:text-slate-900 underline">Start Over</button>
                </div>

                <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-800">
                  <p className="font-semibold mb-1">Summary</p>
                  {result.summary}
                </div>

                <div className="space-y-6">
                  {result.ideas.map((idea: any, idx: number) => (
                    <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-slate-900">{idea.title}</h4>
                        <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {idea.estimatedCostRange}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{idea.description}</p>
                      
                      <div>
                        <h5 className="text-xs font-bold uppercase text-slate-400 mb-2">Suggested Materials</h5>
                        <div className="flex flex-wrap gap-2">
                          {idea.materialSuggestions.map((mat: string, i: number) => (
                            <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full border border-slate-200">
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-center text-slate-500 text-sm mb-4">Like what you see? Let's make it real.</p>
                  <a 
                    href="#contact"
                    className="block w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-center transition-all"
                  >
                    Discuss These Plans With Us
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlanner;
