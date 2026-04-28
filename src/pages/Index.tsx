import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">⚖️ Юлия Сосновцева</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                Обо мне
              </a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
                Услуги
              </a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">
                Кейсы
              </a>
              <a href="#notes" className="text-slate-600 hover:text-slate-900 transition-colors">
                Заметки
              </a>
              <a href="#law-news" className="text-slate-600 hover:text-slate-900 transition-colors">
                Что нового в законе?
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Принимаю клиентов</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Юрист, который говорит <span className="text-indigo-600">по-человечески</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Меня зовут Юлия Сосновцева. Помогаю ИП и юридическим лицам находить лазейки в законах, защищать бизнес и решать споры — без скучных костюмов и непонятных терминов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Записаться на консультацию
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Смотреть кейсы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Scale" className="h-6 w-6" />
                    <span className="font-semibold">Юридическая экспертиза</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Lightbulb" className="h-6 w-6" />
                    <span className="font-semibold">Нахожу нестандартные решения</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="ShieldCheck" className="h-6 w-6" />
                    <span className="font-semibold">Работаю с ИП и юридическими лицами</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" className="h-6 w-6" />
                    <span className="font-semibold">Объясняю сложное простыми словами</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Обо мне</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Юрист с живым взглядом на право и нестандартным подходом к задачам
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Добро пожаловать в юридическую лабораторию!</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Я не тот юрист, что скучает в суде в стандартном костюме. Я тот, кто разбирает сложные случаи за чашкой кофе, переводит правовую инфу с юридического на человеческий — и находит выход там, где другие видят тупик.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Веду канал, где делюсь реальными кейсами, инсайтами и юридическим юмором. Потому что право — это серьёзно, но не скучно.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Работаю с ИП и юридическими лицами</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Договоры</Badge>
                  <Badge variant="secondary">Споры</Badge>
                  <Badge variant="secondary">Защита активов</Badge>
                  <Badge variant="secondary">Регистрация бизнеса</Badge>
                  <Badge variant="secondary">Корпоративное право</Badge>
                  <Badge variant="secondary">Взыскание долгов</Badge>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.poehali.dev/projects/aa8fff1d-7f08-4958-950a-69e1e67bfd2f/bucket/cb68d955-6703-4ec9-84ac-ae69a66ddaf1.jpg"
                  alt="Юлия Сосновцева — юрист"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/80 to-transparent p-4">
                  <p className="text-white font-semibold text-lg">Юлия Сосновцева</p>
                  <p className="text-indigo-200 text-sm">Юрист · Блогер · Эксперт</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Услуги</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Юридическая помощь без лишней воды — только по делу
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Юридический консалтинг</CardTitle>
                <CardDescription>
                  Персональная консультация по вашей ситуации — без шаблонных ответов, только конкретика.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✦ Разбор вашего вопроса с нуля</li>
                  <li>✦ Анализ рисков и возможностей</li>
                  <li>✦ Пошаговый план действий</li>
                  <li>✦ Ответы на все вопросы</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Договоры и документы</CardTitle>
                <CardDescription>Составлю или проверю любой договор — чтобы не было сюрпризов потом.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✦ Составление с нуля</li>
                  <li>✦ Проверка на риски</li>
                  <li>✦ Защитные клаузулы</li>
                  <li>✦ Переговоры об условиях</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Scale" className="h-6 w-6 text-rose-600" />
                </div>
                <CardTitle>Защита интересов</CardTitle>
                <CardDescription>Представлю ваши интересы там, где это важно — в суде, переговорах, спорах.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✦ Споры с контрагентами</li>
                  <li>✦ Защита в суде</li>
                  <li>✦ Переговоры с оппонентом</li>
                  <li>✦ Претензионная работа</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Избранные кейсы</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Реальные истории — имена изменены, суть сохранена. Я не монстр, конфиденциальность соблюдаю 😉
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <div className="text-5xl mb-3">🐱🏠</div>
                  <p className="font-semibold text-lg">Кот и квартира</p>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Завещание с котом в нагрузку</CardTitle>
                    <CardDescription>
                      Клиент решил завещать квартиру вместе с котом — одним документом. Спойлер: так нельзя, но выход нашёлся.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Наследство</Badge>
                  <Badge variant="outline">Нотариус</Badge>
                  <Badge variant="outline">Нестандартный кейс</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>Решено к радости кота и наследника</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-rose-500 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <div className="text-5xl mb-3">💼⚡</div>
                  <p className="font-semibold text-lg">Бизнес под угрозой</p>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Контрагент исчез с предоплатой</CardTitle>
                    <CardDescription>
                      Партнёр взял 800 000 ₽, перестал выходить на связь и сменил телефон. Казалось — деньги потеряны.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Споры</Badge>
                  <Badge variant="outline">Взыскание долгов</Badge>
                  <Badge variant="outline">Бизнес</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>Деньги возвращены через суд</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section id="notes" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Заметки</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Мысли вслух — о праве, практике и жизни юриста
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-indigo-100 text-indigo-800">Про профессию</Badge>
                  <span className="text-sm text-slate-400">Заметка #1</span>
                </div>
                <CardTitle className="text-xl leading-snug">
                  Перевожу с юридического на русский — что это значит на самом деле?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <img
                    src="https://cdn.poehali.dev/projects/aa8fff1d-7f08-4958-950a-69e1e67bfd2f/bucket/0a963fa9-4a8a-4b65-8d78-2a0cd11bebc5.JPG"
                    alt="Последние деньки лета"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <img
                    src="https://cdn.poehali.dev/projects/aa8fff1d-7f08-4958-950a-69e1e67bfd2f/bucket/c7f07ab1-c5aa-4d3a-9a29-76ed502cfd11.JPG"
                    alt="Кофе и работа"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Казалось бы, всё очевидно: юрист знает закон, а дальше просто меняет термины на бытовые. Но я с таким подходом не согласна.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Возьмём статью 10 ГК РФ о злоупотреблении правом. Чтобы перевести её на «человеческий» — я прочитала гору судебной практики и разъяснений Верховного суда, прослушала курсы по повышению квалификации у гуру юридической практики и сама применяла эту норму в реальных кейсах.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Всё это нужно, чтобы при «переводе» норма сработала именно на благо клиента — с прицелом на его конкретную ситуацию.
                </p>
                <p className="text-slate-700 font-medium italic">
                  А ваш юрист понимает дух закона? ☺️
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Law News Section */}
      <section id="law-news" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Что нового в законе?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Важные изменения в законодательстве — коротко и по делу
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-amber-400">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-amber-100 text-amber-800">⚡ Банки и финансы</Badge>
                  <span className="text-sm text-slate-400">С 1 сентября 2025</span>
                </div>
                <CardTitle className="text-xl leading-snug">
                  Банки смогут заморозить снятие наличных на 48 часов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  С 1 сентября 2025 года банки будут ограничивать на 48 часов возможность снятия денег — до 50 000 рублей в сутки — при наличии признаков мошенничества.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                  <p className="text-amber-900 font-medium mb-2">Один из признаков мошенничества:</p>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Запрос на снятие наличных в течение 24 часов с момента досрочного закрытия вклада на сумму более 200 000 рублей.
                  </p>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Это значит: снять наличные свыше 200 000 рублей при досрочном закрытии вклада в один день <span className="font-semibold text-slate-800">не получится</span>.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Учитывая, сколько сейчас денег граждан во вкладах — считаю это крайне полезная информация.
                </p>
                <p className="text-slate-700 font-medium italic mt-4">
                  Предупреждён — значит вооружён 📝
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Разберём ваш вопрос за чашкой кофе ☕</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Есть юридический вопрос? Не ищите ответ в интернете — это плохая идея. Напишите мне.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Связаться со мной</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Будь то сложный договор, спор с партнёром или вопрос про кота в завещании — пишите в Telegram. Отвечаю лично.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Icon name="Send" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <p className="text-slate-300">Для срочных вопросов и консультаций</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Icon name="BookOpen" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Канал</p>
                    <p className="text-slate-300">Кейсы, инсайты и юридический юмор</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription className="text-slate-300">
                  Расскажите о своей ситуации — отвечу и назначим удобное время.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Телефон / Telegram</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="+7 или @nickname"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Опишите ситуацию</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Что случилось? Чем могу помочь?"
                  />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Отправить заявку
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-white mb-4 md:mb-0">⚖️ Юлия Сосновцева</div>
            <p className="text-center md:text-right">
              © 2024 Юлия Сосновцева. Ваш эксперт по праву и неправде 😉
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}