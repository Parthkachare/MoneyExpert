import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

const milestones = [
  {
    period: 'First 8 years',
    duration: '8',
    corpus: '₹16.2 lakh',
    description: 'Build your investment habit and give compounding time to begin.',
  },
  {
    period: 'Next 4 years',
    duration: '4',
    corpus: '₹32.6 lakh',
    description: 'Your contributions and accumulated returns work together.',
  },
  {
    period: 'Next 3 years',
    duration: '3',
    corpus: '₹50 lakh',
    description: 'Staying invested can help your corpus grow further over time.',
  },
];

export default function EightFourThreeRule() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 dark:from-navy dark:to-background">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            <TrendingUp className="h-4 w-4" />
            The power of staying invested
          </span>
          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            Understand the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              8-4-3 Rule
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple illustration of how a long-term SIP may grow as your
            contributions and returns compound over time.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {milestones.map((milestone, index) => (
            <motion.article
              key={milestone.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-2xl border border-blue-100 bg-white p-7 shadow-lg dark:border-blue-800 dark:bg-white/5"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {milestone.period}
                </span>
                <span className="text-5xl font-bold text-blue-700 dark:text-blue-300">
                  {milestone.duration}
                </span>
              </div>
              <p className="mb-2 text-sm text-muted-foreground">
                Illustrative corpus
              </p>
              <p className="mb-4 text-3xl font-bold">{milestone.corpus}</p>
              <p className="leading-relaxed text-muted-foreground">
                {milestone.description}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-muted-foreground">
          Illustration assumes a ₹10,000 monthly SIP and a steady 12% annualized
          return, with monthly compounding. Mutual fund returns are market-linked
          and not guaranteed; actual returns and investment values will vary.
        </p>
      </div>
    </section>
  );
}
