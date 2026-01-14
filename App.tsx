
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ChevronDown, 
  Clock, 
  Flame, 
  HelpCircle, 
  Instagram, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  Zap,
  TrendingDown,
  Smartphone,
  Users,
  Utensils,
  Dumbbell,
  FileText,
  PlayCircle,
  CalendarDays
} from 'lucide-react';

// --- Shared Components ---

const Ticker = ({ text, bgClass = "bg-red-600" }: { text: string, bgClass?: string }) => (
  <div className={`${bgClass} overflow-hidden py-3 border-y border-white/20 shadow-lg relative z-10`}>
    <div className="ticker-content flex items-center gap-4">
      {Array(15).fill(0).map((_, i) => (
        <span key={i} className="flex items-center gap-4 font-black text-white whitespace-nowrap uppercase italic text-sm md:text-base tracking-tighter">
          {text} <Star size={18} fill="white" className="animate-spin-slow" />
        </span>
      ))}
    </div>
  </div>
);

// --- Sections ---

const Navbar = () => (
  <nav className="bg-yellow-400 text-black py-2 text-center font-black text-xs md:text-sm uppercase tracking-widest fixed top-0 w-full z-[60] shadow-md border-b border-black/10">
    🔥 VAGAS PROLONGADAS! - APROVEITE O PREÇO PROMOCIONAL DE CARNAVAL
  </nav>
);

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 52);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-black min-h-screen flex flex-col items-center justify-center text-white">
      {/* Carnival Light Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/30 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-600/30 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-black uppercase mb-8 shadow-xl animate-bounce">
          <Flame size={18} fill="currentColor" /> SECA FOLIA 2025
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase italic">
          📌 O PROTOCOLO DE 7 DIAS PARA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 underline decoration-white/20 italic">DESINCHAR ANTES DO CARNAVAL</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-200 mb-10 max-w-3xl mx-auto leading-tight font-bold">
          Sinta-se leve, confortável na roupa e sem inchaço em apenas 7 dias — sem dietas radicais ou treinos insanos.
        </p>

        {/* VSL Vertical Space */}
        <div className="max-w-[320px] mx-auto mb-12 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-red-600 to-purple-600 rounded-[3rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative aspect-[9/16] bg-zinc-900 rounded-[2.5rem] border-4 border-white/10 overflow-hidden shadow-2xl flex flex-col items-center justify-center">
            <PlayCircle size={64} className="text-red-600 mb-4 animate-pulse" />
            <p className="text-zinc-500 font-black uppercase text-xs tracking-widest px-8">Sua VSL Vertical Aqui</p>
            
            <div className="absolute bottom-8 left-0 right-0 px-6 flex justify-between items-center opacity-40">
              <div className="h-1 w-2/3 bg-white/20 rounded-full"><div className="h-full w-1/3 bg-red-600 rounded-full"></div></div>
              <div className="w-8 h-8 rounded-full bg-white/10"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Eye-catching Timer Label */}
          <div className="bg-yellow-400 text-black px-10 py-4 rounded-2xl shadow-[0_0_30px_rgba(250,204,21,0.6)] animate-pulse border-2 border-black/10 transform rotate-1">
            <p className="text-sm uppercase font-black tracking-[0.3em] mb-1 italic">🔥 A OFERTA EXPIRA EM:</p>
            <div className="text-4xl font-black font-mono tracking-tighter">
              {formatTime(timeLeft)}
            </div>
          </div>

          <a 
            href="#checkout" 
            className="group relative w-full max-w-md bg-gradient-to-br from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-black py-8 rounded-2xl text-4xl md:text-6xl transition-all duration-300 shadow-[0_10px_40px_rgba(34,197,94,0.5)] transform hover:scale-105 active:scale-95 flex flex-col items-center leading-none italic tracking-tighter"
          >
            EU QUERO
            <div className="absolute -top-4 -right-4 bg-red-600 text-white text-xs px-4 py-2 rounded-xl font-black rotate-12 group-hover:rotate-6 transition-transform shadow-lg border-2 border-black uppercase">
              QUERO COMEÇAR AGORA
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => (
  <section className="py-24 bg-zinc-950 relative overflow-hidden">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2 relative">
        <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full" />
        <div className="relative rounded-[2rem] overflow-hidden border-[12px] border-zinc-900 shadow-2xl transform rotate-2">
          <img 
            src="https://i.postimg.cc/TYdX4gnX/Captura-de-Tela-2026-01-12-a-s-19-17-29.png" 
            alt="Resultado Protocolo" 
            className="w-full object-cover h-[500px]"
          />
          <div className="absolute top-6 left-6 bg-red-600 text-white px-6 py-3 rounded-2xl font-black text-lg uppercase shadow-xl border-2 border-white/10">
            RESULTADO EM 7 DIAS
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/2 text-left">
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.95] uppercase italic text-white">
          Transforme a maneira como seu corpo <span className="text-red-600">responde</span> nos dias que importam.
        </h2>
        
        <ul className="space-y-5">
          {[
            "Redução visível do inchaço abdominal",
            "Mais conforto no espelho e nas roupas",
            "Alimentação simples, sem sacrifícios",
            "Movimentos leves que ajudam a drenar o corpo",
            "Passo a passo diário fácil de seguir",
            "Perfeito para fazer antes do Carnaval"
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-4 group">
              <div className="bg-green-500/20 p-2 rounded-full group-hover:bg-green-500/40 transition-colors">
                <CheckCircle2 className="text-green-500" size={24} />
              </div>
              <span className="text-zinc-200 text-lg md:text-xl font-bold">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const SocialProof = () => {
  const testimonials = [
    "https://i.postimg.cc/VLDKLbTD/Chat-GPT-Image-12-de-jan-de-2026-19-03-36.png",
    "https://i.postimg.cc/3rZBnvKp/Chat-GPT-Image-12-de-jan-de-2026-19-04-42.png",
    "https://i.postimg.cc/TwtKWf6w/Chat-GPT-Image-12-de-jan-de-2026-19-09-04.png",
    "https://i.postimg.cc/qqtvhKwS/Captura-de-Tela-2026-01-12-a-s-19-09-44.png"
  ];

  return (
    <section className="py-24 bg-black overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-6xl font-black mb-12 uppercase italic tracking-tighter">
          Veja quem já conquistou resultados <br /> com esse <span className="text-red-600 underline decoration-white/10">protocolo</span>:
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((url, i) => (
            <div key={i} className="relative group rounded-3xl overflow-hidden border-4 border-zinc-900 hover:border-red-600 transition-all duration-500 shadow-2xl">
              <div className="aspect-[3/4] bg-zinc-900 overflow-hidden">
                <img src={url} alt={`Depoimento ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-4 left-0 right-0">
                 <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] italic bg-red-600 px-3 py-1">RESULTADO REAL</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    { title: "Protocolo 7 Dias", desc: "Passo a passo completo para desinchar.", icon: <CalendarDays size={32} /> },
    { title: "Guia Diário", desc: "Tudo o que você deve comer em cada dia.", icon: <Utensils size={32} /> },
    { title: "Rotina de Movimento", desc: "Exercícios leves que auxiliam na drenagem.", icon: <Dumbbell size={32} /> },
    { title: "Checklist Simples", desc: "Organize suas tarefas e não perca o foco.", icon: <FileText size={32} /> },
    { title: "Plataforma Mobile", desc: "Acesse pelo celular de qualquer lugar.", icon: <Smartphone size={32} /> },
    { title: "Suporte Especializado", desc: "Tire suas dúvidas durante o processo.", icon: <MessageCircle size={32} /> }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic tracking-tighter">🔥 O QUE VOCÊ RECEBE AGORA</h2>
        <p className="text-zinc-500 font-bold text-xl mb-16 uppercase tracking-widest">ACESSO IMEDIATO AO PROTOCOLO</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="bg-zinc-900 p-10 rounded-[2.5rem] border border-white/5 hover:border-red-600/50 transition-all duration-500 text-left group">
              <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-red-600/20">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase italic text-white tracking-tighter">{item.title}</h3>
              <p className="text-zinc-400 font-medium text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section className="py-24 bg-black border-y border-white/5">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-4xl md:text-6xl font-black mb-16 text-center uppercase italic">🧠 COMO <span className="text-red-600">FUNCIONA</span></h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { step: "1", title: "Baixe o PDF", desc: "Leia o plano completo do Dia 1 ao Dia 7 imediatamente." },
          { step: "2", title: "Siga o Plano", desc: "Execute cada passo diário sem complicações." },
          { step: "3", title: "Veja Resultado Real", desc: "Sinta a redução do inchaço e o corpo mais leve." },
          { step: "4", title: "Curta o Carnaval", desc: "Vista suas roupas com muito mais conforto." }
        ].map((item, i) => (
          <div key={i} className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 flex gap-6 items-start">
            <span className="text-6xl font-black text-red-600/20 italic leading-none">{item.step}</span>
            <div>
              <h4 className="text-xl font-black text-white uppercase italic mb-2">{item.title}</h4>
              <p className="text-zinc-400 font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="checkout" className="py-24 bg-black relative">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-[0_20px_80px_rgba(34,197,94,0.3)] border-[8px] border-green-500 transform hover:scale-[1.01] transition-transform duration-500">
        
        <div className="bg-red-600 text-white py-3 text-center font-black uppercase tracking-widest text-sm animate-pulse">
          ⚡ OFERTA ESPECIAL DE CARNAVAL
        </div>

        <div className="p-10 md:p-16 text-center">
          <h2 className="text-black text-4xl md:text-6xl font-black mb-6 uppercase italic leading-none tracking-tighter">
            SIM! QUERO <span className="text-green-600">DESINCHAR</span> <br /> ATÉ O CARNAVAL
          </h2>

          <div className="bg-zinc-50 rounded-[2rem] p-10 mb-10 border-2 border-dashed border-zinc-200">
            <p className="text-zinc-400 font-black line-through text-2xl mb-2 uppercase italic">De R$ 197,00 por apenas...</p>
            <div className="flex flex-col items-center">
              <span className="text-8xl md:text-[10rem] font-black text-green-600 tracking-tighter leading-none italic">
                19,90
              </span>
              <p className="text-zinc-800 font-black text-2xl uppercase tracking-[0.3em] italic mt-4">PAGAMENTO ÚNICO</p>
            </div>
          </div>

          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-8 rounded-[2.5rem] text-2xl md:text-4xl transition-all duration-300 transform shadow-xl uppercase italic tracking-tighter border-b-8 border-green-700 active:translate-y-1 active:border-b-2">
            TENHA ACESSO AGORA MESMO
          </button>
          
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-8 opacity-40 grayscale invert">
              <img src="https://logodownload.org/wp-content/uploads/2014/10/cartao-visa-bandeira.png" alt="Visa" className="h-6" />
              <img src="https://logodownload.org/wp-content/uploads/2014/09/mastercard-logo-7.png" alt="Master" className="h-6" />
              <img src="https://logodownload.org/wp-content/uploads/2015/03/pix-logo.png" alt="Pix" className="h-6" />
            </div>
            
            <div className="flex items-center gap-3 text-zinc-500 font-black text-xs uppercase tracking-widest">
              <ShieldCheck size={20} className="text-green-500" /> COMPRA 100% SEGURA
            </div>
          </div>
        </div>
      </div>
      
      {/* Guarantee */}
      <div className="max-w-2xl mx-auto mt-16 p-10 bg-zinc-900/50 rounded-3xl border border-white/5 text-center flex flex-col items-center">
        <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-black mb-6 shadow-xl">
          <ShieldCheck size={48} />
        </div>
        <h3 className="text-2xl font-black text-white uppercase italic mb-4 tracking-tight">🧪 GARANTIA DE SATISFAÇÃO</h3>
        <p className="text-zinc-400 font-bold text-lg leading-relaxed italic">
          Nós confiamos no método, por isso oferecemos: <br />
          <span className="text-white">Garantia incondicional de 7 dias.</span> <br />
          Se você seguir e não perceber diferença, devolvemos o seu investimento.
        </p>
      </div>
    </div>
  </section>
);

const UrgentFooter = () => (
  <section className="py-24 bg-red-600 text-white text-center">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-8 leading-none tracking-tighter">
        NÃO DEIXE <br /> PARA DEPOIS!
      </h2>
      <p className="text-xl md:text-2xl font-bold mb-12 italic">
        Faltam poucos dias para o Carnaval. Esse protocolo é curto, direto e eficaz para quem quer ver resultado agora, sem complicação. Comece hoje e sinta a diferença!
      </p>
      <a 
        href="#checkout" 
        className="inline-block bg-white text-red-600 font-black px-12 py-6 rounded-full text-2xl md:text-3xl transition-all transform hover:scale-110 shadow-2xl uppercase italic tracking-tighter"
      >
        ➡️ QUERO EMAGRECER VISUALMENTE ATÉ O CARNAVAL!
      </a>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Quanto tempo de acesso eu tenho?", a: "Seu acesso ao Protocolo Seca Folia é vitalício. Você pode repetir o plano sempre que precisar desinchar para um evento." },
    { q: "O material é em vídeo ou PDF?", a: "O material é um guia completo em PDF de alta qualidade, otimizado para leitura no celular e com checklists práticos." },
    { q: "Realmente funciona em 7 dias?", a: "Sim! O foco é redução de retenção hídrica e inflamação intestinal, o que gera um resultado visual imediato de desinche." },
    { q: "Sou iniciante, consigo seguir?", a: "Com certeza. Foi desenhado para ser o mais simples possível, sem termos técnicos ou preparações complexas." }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-black mb-16 text-center uppercase italic tracking-tighter">DÚVIDAS <span className="text-red-600">FREQUENTES</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-2xl overflow-hidden group hover:border-red-600/30 transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 text-left flex justify-between items-center bg-zinc-900/50 hover:bg-zinc-800 transition-colors"
              >
                <span className="font-black uppercase italic text-white tracking-tight">{faq.q}</span>
                <ChevronDown className={`transition-transform text-red-600 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="p-8 text-zinc-400 font-bold bg-zinc-950/50 border-t border-white/5 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalFooter = () => (
  <footer className="py-12 bg-zinc-950 border-t border-white/5 text-center text-zinc-600 text-xs font-bold uppercase tracking-widest">
    <div className="container mx-auto px-4 space-y-4">
      <div className="text-2xl font-black italic text-white tracking-tighter mb-6">
        SECA <span className="text-red-600">FOLIA</span>
      </div>
      <p>© 2025 - TODOS OS DIREITOS RESERVADOS.</p>
      <p className="max-w-2xl mx-auto opacity-50">ESTE PRODUTO NÃO SUBSTITUI O PARECER MÉDICO PROFISSIONAL. OS RESULTADOS VARIAM DE ACORDO COM CADA ORGANISMO.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black text-white selection:bg-red-600/30 font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ticker text="O PROTOCOLO DE 7 DIAS ★ DESINCHE AGORA ★ PREÇO ESPECIAL ★" />
      <Benefits />
      <SocialProof />
      <Features />
      <Ticker text="SIM! QUERO DESINCHAR ★ SIM! QUERO DESINCHAR ★ SIM! QUERO DESINCHAR ★" bgClass="bg-green-600" />
      <HowItWorks />
      <Pricing />
      <UrgentFooter />
      <FAQ />
      
      <div className="py-12 flex justify-center bg-zinc-950 border-t border-white/5">
        <a href="https://wa.me/yournumber" className="flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-black uppercase italic tracking-widest hover:scale-105 transition-transform shadow-xl">
          <MessageCircle /> Dúvidas? Fale Conosco
        </a>
      </div>

      <FinalFooter />
      
      {/* Floating Button for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-[100] md:hidden animate-slide-up">
        <a href="#checkout" className="block bg-green-500 text-white text-center py-5 rounded-2xl font-black shadow-2xl border-b-4 border-green-800 uppercase italic tracking-tighter text-lg">
          EU QUERO DESINCHAR AGORA!
        </a>
      </div>

      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .ticker-content { display: flex; white-space: nowrap; animation: ticker 25s linear infinite; }
        .animate-spin-slow { animation: rotate 12s linear infinite; }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes slide-up { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slide-up { animation: slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
}
