import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Article from "./pages/Article";
import Color from "./pages/Color";
import NotFound from "./pages/NotFound"; 
import Profile from "./pages/Profile";
import ResultColorSummer from "./pages/ResultColorSummer";
import ResultColorSpring from "./pages/ResultColorSpring";
import ResultColorWinter from "./pages/ResultColorWinter";
import SkinType from "./pages/Skin";
import SkinTypeQuiz from "./pages/SkinTypeQuiz";
import SkinTypeResults from "./pages/SkinTypeResults";
import AboutUs from "./pages/AboutUs";
import BodyShape from "./pages/BodyShape";
import BodyTypeResults from "./pages/BodyTypeResults";
import ResultColorAutumn from "./pages/ResultColorAutumn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/article" element={<Article />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/color" element={<Color />} />
          <Route path="/skin" element={<SkinType />} />
          <Route path="/summer" element={<ResultColorSummer />} /> 
          <Route path="/spring" element={<ResultColorSpring />} />
          <Route path="/winter" element={<ResultColorWinter />} />
          <Route path="/autumn" element={<ResultColorAutumn />} />
          <Route path="/skin-type-quiz" element={<SkinTypeQuiz />} />
          <Route path="/skin-type-results" element={<SkinTypeResults />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/body" element={<BodyShape />} />
          <Route path="/body-type-results" element={<BodyTypeResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;