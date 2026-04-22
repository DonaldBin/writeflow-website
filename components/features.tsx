import { Keyboard, MousePointerClick, Cpu, Mail, MessageCircle, FileText, ClipboardList } from "lucide-react";

const features = [
  {
    icon: Keyboard,
    title: "Tab 智能续写",
    description:
      "光标处按下 Tab，AI 自动理解上下文，续写出连贯内容。写邮件、发推文、填表单，一气呵成。",
  },
  {
    icon: MousePointerClick,
    title: "划词即时改写",
    description:
      "选中任意网页上的文字，一键改写、润色、翻译、总结。无需复制粘贴，原地完成。",
  },
  {
    icon: Cpu,
    title: "多模型智能路由",
    description:
      "自动调用 DeepSeek + Kimi 双引擎，短文本快、长文本稳，智能选择最优模型。",
  },
];

const useCases = [
  { icon: Mail, label: "写邮件" },
  { icon: MessageCircle, label: "发社交媒体" },
  { icon: FileText, label: "写报告/论文" },
  { icon: ClipboardList, label: "填表单/写评价" },
];

export function Features() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            核心功能
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            三大核心能力，覆盖你的每一个写作场景
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Use cases */}
        <div className="mt-20">
          <h3 className="text-center text-xl font-semibold text-slate-900 mb-8">
            适用场景
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {useCases.map((useCase) => (
              <div
                key={useCase.label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm"
              >
                <useCase.icon className="h-4 w-4 text-indigo-500" />
                {useCase.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
