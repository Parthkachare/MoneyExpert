import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Building2 } from "lucide-react";
import BankLogo from "../banklogo";
import { banks } from "./banks";

export default function Partners() {
  const ref = useRef<HTMLElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  const duplicatedBanks = [...banks, ...banks];

  return (
    <section
      id="partners"
      ref={ref}
      className="
        relative
        overflow-hidden
        bg-background
        py-20
        sm:py-24
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-primary/15
              bg-primary/5
              px-4
              py-2
              text-sm
              font-semibold
              text-primary
            "
          >
            <Building2 className="h-4 w-4" />

            Trusted Financial Network
          </div>

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-foreground
              sm:text-4xl
              lg:text-5xl
            "
          >
            Partnered with India's{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-600
                to-blue-800
                bg-clip-text
                text-transparent
                dark:from-emerald-400
                dark:to-emerald-300
              "
            >
              leading banks
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-muted-foreground
              sm:text-lg
            "
          >
            Compare financial products from trusted institutions
            through one simple platform.
          </p>
        </motion.div>

        {/* LOGO CAROUSEL */}

        <div className="relative w-full">

          {/* LEFT FADE */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-20
              w-16
              bg-gradient-to-r
              from-background
              via-background/80
              to-transparent
              sm:w-28
            "
          />

          {/* RIGHT FADE */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-20
              w-16
              bg-gradient-to-l
              from-background
              via-background/80
              to-transparent
              sm:w-28
            "
          />

          {/* IMPORTANT:
              No backdrop-blur.
              No full-width translucent rectangle.
              No background layer behind the carousel.
          */}

          <div className="overflow-hidden py-6">

            <motion.div
              className="
                flex
                w-max
                gap-5
              "
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedBanks.map((bank, index) => (
                <motion.div
                  key={`${bank.name}-${index}`}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    flex
                    h-32
                    w-56
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    px-5
                    shadow-sm
                    transition-shadow
                    duration-300
                    hover:shadow-xl
                    sm:h-36
                    sm:w-64
                  "
                >
                  <BankLogo
                    bankName={bank.name}
                    size={190}
                  />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* STATS */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="
            mt-12
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-4
          "
        >
          {[
            ["50+", "Banking Partners"],
            ["100%", "Dedicated Support"],
            ["24/7", "Customer Assistance"],
            ["1000+", "Customers Served"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="
                rounded-2xl
                border
                border-border
                bg-card
                p-5
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div
                className="
                  text-2xl
                  font-bold
                  text-primary
                  sm:text-3xl
                "
              >
                {value}
              </div>

              <div
                className="
                  mt-1
                  text-xs
                  text-muted-foreground
                  sm:text-sm
                "
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}