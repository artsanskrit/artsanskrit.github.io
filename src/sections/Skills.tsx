import { motion } from 'framer-motion';
import { SkillBar } from '../components/SkillBar';

const skills = [
  { name: 'UI/UX Design', percentage: 95 },
  { name: 'Branding', percentage: 90 },
  { name: 'Illustration', percentage: 85 },
  { name: 'Motion Design', percentage: 80 },
];

export function Skills() {
  return (
    <section
      id="powers"
      className="py-24 bg-gradient-to-br from-[#FFF0F0] via-[#FFF5F5] to-[#FFF8F8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
              Skills
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3">
              Superhuman <span className="text-primary">Powers</span>
            </h2>
            <p className="text-foreground/60 mt-4 text-lg">
              Expert skills that bring your vision to life
            </p>
            
            {/* Decorative Element */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Always Learning</p>
                <p className="text-sm text-foreground/60">Constantly upgrading my skills</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-soft"
          >
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 0.15}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
