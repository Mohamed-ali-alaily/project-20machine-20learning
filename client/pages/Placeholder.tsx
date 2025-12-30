import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface PlaceholderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function Placeholder({
  title,
  description,
  icon,
}: PlaceholderProps) {
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
              {icon && (
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                  {icon}
                </div>
              )}

              <div>
                <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
                  {title}
                </h1>
                <p className="text-foreground/70">{description}</p>
              </div>

              <div className="pt-4">
                <p className="text-sm text-foreground/60 mb-4">
                  Continue prompting to customize and add content for this page.
                </p>
                <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                  Configure Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
