'use client'

import { ArrowRight, Calendar, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="w-full py-20 ">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="relative  rounded-2xl p-12 md:p-16 backdrop-blur-sm">
            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium">
                  Available for new projects
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Ready to bring your digital product to life?
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Let's collaborate to design, build, and scale your next big
                idea.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:hello@yourdomain.com?subject=Project Inquiry&body=Hi, I’d like to discuss a project with you."
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Us
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-transform group-hover:scale-105" />
                </a>

                <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 bg-background/50 backdrop-blur-sm font-semibold text-base transition-all hover:scale-105 hover:border-primary/50 hover:bg-background w-full sm:w-auto">
                  <Calendar className="w-5 h-5" />
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">24h</div>
                  <div className="text-sm text-muted-foreground">
                    Response Time
                  </div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Delivered
                  </div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}