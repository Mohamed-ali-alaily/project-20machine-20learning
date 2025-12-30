import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container-narrow text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl font-heading font-bold gradient-text">
              404
            </h1>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg text-foreground/60 max-w-md mx-auto">
              The page you're looking for doesn't exist. Let's get you back to
              exploring the model.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Return Home
            </Link>
            <Link
              to="/model"
              className="px-6 py-3 rounded-lg border border-primary/20 bg-background hover:bg-primary/5 font-semibold text-foreground transition-colors"
            >
              View Model
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
