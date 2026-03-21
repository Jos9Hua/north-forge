import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * Legora Website Replica
 * Design: Minimalist Elegance with Playfair Display serif typography
 * Color Palette: Off-white (#fffbf0) background, Forest Green (#1a5f3f) accents
 * Layout: Asymmetrical, generous whitespace, sophisticated typography
 */

export default function Home() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            <span className="font-playfair">LEGORA</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Product
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Solutions
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Security
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Customers
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              News
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Careers
            </a>
          </div>
          <Button variant="outline" className="text-sm">
            Log in
          </Button>
        </div>
      </nav>

      {/* Announcement Bar */}
      <div className="bg-accent text-accent-foreground py-3 text-center">
        <p className="text-sm">
          Legora raises $550M to fuel US growth{" "}
          <a href="#" className="underline hover:opacity-80 transition-opacity">
            Read more →
          </a>
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663272529478/9Dm3UT2gKnqzVpxM3G7gVT/legora-hero-bg-4svMCcWp7KhAMMuiYJMTHN.webp"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-playfair font-light mb-8 leading-tight">
              Legal work,
              <br />
              without limits.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12">
              Lawyers bring judgment, strategy, and creativity. AI brings speed, scale, and precision.
              Together, they unlock new possibilities for how legal work gets done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Shift focus from admin to expertise
              </Button>
              <Button size="lg" variant="outline">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wide">
            Trusted by leading law firms
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {["Baker Bird", "Client Matters", "White & Case", "LinklawJers", "Deloitte", "Dentons"].map(
              (client) => (
                <div key={client} className="text-center text-sm font-medium text-muted-foreground">
                  {client}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6">
              Streamline everything
            </h2>
            <p className="text-lg text-muted-foreground">
              Spend less time on routine, and more time on the work only lawyers can do. Legora focuses on
              the tasks that take up time managing process, and more time delivering value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Review faster",
                description:
                  "Being an exceptional lawyer means reviewing and reading mountains of material. Legora can analyze tens of thousands of pages in seconds.",
                icon: "📄",
              },
              {
                title: "Draft smarter",
                description:
                  "Legora draws on precedent to draft, rewrite, and refine your content in Word. It identifies the substance of what you need to say.",
                icon: "✍️",
              },
              {
                title: "Research deeper",
                description:
                  "Access up-to-date information, legal databases, and your DMS content, all within Legora. With partnerships with leading providers.",
                icon: "🔍",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveFeature(feature.title)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-playfair font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-light mb-16 text-center">
            Legora meets lawyers where they are.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {[
              {
                title: "Litigation",
                description:
                  "Streamline the litigation process and free your team to focus on a winning outcome.",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/310519663272529478/9Dm3UT2gKnqzVpxM3G7gVT/legora-document-review-kcfiDuLR3V6vPuFsWXHnLV.webp",
              },
              {
                title: "M&A",
                description:
                  "Review documents faster and draft precise, detailed agreements and reports in less time.",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/310519663272529478/9Dm3UT2gKnqzVpxM3G7gVT/legora-collaboration-NJSv8SixV4zchQh3M5X6mt.webp",
              },
            ].map((solution, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6 h-80 bg-muted">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-playfair font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Tax",
                description: "Analyze complex tax rulings and legislation with speed and clarity.",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/310519663272529478/9Dm3UT2gKnqzVpxM3G7gVT/legora-research-AWuqiBeLRkVHTgTiVJXhrA.webp",
              },
              {
                title: "Banking",
                description:
                  "Stay ahead of regulation, process documents faster and focus on strategy.",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/310519663272529478/9Dm3UT2gKnqzVpxM3G7gVT/legora-collaboration-NJSv8SixV4zchQh3M5X6mt.webp",
              },
            ].map((solution, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6 h-80 bg-muted">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-playfair font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-light mb-8">
            Ready to transform your legal work?
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
            Join leading law firms that are already using Legora to work smarter and faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Book a demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
              Learn more
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-playfair font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Word Add-In
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Outlook Add-In
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Litigation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    M&A
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Tax
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Security Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Legora. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
