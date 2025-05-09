import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-800">FreshTouch</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#services"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#gallery"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Наши работы
            </a>
            <a
              href="#testimonials"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#prices"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Цены
            </a>
            <a
              href="#about"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              О нас
            </a>
          </nav>
          <Button className="bg-blue-700 hover:bg-blue-800">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="md:w-1/2 space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Профессиональная химчистка мебели и ковров
            </h1>
            <p className="text-base md:text-lg text-blue-100">
              Вернем вашей мебели и коврам первозданный вид. Качественно,
              быстро, с гарантией результата.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="default"
                className="bg-white text-blue-800 hover:bg-blue-50 w-full sm:w-auto"
              >
                Заказать химчистку
              </Button>
              <Button
                size="default"
                variant="outline"
                className="text-white border-white hover:bg-blue-800/30 w-full sm:w-auto"
              >
                Рассчитать стоимость
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://cdn.poehali.dev/files/31956beb-59b8-48bf-ac02-20905eff1ea4.png"
              alt="Химчистка дивана"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white h-6 md:h-12 rounded-t-[50%]"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Sofa",
                title: "Химчистка мягкой мебели",
                description:
                  "Диваны, кресла, стулья, матрасы, пуфы и другая мягкая мебель.",
              },
              {
                icon: "RugRoll",
                title: "Химчистка ковров",
                description:
                  "Ковры любых размеров, ковровые покрытия, ковролин, ковровая плитка.",
              },
              {
                icon: "Car",
                title: "Химчистка салона авто",
                description:
                  "Сиденья, потолок, двери, коврики и багажное отделение.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:-translate-y-1 transition-transform duration-300"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Icon
                      name={service.icon}
                      className="h-8 w-8 text-blue-600"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            До и После
          </h2>

          <Tabs defaultValue="furniture" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="furniture">Мебель</TabsTrigger>
                <TabsTrigger value="carpets">Ковры</TabsTrigger>
                <TabsTrigger value="car">Авто</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="furniture" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    before:
                      "https://images.unsplash.com/photo-1558211662-a7fd206d67e7?q=80&w=500",
                    after:
                      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=500",
                  },
                  {
                    before:
                      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=500",
                    after:
                      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden group h-72"
                  >
                    <img
                      src={item.before}
                      alt="До химчистки"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-0"
                    />
                    <img
                      src={item.after}
                      alt="После химчистки"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white/80 px-4 py-2 rounded-full font-medium text-blue-800 shadow-md">
                        Наведите для просмотра результата
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="carpets">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    before:
                      "https://images.unsplash.com/photo-1603793303277-ed67787545e5?q=80&w=500",
                    after:
                      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=500",
                  },
                  {
                    before:
                      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=500",
                    after:
                      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden group h-72"
                  >
                    <img
                      src={item.before}
                      alt="До химчистки"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-0"
                    />
                    <img
                      src={item.after}
                      alt="После химчистки"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white/80 px-4 py-2 rounded-full font-medium text-blue-800 shadow-md">
                        Наведите для просмотра результата
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="car">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    before:
                      "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?q=80&w=500",
                    after:
                      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=500",
                  },
                  {
                    before:
                      "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=500",
                    after:
                      "https://images.unsplash.com/photo-1627531937355-87dd7adbdf12?q=80&w=500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden group h-72"
                  >
                    <img
                      src={item.before}
                      alt="До химчистки"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-0"
                    />
                    <img
                      src={item.after}
                      alt="После химчистки"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white/80 px-4 py-2 rounded-full font-medium text-blue-800 shadow-md">
                        Наведите для просмотра результата
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "Clock",
                title: "Быстрое выполнение",
                description:
                  "Сроки выполнения от 2 часов, в зависимости от объема работ",
              },
              {
                icon: "ShieldCheck",
                title: "Безопасные средства",
                description:
                  "Используем только сертифицированную экологичную химию",
              },
              {
                icon: "Award",
                title: "Гарантия качества",
                description: "Даем гарантию на все виды выполненных работ",
              },
              {
                icon: "Wallet",
                title: "Удобная оплата",
                description:
                  "Наличный и безналичный расчет, оплата после выполнения работ",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-blue-800 p-4 rounded-full mb-4">
                  <Icon
                    name={advantage.icon}
                    className="h-8 w-8 text-blue-200"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {advantage.title}
                </h3>
                <p className="text-blue-200">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Отзывы клиентов
          </h2>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                {
                  name: "Елена Смирнова",
                  rating: 5,
                  text: "Заказывала химчистку дивана после двух котов и маленького ребенка. Думала, что выбросить придется, но мастера из FreshTouch творят чудеса! Диван как новый, без пятен и запахов. Очень довольна результатом!",
                },
                {
                  name: "Александр Петров",
                  rating: 5,
                  text: "Обратился для чистки ковра после ремонта. Быстро приехали, качественно почистили. Все пыль и пятна исчезли. Буду обращаться еще и рекомендовать знакомым.",
                },
                {
                  name: "Мария Иванова",
                  rating: 5,
                  text: "Заказывала химчистку матраса и дивана. Результат превзошел все ожидания! Матрас вычистили идеально, хотя пятна были очень старыми. Рекомендую всем, кто ценит чистоту и качество.",
                },
                {
                  name: "Дмитрий Козлов",
                  rating: 4,
                  text: "Обращался для чистки салона автомобиля. Работу выполнили хорошо, но немного запоздали по времени. В целом, результатом доволен, машина внутри как новая.",
                },
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            className="h-5 w-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-slate-700 mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <p className="font-semibold text-blue-800">
                        {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>

      {/* Price Section */}
      <section id="prices" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Стоимость услуг
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-800">
                  Химчистка мебели
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Диван двухместный</span>
                    <span className="font-semibold">от 2500 ₽</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Диван трехместный</span>
                    <span className="font-semibold">от 3500 ₽</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Кресло</span>
                    <span className="font-semibold">от 1500 ₽</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Матрас односпальный</span>
                    <span className="font-semibold">от 2000 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Матрас двуспальный</span>
                    <span className="font-semibold">от 3000 ₽</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-800">
                  Химчистка ковров
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Ковер (за м²)</span>
                    <span className="font-semibold">от 300 ₽</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Ковролин (за м²)</span>
                    <span className="font-semibold">от 250 ₽</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Ковровая плитка (за м²)</span>
                    <span className="font-semibold">от 350 ₽</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Выведение сложных пятен</span>
                    <span className="font-semibold">от 500 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Устранение запахов</span>
                    <span className="font-semibold">от 400 ₽</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-800">
                  Химчистка авто
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Химчистка сидений</span>
                    <span className="font-semibold">от 3000 ₽</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Химчистка потолка</span>
                    <span className="font-semibold">от 2000 ₽</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Химчистка дверных карт</span>
                    <span className="font-semibold">от 1500 ₽</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Химчистка багажника</span>
                    <span className="font-semibold">от 2000 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Комплексная химчистка</span>
                    <span className="font-semibold">от 7000 ₽</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              Точная стоимость услуг зависит от состояния изделия, сложности
              загрязнений и объема работ.
            </p>
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
              Получить точный расчет
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Наше оборудование и средства
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-800 flex items-center">
                <Icon name="Wrench" className="mr-2 h-5 w-5 text-blue-600" />
                Профессиональное оборудование
              </h3>
              <p className="text-slate-700 mb-4">
                Мы используем только профессиональное оборудование ведущих
                производителей, которое эффективно удаляет загрязнения, не
                повреждая обрабатываемую поверхность:
              </p>
              <ul className="space-y-2">
                {[
                  "Экстракторы Karcher с регулируемым давлением",
                  "Роторные машины для глубокой чистки ковров",
                  "Пароочистители для удаления бактерий и клещей",
                  "Профессиональные пылесосы с HEPA-фильтрами",
                  "Аппараты для выведения сложных пятен",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icon
                      name="Check"
                      className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-800 flex items-center">
                <Icon name="Flask" className="mr-2 h-5 w-5 text-blue-600" />
                Безопасные чистящие средства
              </h3>
              <p className="text-slate-700 mb-4">
                В работе мы применяем только сертифицированные чистящие
                средства, которые эффективно справляются с загрязнениями и
                безопасны для людей и животных:
              </p>
              <ul className="space-y-2">
                {[
                  "Гипоаллергенные составы без агрессивных химикатов",
                  "Биоразлагаемые шампуни для мягкой мебели",
                  "Энзимные пятновыводители для органических загрязнений",
                  "Специальные средства для удаления запахов",
                  "Защитные пропитки для продления срока службы изделий",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icon
                      name="Check"
                      className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                О компании FreshTouch
              </h2>
              <p className="text-slate-700 mb-4">
                Компания FreshTouch специализируется на профессиональной
                химчистке мягкой мебели, ковров и салонов автомобилей уже более
                5 лет. За это время мы обслужили более 3000 клиентов и получили
                сотни положительных отзывов.
              </p>
              <p className="text-slate-700 mb-4">
                Наша команда состоит из опытных специалистов, которые регулярно
                проходят обучение новейшим методикам чистки. Мы постоянно
                совершенствуемся, обновляем оборудование и расширяем спектр
                используемых профессиональных средств.
              </p>
              <p className="text-slate-700">
                Наша миссия — делать жизнь наших клиентов чище, уютнее и
                комфортнее. Мы ценим доверие клиентов и стремимся полностью
                оправдать их ожидания.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=400"
                  alt="Команда FreshTouch"
                  className="rounded-lg h-48 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=400"
                  alt="Офис компании"
                  className="rounded-lg h-48 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400"
                  alt="Процесс работы"
                  className="rounded-lg h-48 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=400"
                  alt="Оборудование компании"
                  className="rounded-lg h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Готовы вернуть чистоту вашему дому?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Закажите химчистку прямо сейчас и получите скидку 10% на первый
            заказ. Мы ответим на все ваши вопросы и подберем оптимальное
            решение.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-800 hover:bg-blue-50"
            >
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Позвонить
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-blue-800"
            >
              <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">FreshTouch</span>
              </div>
              <p>
                Профессиональная химчистка мягкой мебели и ковровых покрытий.
                Работаем с любыми видами загрязнений.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Химчистка диванов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Химчистка ковров
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Химчистка матрасов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Химчистка автомобилей
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Icon
                    name="Phone"
                    className="mr-2 h-5 w-5 text-blue-400 shrink-0"
                  />
                  <span>+7 (900) 123-45-67</span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Mail"
                    className="mr-2 h-5 w-5 text-blue-400 shrink-0"
                  />
                  <span>info@freshtouch.ru</span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="MapPin"
                    className="mr-2 h-5 w-5 text-blue-400 shrink-0"
                  />
                  <span>г. Москва, ул. Примерная, д. 123</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Режим работы</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Пн-Пт:</span>
                  <span>9:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Сб:</span>
                  <span>10:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Вс:</span>
                  <span>10:00 - 16:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} FreshTouch. Все права защищены.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
