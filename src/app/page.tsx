import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { WhoFor } from "@/components/WhoFor";
import { Learn } from "@/components/Learn";
import { ProgramStructure } from "@/components/ProgramStructure";
import { Community } from "@/components/Community";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Apply } from "@/components/Apply";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { StatementBand } from "@/components/StatementBand";
import { ChatProvider } from "@/components/chat/ChatProvider";
import { ChatTrigger } from "@/components/chat/ChatTrigger";
import { ChatPanel } from "@/components/chat/ChatPanel";
import { GreetingBubble } from "@/components/chat/GreetingBubble";

export default function Home() {
  return (
    <ChatProvider>
      <Nav />
      <main>
        <Hero />
        <StatementBand />
        <Reveal>
          <Problem />
        </Reveal>
        <Reveal>
          <WhoFor />
        </Reveal>
        <Reveal>
          <Learn />
        </Reveal>
        <Reveal>
          <ProgramStructure />
        </Reveal>
        <Reveal>
          <Community />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <Apply />
        </Reveal>
      </main>
      <Footer />
      <GreetingBubble />
      <ChatTrigger />
      <ChatPanel />
    </ChatProvider>
  );
}
