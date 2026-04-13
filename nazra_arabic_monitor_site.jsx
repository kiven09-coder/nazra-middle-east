export default function NazraArabicSite() {
  const features = [
    {
      title: "خريطة النزاعات المباشرة",
      description:
        "متابعة لحظية للأحداث الساخنة، التحركات العسكرية، والتطورات الميدانية مع إبراز مستوى الخطورة بشكل واضح.",
    },
    {
      title: "تتبع الطيران العسكري",
      description:
        "عرض تحركات الطائرات العسكرية وطائرات النقل والاستطلاع في الوقت الفعلي ضمن واجهة سهلة القراءة.",
    },
    {
      title: "تتبع السفن والقطع البحرية",
      description:
        "رصد مواقع السفن والقطع البحرية ومسارات الملاحة المهمة مع التركيز على المناطق الحساسة.",
    },
    {
      title: "تجميع الأخبار المفتوحة",
      description:
        "تجميع أحدث الأخبار العاجلة من مصادر متعددة في لوحة موحدة تساعد على فهم الصورة بسرعة.",
    },
    {
      title: "الطقس والكوارث",
      description:
        "مراقبة العواصف، الزلازل، الحرائق، وصور الأقمار الصناعية والتنبيهات الجوية في المناطق المتأثرة.",
    },
    {
      title: "البث المباشر والمصادر المرئية",
      description:
        "إمكانية عرض قنوات إخبارية وبثوث مباشرة وكاميرات حية لدعم المتابعة البصرية للأحداث.",
    },
    {
      title: "طبقات البنية التحتية",
      description:
        "إظهار طبقات مثل القواعد، خطوط الأنابيب، الكابلات البحرية، ومحطات الطاقة لفهم السياق الاستراتيجي.",
    },
    {
      title: "لوحة متابعة إقليمية",
      description:
        "تقسيم جغرافي واضح يسهّل الانتقال بين المناطق والأزمات المختلفة من شاشة واحدة.",
    },
  ];

  const regions = [
    { name: "الشرق الأوسط وشمال أفريقيا", items: "فلسطين، إيران، سوريا، اليمن، الخليج" },
    { name: "أوروبا الشرقية", items: "أوكرانيا، بولندا، البلقان، البلطيق" },
    { name: "أوروبا الغربية", items: "المملكة المتحدة، فرنسا، ألمانيا، الناتو" },
    { name: "أفريقيا جنوب الصحراء", items: "النزاعات، الأزمات، والتحولات السياسية" },
    { name: "روسيا والقوقاز", items: "التحركات العسكرية والتطورات الجيوسياسية" },
    { name: "آسيا الوسطى", items: "كازاخستان، أفغانستان، والتوترات الإقليمية" },
    { name: "الهند وجنوب آسيا", items: "الهند، باكستان، والتوترات الحدودية" },
    { name: "شرق آسيا", items: "الصين، مضيق تايوان، الكوريتان، اليابان" },
    { name: "جنوب شرق آسيا", items: "بحر الصين الجنوبي ودول الآسيان" },
    { name: "الأمريكتان", items: "الولايات المتحدة، كندا، أمريكا اللاتينية" },
    { name: "أوقيانوسيا والمحيط الهادئ", items: "أستراليا، نيوزيلندا، وجزر المحيط الهادئ" },
  ];

  const stats = [
    { label: "مصادر إخبارية", value: "+40" },
    { label: "مناطق متابعة", value: "11" },
    { label: "طبقات معلومات", value: "+50" },
    { label: "تحديثات", value: "مباشر" },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_left,rgba(34,197,94,0.12),transparent_25%),linear-gradient(to_bottom,rgba(15,23,42,0.65),rgba(2,6,23,1))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="mb-12 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/20 backdrop-blur">
                <span className="text-lg font-bold text-cyan-300">ن</span>
              </div>
              <div>
                <p className="text-xl font-bold tracking-tight">نظرة</p>
                <p className="text-sm text-slate-400">منصة عربية للمراقبة الجيوسياسية والمتابعة المباشرة</p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <a href="#features" className="transition hover:text-white">المميزات</a>
              <a href="#regions" className="transition hover:text-white">المناطق</a>
              <a href="#about" className="transition hover:text-white">عن المنصة</a>
            </nav>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                متابعة مباشرة للأزمات والتحركات والتقارير المفتوحة
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                نظرة — خريطة عربية حيّة لمتابعة <span className="text-cyan-300">النزاعات</span> والأخبار العاجلة
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                منصة تفاعلية مجانية لعرض النزاعات العالمية، الأخبار العاجلة، التحركات العسكرية، والطقس والكوارث،
                بالاعتماد على المصادر المفتوحة ضمن واجهة عربية واضحة وسريعة.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#regions"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:-translate-y-0.5"
                >
                  استعرض المناطق
                </a>
                <a
                  href="#features"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
                >
                  تعرّف على المميزات
                </a>
              </div>
            </div>

            <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">الوضع الحالي</p>
                    <p className="text-lg font-bold">لوحة متابعة مباشرة</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                    مباشر الآن
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                      <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                <p className="mb-3 text-sm font-semibold text-slate-300">أبرز ما تعرضه المنصة</p>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="rounded-2xl bg-white/5 p-3">الأحداث العاجلة من النقاط الساخنة</div>
                  <div className="rounded-2xl bg-white/5 p-3">مسارات الطيران والسفن والتحركات المهمة</div>
                  <div className="rounded-2xl bg-white/5 p-3">دمج الأخبار المفتوحة والبث الحي والخرائط</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-cyan-300">المميزات</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">كل ما تحتاجه في واجهة واحدة</h2>
          <p className="mt-4 text-slate-400">
            تم تصميم نظرة لتمنح المستخدم العربي نظرة شاملة وسريعة على التطورات الجيوسياسية والميدانية من خلال تقسيم واضح ومكونات سهلة التوسع.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <h3 className="mb-3 text-lg font-bold">{feature.title}</h3>
              <p className="text-sm leading-7 text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="regions" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold text-cyan-300">المناطق الإقليمية</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">انتقل مباشرة إلى المنطقة التي تهمك</h2>
            <p className="mt-4 text-slate-400">
              تقسيم جغرافي مشابه لفكرة الموقع الأصلي، لكن بصياغة عربية وهوية أبسط وأكثر وضوحًا.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {regions.map((region) => (
              <a
                key={region.name}
                href="#"
                className="group rounded-[24px] border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-300/30 hover:bg-slate-900"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-cyan-300">{region.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{region.items}</p>
                  </div>
                  <span className="rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-300">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
            <p className="mb-3 text-sm font-semibold text-cyan-300">عن نظرة</p>
            <h2 className="text-3xl font-black tracking-tight">نسخة عربية بروح حديثة</h2>
            <p className="mt-5 leading-8 text-slate-300">
              هذه الصفحة مستوحاة من فكرة الموقع المرجعي الذي يقدّم لوحة متابعة للأزمات والنزاعات العالمية، لكنها هنا معرّبة بالكامل ومهيأة للعرض من اليمين إلى اليسار، مع هوية اسمية جديدة تحمل اسم «نظرة».
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              يمكنك لاحقًا ربط هذه الواجهة بخرائط تفاعلية، API للأخبار، مصادر بث مباشر، أو بيانات جغرافية لحظية حتى تصبح منصة كاملة وليست مجرد واجهة تعريفية.
            </p>
          </div>

          <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-7">
            <p className="mb-3 text-sm font-semibold text-cyan-100">اقتراحات للتطوير</p>
            <ul className="space-y-3 text-sm leading-7 text-cyan-50/90">
              <li>إضافة خريطة تفاعلية باستخدام Mapbox أو Leaflet.</li>
              <li>ربط الأخبار بمصادر RSS أو واجهات APIs موثوقة.</li>
              <li>إنشاء صفحة منفصلة لكل إقليم بدل روابط تجريبية.</li>
              <li>إضافة شريط بحث وفلترة حسب نوع الحدث أو الدولة.</li>
              <li>دمج الوضع الليلي/النهاري ولوحة تحكم إدارية.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
