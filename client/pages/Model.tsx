import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function Model() {
  return (
    <Layout>
      <section className="min-h-screen pt-20 pb-20">
        <div className="container-narrow">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back Home</span>
          </Link>

          {/* Placeholder Content */}
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-border bg-muted/30 p-8 sm:p-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
                  Model Overview
                </h1>
                <p className="text-foreground/70">
                  This is where your customer satisfaction prediction model will
                  be hosted and showcased.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 text-left space-y-4">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    What belongs here?
                  </h3>
                  <ul className="text-sm text-foreground/70 space-y-2">
                    <li>• Model performance metrics and statistics</li>
                    <li>• Architecture and technical details</li>
                    <li>• Training dataset information</li>
                    <li>• Interactive prediction interface</li>
                    <li>• Integration with Streamlit or other tools</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-foreground/60 mb-4">
                  Continue prompting to customize and fill in the content for
                  this page based on your specific model and requirements.
                </p>
                <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                  Configure Model
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="max-w-3xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Documentation",
                description: "Learn about model setup and deployment",
                href: "/docs",
              },
              {
                title: "API Reference",
                description: "Integrate predictions into your app",
                href: "/api",
              },
              {
                title: "Examples",
                description: "See sample predictions and use cases",
                href: "/examples",
              },
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.href}
                className="p-4 rounded-lg border border-border hover:border-primary/50 bg-background hover:bg-primary/5 transition-all group"
              >
                <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-foreground/60">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
