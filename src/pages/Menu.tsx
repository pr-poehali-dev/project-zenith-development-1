import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const categories = [
  { id: "pizza", label: "Пицца" },
  { id: "mini-rolls", label: "Мини роллы" },
  { id: "sets", label: "Сеты" },
  { id: "hot-rolls", label: "Запечённые роллы" },
  { id: "cold-rolls", label: "Холодные роллы" },
  { id: "snacks", label: "Снеки и закуски" },
  { id: "burgers", label: "Бургеры" },
  { id: "wok", label: "Вок и рис" },
  { id: "soups", label: "Супы" },
  { id: "sushi-pizza", label: "Суши-пицца" },
  { id: "drinks", label: "Напитки" },
]

const menuItems: Record<string, { name: string; price: string; desc?: string }[]> = {
  pizza: [
    { name: "Мясной пир с аджикой", price: "790 / 1040" },
    { name: "Нежный лосось", price: "860 / 1140" },
    { name: "Мясной пир", price: "860 / 1140" },
    { name: "Моцарелла", price: "650 / 850" },
    { name: "Морская", price: "990 / 1270" },
    { name: "Лесная", price: "820 / 1090" },
    { name: "Курочка с песто", price: "820 / 1090" },
    { name: "Карбонара", price: "680 / 920" },
    { name: "Капричоза", price: "640 / 860" },
    { name: "Зимняя", price: "910 / 1190" },
    { name: "Жюльен", price: "660 / 880" },
    { name: "Детская", price: "700 / 940" },
    { name: "Груша дорблю", price: "860 / 1150" },
    { name: "Венеция", price: "630 / 830" },
    { name: "Болоньезе", price: "900 / 1200" },
    { name: "Баварская", price: "740 / 990" },
    { name: "Аррива", price: "700 / 940" },
    { name: "Четыре сыра", price: "650 / 850" },
    { name: "Цезарь", price: "890 / 1190" },
    { name: "Том ям", price: "890 / 1190" },
    { name: "Салями и ветчина", price: "680 / 880" },
    { name: "Пеперони", price: "630 / 840" },
    { name: "Пеперони с томатами", price: "680 / 880" },
    { name: "Огненное барбекю", price: "710 / 950" },
    { name: "Чоризо", price: "700 / 940" },
    { name: "Бургер", price: "670 / 890" },
    { name: "Маргарита", price: "630 / 840" },
    { name: "Гавайская", price: "710 / 950" },
    { name: "Сладкая креветка", price: "820 / 1090" },
    { name: "Овощная", price: "640 / 840" },
    { name: "Курочка барбекю", price: "660 / 890" },
    { name: "Шашлычная", price: "890 / 1190" },
    { name: "Курочка терияки", price: "820 / 1090" },
    { name: "Ветчина грибы", price: "600 / 800" },
    { name: "Закрытая пицца", price: "от 800" },
    { name: "Римская пицца", price: "от 800" },
  ],
  "mini-rolls": [
    { name: "Мини-ролл с лососем", price: "280", desc: "8 шт" },
    { name: "Мини-ролл с креветкой", price: "240", desc: "8 шт" },
    { name: "Мини-ролл с помидором", price: "175", desc: "8 шт" },
    { name: "Мини-ролл с огурцом", price: "175", desc: "8 шт" },
  ],
  sets: [
    { name: "Сет «Большое ассорти»", price: "2400", desc: "48 шт" },
    { name: "Сет «Тёплое искушение»", price: "2050", desc: "40 шт" },
    { name: "Сет «Гурман»", price: "2650", desc: "32 шт" },
    { name: "Сет «Друзья по вкусу»", price: "3950", desc: "48 + 12 шт" },
    { name: "Креветка сет", price: "2050", desc: "38 шт" },
    { name: "Горячий сет", price: "1750", desc: "32 шт" },
    { name: "Гармония запечённого вкуса", price: "1650", desc: "32 шт" },
    { name: "Угощение самурая", price: "1650", desc: "32 шт" },
    { name: "Сет #1", price: "360", desc: "картошка фри" },
    { name: "Сет #2", price: "590", desc: "наггетс + курица + картошка фри" },
    { name: "Сет #3", price: "780", desc: "чикенбургер + наггетс + картошка фри" },
    { name: "Сет #4", price: "790", desc: "бургер + сок + колод.кальмары + наггетс" },
    { name: "Сет #5", price: "800", desc: "картошка деревенская + куриные стрипсы + куриные острые салки" },
    { name: "Сет #6", price: "1300", desc: "пицца-бургер 40см + картофельные крокеты 2 порции + луковые кольца 2 порции + 2 соуса на выбор" },
  ],
  "hot-rolls": [
    { name: "Ролл Унаги", price: "450", desc: "4 шт" },
    { name: "Ролл с креветкой", price: "450", desc: "4 шт" },
    { name: "Ролл с лососем", price: "470", desc: "4 шт" },
    { name: "Гриль ролл", price: "530", desc: "4 шт" },
    { name: "Угорь темпура", price: "460", desc: "4 шт" },
    { name: "Тунец темпура", price: "450", desc: "4 шт" },
    { name: "Цезарь темпура", price: "450", desc: "4 шт" },
    { name: "Лосось темпура", price: "450", desc: "4 шт" },
    { name: "Чикен спайси", price: "450", desc: "4 шт" },
    { name: "Запечённый бекон", price: "400", desc: "4 шт" },
    { name: "Запечённый с мидией", price: "430", desc: "4 шт" },
    { name: "Креветка с мидией", price: "480", desc: "4 шт" },
    { name: "Фиджи", price: "480", desc: "4 шт" },
    { name: "Калифорния с креветкой запечённой", price: "490", desc: "4 шт" },
    { name: "Том-ям запечённый", price: "490", desc: "4 шт" },
    { name: "Каприз запечённый", price: "480", desc: "4 шт" },
  ],
  "cold-rolls": [
    { name: "Филадельфия с угрем", price: "550", desc: "8 шт" },
    { name: "Филадельфия Премиум", price: "530", desc: "8 шт" },
    { name: "Филадельфия классическая", price: "480", desc: "8 шт" },
    { name: "Калифорния с угрем", price: "480", desc: "8 шт" },
    { name: "Самурай", price: "450", desc: "8 шт" },
    { name: "Калифорния с креветкой", price: "430", desc: "8 шт" },
    { name: "Ролл Цезарь с креветкой", price: "430", desc: "4 шт" },
    { name: "Снежный краб", price: "350", desc: "8 шт" },
    { name: "Спайси лосось", price: "430", desc: "8 шт" },
    { name: "Ролл Тамаго Угорь", price: "450", desc: "8 шт" },
    { name: "Сладкая креветка", price: "450", desc: "8 шт" },
    { name: "Сладкий тунец", price: "450", desc: "8 шт" },
    { name: "Инь-янь", price: "460", desc: "8 шт" },
    { name: "Гавайский", price: "430", desc: "8 шт" },
    { name: "Аляска", price: "460", desc: "8 шт" },
    { name: "Калифорния с лососем", price: "450", desc: "8 шт" },
    { name: "Ролл Цезарь с курицей", price: "420", desc: "8 шт" },
    { name: "Чиз Креветка", price: "430", desc: "8 шт" },
    { name: "Ясай", price: "350", desc: "8 шт" },
    { name: "Италия", price: "460", desc: "8 шт" },
    { name: "Королевская креветка", price: "480", desc: "8 шт" },
  ],
  snacks: [
    { name: "Куриные крылышки", price: "350", desc: "3 шт" },
    { name: "Куриные нагетсы", price: "170", desc: "6 шт" },
    { name: "Куриные стрипсы", price: "330", desc: "3 шт" },
    { name: "Креветка в панировке", price: "380", desc: "6 шт" },
    { name: "Картофель по-деревенски", price: "180", desc: "100 г" },
    { name: "Картофельные крокеты", price: "160", desc: "100 г" },
    { name: "Рыбные палочки", price: "250", desc: "6 шт" },
    { name: "Картофельные палочки", price: "160", desc: "7 шт" },
    { name: "Шарики темпура", price: "240", desc: "3 шт" },
    { name: "Кольца кальмара", price: "350", desc: "6 шт" },
    { name: "Луковые кольца", price: "170", desc: "6 шт" },
    { name: "Сырные палочки", price: "350", desc: "5 шт" },
    { name: "Картофель фри", price: "170", desc: "100 г" },
    { name: "Индийская лепёшка", price: "150" },
    { name: "Курочка-гриль", price: "660", desc: "1 шт" },
    { name: "Стрипс Цезарь ролл", price: "380", desc: "1 шт" },
    { name: "Ролл Креветка Голд", price: "390", desc: "1 шт" },
    { name: "Онигири", price: "250", desc: "курица, лосось, креветка" },
  ],
  burgers: [
    { name: "Бургер Премиум", price: "550 / 380" },
    { name: "Стрипсбургер", price: "490 / 400" },
    { name: "Греческий", price: "650 / 400" },
    { name: "Фишбургер Премиум", price: "250 / 180" },
    { name: "Цезарь бургер", price: "490 / 300" },
    { name: "Чикенбургер", price: "490 / 300" },
  ],
  wok: [
    { name: "Вок с овощами под соусом Терияки", price: "390" },
    { name: "Вок с креветкой в сладком соусе Чили", price: "490" },
    { name: "Вок с курицей под сливочным соусом", price: "460" },
    { name: "Вок «Умами Океан»", price: "550" },
    { name: "Вок «Куриный с фунчозой»", price: "460" },
    { name: "Рис с курочкой по-азиатски", price: "390" },
    { name: "Паста Карбонара", price: "530" },
  ],
  soups: [
    { name: "Том ям «Морской тайфун»", price: "630", desc: "острый суп с морепродуктами" },
    { name: "Том ям с цыплёнком по-тайски", price: "550", desc: "классический тайский суп с курицей" },
  ],
  "sushi-pizza": [
    { name: "Суши-пицца с креветкой", price: "640", desc: "рис, креветка, огурец, сыр маскарпоне, соус" },
    { name: "Суши-пицца с лососем", price: "690", desc: "рис, лосось, помидор, сыр маскарпоне, соус" },
    { name: "Суши-пицца с курицей", price: "640", desc: "рис, курица, болгарский перец, сыр маскарпоне" },
  ],
  drinks: [
    { name: "Эспрессо", price: "90" },
    { name: "Двойной эспрессо", price: "180" },
    { name: "Флэт уайт", price: "160 / 240" },
    { name: "Американо", price: "130 / 190" },
    { name: "Капучино", price: "160 / 240" },
    { name: "Латте", price: "160 / 240" },
    { name: "Чай малиново-мятный", price: "140" },
    { name: "Чай ягодно-имбирный", price: "140" },
    { name: "Чай облепиховый", price: "140" },
    { name: "Чай имбирно-лимонный", price: "140" },
    { name: "Чай вишнёвый пунчай", price: "140" },
    { name: "Коктейль ванильный", price: "250 / 300 / 400" },
    { name: "Коктейль шоколадный", price: "250 / 300 / 400" },
    { name: "Коктейль клубничный", price: "250 / 300 / 400" },
    { name: "Коктейль вишнёвый", price: "250 / 300 / 400" },
    { name: "Кока-кола стекло", price: "160", desc: "330 мл" },
    { name: "Кока-кола", price: "150" },
    { name: "Пепси", price: "150" },
    { name: "Боржоми стекло", price: "180" },
    { name: "Липтон в ассортименте", price: "120" },
    { name: "Морс смородина", price: "130" },
    { name: "Морс клюква", price: "130" },
    { name: "Морс брусника", price: "130" },
    { name: "Морс облепиха", price: "130" },
  ],
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("pizza")

  const items = menuItems[activeCategory] || []

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Icon name="ArrowLeft" size={20} />
            <span className="font-serif text-xl">Пицца Печь СоМо</span>
          </Link>
          <a
            href="https://wa.me/79515217770"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Заказать
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <motion.h1
          className="text-4xl md:text-6xl font-serif text-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Меню
        </motion.h1>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pizza note */}
        {activeCategory === "pizza" && (
          <p className="text-muted-foreground text-sm mb-6">Цены: 230г / 300г. Сырный бортик +30₽ / +40₽</p>
        )}
        {activeCategory === "mini-rolls" && (
          <p className="text-muted-foreground text-sm mb-6">Имбирь — 15₽, Васаби — 15₽</p>
        )}
        {activeCategory === "cold-rolls" && (
          <p className="text-muted-foreground text-sm mb-6">Палочки и соевый соус идут в комплекте — 20₽</p>
        )}

        {/* Items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="bg-secondary rounded-xl px-5 py-4 flex items-center justify-between gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <div>
                  <p className="font-medium text-foreground">{item.name}</p>
                  {item.desc && <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>}
                </div>
                <span className="text-primary font-serif text-lg whitespace-nowrap">{item.price} ₽</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">Готовы заказать?</p>
          <a
            href="https://wa.me/79515217770"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Icon name="MessageCircle" size={20} />
            Написать в WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  )
}
