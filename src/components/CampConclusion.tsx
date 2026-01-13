import { Heart, Sparkles, Users, Lightbulb, Target, Handshake, ArrowRight } from "lucide-react";
import campFarewell from "@/assets/camp-farewell.jpg";
import reflectivePortrait from "@/assets/reflective-portrait.jpg";

const lessons = [
  {
    icon: Lightbulb,
    title: "G'oyani realga aylantirish",
    description: "Xayoldagi fikr — faqat boshlanish. Uni qadam-baqadam amalga oshirish san'ati.",
  },
  {
    icon: Target,
    title: "Muammo validatsiyasi",
    description: "Avval muammoni tushun, keyin yechim izla. Foydalanuvchi bilan gaplash — birinchi qadam.",
  },
  {
    icon: Sparkles,
    title: "Pitch qilish",
    description: "3 daqiqada g'oyangni dunyoga tushuntir. Oddiy so'zlar, katta ma'no.",
  },
  {
    icon: Handshake,
    title: "Jamoada ishlash",
    description: "Yolg'iz tez yurasan, jamoa bilan uzoqqa borasan.",
  },
];

const mentors = [
  "Alisher Sadullayev Zafarovich",
  "Abdulaziz Yakubov", 
  "Orzugul Umarovna",
  "Azizbek Kurbonov",
  "Alisher Alimov",
  "Gulasal Butaeva",
  "Firdavs O'rinov",
];

export default function CampConclusion() {
  return (
    <section
      id="conclusion"
      aria-labelledby="conclusion-title"
      className="relative min-h-screen bg-gradient-sunset py-16 md:py-24"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wide uppercase mb-4">
            <Heart className="w-4 h-4" aria-hidden="true" />
            <span>Shaxsiy Tajriba</span>
          </span>
          <h2
            id="conclusion-title"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6"
          >
            Xulosa: Oltiariqdan boshlangan yo'l —{" "}
            <span className="text-gradient-warm">7 kunlik o'sish</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Camp tajribasi • 7 kun • Shaxsiy o'sish
          </p>
        </header>

        {/* Main Story */}
        <article className="bg-card rounded-2xl shadow-elevated p-6 md:p-10 lg:p-12 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 first-letter:text-5xl first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              Dadam "Ha, borib kel" deganda, yuragimda hayajon va xavotir aralash edi — Oltiariq tumanidagi oddiy o'quvchi sifatida bu sayohat qanchalik katta qadam ekanini sezardim. Campga yetib kelganimda, ko'pchilik "prezident maktabi"dan ekan — men o'zimni biroz chetda his qildim. Lekin 4 kishilik yotoqxonadagi birinchi kechadan boshlab, bu his yo'qola boshladi: biz barchasi bir maqsad sari intilgan yoshlar edik.
            </p>

            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6">
              Har kuni yangi mavzu, yangi ko'nikmalar: universitetlar haqida ma'lumotlar, ML asoslari, startup g'oyalarini shakllantirish, pitch qilish san'ati va eng muhimi — jamoada ishlash. Boshlanishda startaplar haqida tushuncham juda kam edi, lekin bu 7 kun davomida men <strong className="text-primary">g'oyani realga aylantirishni</strong>, <strong className="text-primary">muammoni to'g'ri aniqlashni</strong>, <strong className="text-primary">3 daqiqada g'oyamni tushuntirishni</strong> va <strong className="text-primary">jamoa bilan birgalikda natijalarga erishishni</strong> o'rgandim.
            </p>

            <p className="text-foreground text-lg md:text-xl leading-relaxed">
              Mentorlarimiz — Alisher Sadullayev Zafarovich, Abdulaziz Yakubov, Orzugul Umarovna, Azizbek Kurbonov, Alisher Alimov, Gulasal Butaeva, Firdavs O'rinov va butun <strong>Startup Ambassadors</strong> hamda <strong>Yoshlar Ventures</strong> jamoasi — menga nafaqat bilim, balki ishonch berdilar. Ular aytishdi: "Sen ham qila olasan" — va men bunga ishondim.
            </p>
          </div>
        </article>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.title}
              className="group bg-card hover:bg-secondary/50 rounded-xl p-6 shadow-warm transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <lesson.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{lesson.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{lesson.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <figure className="relative overflow-hidden rounded-2xl shadow-elevated group animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <img
              src={campFarewell}
              alt="Campdagi xayrlashuv sahnasi — ishtirokchilar quchoqlashmoqda, kechki quyosh nurida"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 text-primary-foreground text-sm">
              Xayrlashuv lahzasi — do'stlik abadiy qoladi
            </figcaption>
          </figure>

          <figure className="relative overflow-hidden rounded-2xl shadow-elevated group animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <img
              src={reflectivePortrait}
              alt="Yosh ishtirokchi kelajak haqida o'ylamoqda — oyna oldida reflektiv lahza"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 text-primary-foreground text-sm">
              Kelajakka ishonch — bu camp menga bergan eng katta sovg'a
            </figcaption>
          </figure>
        </div>

        {/* Future Plans */}
        <div className="bg-gradient-hope rounded-2xl p-8 md:p-12 mb-12 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <div className="flex items-start gap-4 mb-6">
            <Users className="w-8 h-8 text-primary flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                Kelajakka qarab
              </h3>
              <p className="text-foreground text-lg leading-relaxed">
                Endi men o'rganilganlarni amalda sinab ko'rmoqchiman. Startaplarga ishlash, mintaqamdagi yoshlarni qo'llab-quvvatlash va texnologiya orqali haqiqiy muammolarni hal qilish — mening yo'lim shu. <span className="font-semibold text-primary">Oltiariqdan chiqqan oddiy o'quvchi endi katta orzularga intiladi</span> — va bu camp menga dastlabki qadamni qo'yishga yordam berdi.
              </p>
            </div>
          </div>
        </div>

        {/* Gratitude Section */}
        <aside className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-muted-foreground mb-4">Alohida minnatdorchilik:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {mentors.map((mentor) => (
              <span
                key={mentor}
                className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {mentor}
              </span>
            ))}
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Startup Ambassadors
            </span>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Yoshlar Ventures
            </span>
          </div>
        </aside>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          <p className="text-foreground text-lg md:text-xl mb-6 font-serif italic">
            "Har bir katta sayohat bitta qadam bilan boshlanadi. Mening qadamim — bu camp edi."
          </p>
          <a
            href="#submit-story"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-warm hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-glow-pulse"
            role="button"
            aria-label="O'z hikoyangizni yuboring"
          >
            <span>Endi o'z hikoyangizni yuboring</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <p className="text-muted-foreground text-sm mt-4">
            Siz ham o'z g'oyangizni amalga oshiring — biz yordam beramiz.
          </p>
        </div>
      </div>
    </section>
  );
}
