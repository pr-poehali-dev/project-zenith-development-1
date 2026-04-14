import { motion } from "framer-motion"

function PizzaAnimation() {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="text-7xl md:text-8xl"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        🍕
      </motion.div>
    </div>
  )
}

function MenuAnimation() {
  const items = ["🍣 Роллы", "🍜 Воки", "🍔 Бургеры", "🍟 Фри"]
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="text-sm font-medium text-foreground bg-foreground/5 px-4 py-1.5 rounded-full"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  )
}

function DeliveryAnimation() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <motion.div
        className="text-5xl"
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        🛵
      </motion.div>
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">Быстрая доставка</span>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Наше меню
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <PizzaAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Пицца из печи</h3>
              <p className="text-muted-foreground text-sm mt-1">Тесто на живой закваске, томатный соус и свежая моцарелла.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <MenuAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Роллы, воки и бургеры</h3>
              <p className="text-muted-foreground text-sm mt-1">Большой выбор блюд на любой вкус — всё свежее и вкусное.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <DeliveryAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Навынос и в зале</h3>
              <p className="text-muted-foreground text-sm mt-1">Заберите заказ сами или насладитесь едой у нас в уютном зале.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
