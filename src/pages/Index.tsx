import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomelabCard } from "@/components/HomelabCard";
import { ServicesList } from "@/components/ServicesList";
import { InfrastructureList } from "@/components/InfrastructureList";
import { FuturePlansList } from "@/components/FuturePlansList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 space-y-6">
        <HomelabCard title="About This Homelab" delay={300}>
          <p className="text-foreground/80 leading-relaxed">
            Welcome to my self-hosted environment. This lab is built for learning, automation,
            hosting services, experimenting with infrastructure, and improving my IT operations skills.
          </p>
        </HomelabCard>

        <HomelabCard title="Core Services" delay={400}>
          <ServicesList />
        </HomelabCard>

        <div className="grid md:grid-cols-2 gap-6">
          <HomelabCard title="Infrastructure" delay={500}>
            <InfrastructureList />
          </HomelabCard>

          <HomelabCard title="Future Plans" delay={600}>
            <FuturePlansList />
          </HomelabCard>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
