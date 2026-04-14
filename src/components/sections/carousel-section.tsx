import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/e57ad843-1223-490c-8753-37fd9c21e23f/files/63c41ef6-61c1-440a-9da5-26da219486d5.jpg",
  "https://cdn.poehali.dev/projects/e57ad843-1223-490c-8753-37fd9c21e23f/files/ccb07490-8553-433c-89fb-2e2b47d68f76.jpg",
  "https://cdn.poehali.dev/projects/e57ad843-1223-490c-8753-37fd9c21e23f/files/d062a23f-d930-46ce-9dd7-d616bcdeeba2.jpg",
  "https://cdn.poehali.dev/projects/e57ad843-1223-490c-8753-37fd9c21e23f/files/48170ffa-bf85-4e54-872f-cc4ff2e66db3.jpg",
  "https://cdn.poehali.dev/projects/e57ad843-1223-490c-8753-37fd9c21e23f/files/2a782339-6fb7-4b2c-9581-cdbf47cde476.jpg",
  "https://cdn.poehali.dev/projects/e57ad843-1223-490c-8753-37fd9c21e23f/files/15528df0-a2cf-4821-9d68-8090153b7193.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Готовим с любовью — для каждого гостя.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}