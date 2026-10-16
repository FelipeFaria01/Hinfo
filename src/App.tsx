import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sobre } from "./components/Sobre";
import { Servicos } from "./components/Servicos";
import { Solucoes } from './components/Solucoes';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { Reveal } from './components/Reveal';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      <Reveal>
       <Header /> 
      </Reveal>

      <main className="flex-1">
        <Reveal delay={100}>
          <Hero /> 
        </Reveal>
       
        <Reveal delay={100}> 
          <Sobre />
          </Reveal> 
          
        <Reveal delay={100}>
          <Servicos/>
        </Reveal>

        <Reveal delay={100}>
          <Solucoes />
        </Reveal>

        <Reveal delay={100}>
          <Contato/>
        </Reveal>
        
      </main>

      <Footer />
    </div>
    
  )
}