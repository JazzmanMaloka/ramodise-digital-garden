import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomelabCard } from "@/components/HomelabCard";
import { getServiceBySlug } from "@/data/services";
import { ArrowLeft, Server, Wrench, Lightbulb, GraduationCap } from "lucide-react";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
          <HomelabCard title="Service Not Found" delay={300}>
            <p className="text-foreground/80 mb-4">The service you're looking for doesn't exist.</p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Homepage
            </Link>
          </HomelabCard>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 space-y-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        <HomelabCard title="" delay={300}>
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={service.logo} 
              alt={`${service.name} logo`} 
              className="w-16 h-16 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground font-mono">{service.name}</h1>
              <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                service.type === "VM" 
                  ? "bg-accent/20 text-accent" 
                  : "bg-primary/20 text-primary"
              }`}>
                {service.type === "VM" ? "Virtual Machine" : "Container"}
              </span>
            </div>
          </div>
          <p className="text-foreground/80 leading-relaxed">{service.description}</p>
        </HomelabCard>

        <div className="grid md:grid-cols-2 gap-6">
          <HomelabCard title="" delay={400}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-foreground font-mono">What I Use It For</h2>
            </div>
            <p className="text-foreground/80 leading-relaxed">{service.usedFor}</p>
          </HomelabCard>

          <HomelabCard title="" delay={500}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Lightbulb className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-lg font-semibold text-foreground font-mono">Why It's Useful</h2>
            </div>
            <p className="text-foreground/80 leading-relaxed">{service.whyUseful}</p>
          </HomelabCard>
        </div>

        <HomelabCard title="" delay={600}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-secondary">
              <GraduationCap className="w-5 h-5 text-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground font-mono">Skills & Experience</h2>
          </div>
          <p className="text-foreground/80 leading-relaxed">{service.skills}</p>
        </HomelabCard>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
