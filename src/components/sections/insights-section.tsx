import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Пицца Маргарита — классика навсегда",
    category: "Пицца",
    image: "https://cdn.poehali.dev/projects/e57ad843-1223-490c-8753-37fd9c21e23f/files/63c41ef6-61c1-440a-9da5-26da219486d5.jpg",
  },
  {
    title: "Роллы и воки — Азия в каждом кусочке",
    category: "Роллы и воки",
    image: "https://cdn.poehali.dev/projects/e57ad843-1223-490c-8753-37fd9c21e23f/files/ccb07490-8553-433c-89fb-2e2b47d68f76.jpg",
  },
  {
    title: "Сочный бургер с хрустящей картошкой фри",
    category: "Бургеры",
    image: "https://cdn.poehali.dev/projects/e57ad843-1223-490c-8753-37fd9c21e23f/files/d062a23f-d930-46ce-9dd7-d616bcdeeba2.jpg",
  },
  {
    title: "Молочные коктейли — десерт в стакане",
    category: "Напитки",
    image: "https://cdn.poehali.dev/projects/e57ad843-1223-490c-8753-37fd9c21e23f/files/15528df0-a2cf-4821-9d68-8090153b7193.jpg",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Меню
        </motion.p>

        <div className="divide-y divide-border">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href="#"
              className="group flex items-center justify-between py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{article.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="/menu"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Смотреть полное меню
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={articles[hoveredIndex].image || "/placeholder.svg"}
                alt={articles[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}