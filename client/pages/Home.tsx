import { Link } from "react-router-dom";
import { ArrowRight, Zap, BarChart3, Cpu, Network } from "lucide-react";
import Layout from "@/components/Layout";

export default function Home() {
  const features = [
    {
      icon: Cpu,
      title: "Advanced ML Model",
      description:
        "Cutting-edge customer satisfaction prediction powered by state-of-the-art machine learning algorithms.",
    },
    {
      icon: Zap,
      title: "Real-time Predictions",
      description:
        "Get instant predictions on customer satisfaction with high accuracy and minimal latency.",
    },
    {
      icon: BarChart3,
      title: "Actionable Insights",
      description:
        "Comprehensive analytics and visualizations to understand customer sentiment patterns.",
    },
    {
      icon: Network,
      title: "Streamlit Integration",
      description:
        "Interactive interface ready for integration with Streamlit for enhanced user experience.",
    },
  ];

  const stats = [
    { label: "Accuracy", value: "94%+" },
    { label: "Response Time", value: "<100ms" },
    { label: "Data Points", value: "1M+" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Production Ready ML Platform
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Predict Customer Satisfaction
              <br />
              <span className="gradient-text">with Precision</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
              A foundational platform for deploying advanced machine learning
              models. Built for flexibility and ready for Streamlit integration
              to create interactive user experiences based on your trained
              models.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/model"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors group"
              >
                Explore Model
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary/20 bg-background hover:bg-primary/5 font-semibold text-foreground transition-colors">
                View Documentation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-border/50">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-primary">
                    {stat.value}
                  </div>
                  <p className="text-sm text-foreground/60 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Powerful Capabilities
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Everything you need to deploy, manage, and scale your customer
              satisfaction prediction model in production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group p-6 rounded-xl border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 sm:py-28">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                Streamlit Integration
              </h2>
              <p className="text-lg text-foreground/70">
                Our platform provides a solid foundation for deploying your
                customer satisfaction prediction model. Easily integrate an
                interactive Streamlit interface to create engaging user
                experiences tailored to your trained model and dataset.
              </p>
              <ul className="space-y-3">
                {[
                  "Flexible architecture for custom UI integration",
                  "Support for real-time model predictions",
                  "Adaptable to your specific dataset requirements",
                  "Production-ready scalability",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                Learn More
              </button>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 rounded-xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/30 rounded-full blur-3xl opacity-50" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <p className="text-foreground/70 font-medium">
                  ML Model Engine
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10" />

        <div className="container-narrow">
          <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:p-12 lg:p-16 text-center">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />

            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Ready to Deploy Your Model?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Get started with PredictAI today. Our platform provides everything
              you need to deploy, monitor, and scale your customer satisfaction
              prediction model.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                Get Started Now
              </button>
              <button className="px-8 py-3 rounded-lg border border-primary/30 bg-background hover:bg-primary/5 font-semibold text-foreground transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
