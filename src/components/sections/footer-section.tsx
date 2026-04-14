import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const footerLinks = [
  { label: "Меню", href: "#" },
  { label: "Галерея", href: "#" },
  { label: "Цены", href: "#" },
  { label: "Контакты", href: "#" },
]

export function FooterSection() {
  const [email, setEmail] = useState("")

  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-300 via-green-200 to-emerald-200 opacity-30 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Logo and links */}
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-serif text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Пицца Печь.
            </motion.h2>

            <nav className="flex flex-wrap gap-6 mt-8">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  data-clickable
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="mt-8 flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="tel:+79515217770"
                className="text-foreground text-xl font-serif hover:text-primary transition-colors"
                data-clickable
              >
                +7 (951) 521-77-70
              </a>
              <p className="text-muted-foreground text-sm">Ежедневно с 10:00 до 23:00</p>
            </motion.div>
          </div>

          {/* Contact block */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col gap-6">
            <div>
              <p className="text-muted-foreground text-sm mb-2 uppercase tracking-widest">Адрес</p>
              <p className="text-foreground text-base">ул. Ленина, 45, посёлок Октябрьский</p>
              <a
                href="https://yandex.ru/maps/?text=посёлок+Октябрьский+ул.+Ленина+45"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-primary hover:underline"
                data-clickable
              >
                Как добраться →
              </a>
            </div>
            <a
              href="https://wa.me/79515217770"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors text-center justify-center"
              data-clickable
            >
              <ArrowRight className="w-5 h-5" />
              Написать в WhatsApp
            </a>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">2025 Пицца Печь СоМо. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Конфиденциальность
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}