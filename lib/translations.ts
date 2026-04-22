export type Locale = "en" | "zh-CN" | "zh-TW";

export type Translations = typeof translations.en;

export const translations = {
  en: {
    common: {
      home: "Home",
      pricing: "Pricing",
      install: "Install",
      freeInstall: "Free Install",
      viewPricing: "View Pricing",
      contactEmail: "dbcnbj888@gmail.com",
      copyright: "WriteFlow AI. All rights reserved.",
      contact: "Contact:",
      tagline: "AI-powered Chrome writing assistant. Make writing as natural as breathing.",
    },
    home: {
      badge: "AI-powered Chrome Writing Assistant",
      title: "WriteFlow AI",
      subtitle: "Make writing as natural as breathing",
      description:
        "AI-powered Chrome writing assistant. Tab to continue, select to rewrite, AI polish — get started in three seconds with zero learning curve.",
      installBtn: "Free Install Chrome Extension",
      viewPricingBtn: "View Pricing",
      freeQuota: "20 free AI assists per day, no credit card required",
      mockupUrl: "writeflow-ai.com",
      mockupTabHint: "Press Tab to continue",
      mockupSelectedText: "Selected text:",
      mockupRewrite: "Rewrite",
      mockupPolish: "Polish",
      mockupTranslate: "Translate",
      featuresTitle: "Core Features",
      featuresSubtitle: "Three core capabilities covering every writing scenario",
      feature1Title: "Tab Smart Continuation",
      feature1Desc:
        "Press Tab at the cursor, and AI automatically understands the context to continue writing coherently. Write emails, post tweets, fill out forms — all in one go.",
      feature2Title: "Select & Instant Rewrite",
      feature2Desc:
        "Select any text on a webpage and rewrite, polish, translate, or summarize with one click. No copy-paste needed, done right where you are.",
      feature3Title: "Multi-Model Smart Routing",
      feature3Desc:
        "Automatically calls DeepSeek + Kimi dual engines — fast for short text, stable for long text, intelligently choosing the optimal model.",
      useCasesTitle: "Use Cases",
      useCase1: "Write emails",
      useCase2: "Social media posts",
      useCase3: "Reports & essays",
      useCase4: "Forms & reviews",
      ctaTitle: "Start for Free",
      ctaDesc: "20 free AI assists per day, no credit card required",
      ctaInstall: "Install Now",
      ctaPricing: "View Pricing",
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle: "Select the plan that fits you",
      freeName: "Free",
      freeDesc: "For light users, daily writing assistance",
      freeFeature1: "20 AI assists per day",
      freeFeature2: "Tab continuation",
      freeFeature3: "Select & rewrite (basic mode)",
      freeFeature4: "Smart polish",
      freeFeature5: "Standard response speed",
      freeCta: "Download Extension",
      proName: "Pro",
      proDesc: "Most popular, essential for efficient writing",
      proFeature1: "200 AI assists per day (10x free tier)",
      proFeature2: "All rewrite modes (Formal, Concise, Creative, Academic)",
      proFeature3: "Priority response queue",
      proFeature4: "Ad-free",
      proFeature5: "Email technical support",
      proCta: "Upgrade Pro",
      ultraName: "Ultra",
      ultraDesc: "For professionals, unlimited access",
      ultraFeature1: "Unlimited AI assists",
      ultraFeature2: "All Pro features",
      ultraFeature3: "Long text support (4000+ tokens per request)",
      ultraFeature4: "Advanced creative mode",
      ultraFeature5: "Priority technical support",
      ultraFeature6: "Early access to new features",
      ultraCta: "Upgrade Ultra",
      yearly: "Yearly",
      monthly: "Monthly",
      perMonth: "/ month",
      perYear: "/ year",
      billedYearly: "Billed annually at ${price}/year",
      billedMonthly: "Billed monthly",
      mostPopular: "Most Popular",
      faqTitle: "Frequently Asked Questions",
      faq1Q: "Is the free tier enough?",
      faq1A:
        "20 times per day is suitable for light users, more than enough for a few emails and social posts.",
      faq2Q: "Can I cancel anytime?",
      faq2A:
        "You can cancel at any time, and the cancellation will take effect at the next billing cycle.",
      faq3Q: "What payment methods are supported?",
      faq3A:
        "We support credit cards, PayPal, and Alipay (secure payment via Paddle/Stripe).",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: April 22, 2026",
      sections: [
        {
          title: "1. Introduction",
          content:
            'WriteFlow AI ("we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our Chrome extension and website.',
        },
        {
          title: "2. Information We Collect",
          content:
            "• Account Information: When you create an account, we collect your email address and a unique device identifier.\n• Usage Data: We collect information about how you use the extension (e.g., feature usage, API request counts) to improve our service and enforce usage limits.\n• Content Data: Text you submit to our AI writing service is sent to third-party AI providers (DeepSeek and Kimi/Moonshot) for processing. We do not permanently store your writing content.",
        },
        {
          title: "3. How We Use Your Information",
          content:
            "• To provide the AI writing services\n• To manage your subscription and usage quotas\n• To improve product functionality\n• To communicate with you about your account",
        },
        {
          title: "4. Data Sharing",
          content:
            "We share data only with:\n• AI service providers (DeepSeek, Kimi/Moonshot) for content processing\n• Payment processors (Stripe/Paddle) for subscription management\nWe do not sell your personal data to third parties.",
        },
        {
          title: "5. Data Security",
          content:
            "We use industry-standard security measures including HTTPS encryption, secure authentication tokens, and database access controls.",
        },
        {
          title: "6. Your Rights",
          content:
            "You have the right to access, correct, or delete your personal data. Contact us at {{email}} to exercise these rights.",
        },
        {
          title: "7. Cookies",
          content:
            "Our website uses essential cookies only. The Chrome extension does not use cookies.",
        },
        {
          title: "8. Changes to This Policy",
          content:
            "We may update this policy from time to time. Changes will be posted on this page.",
        },
        {
          title: "9. Contact Us",
          content:
            "If you have questions about this Privacy Policy, please contact us at: {{email}}",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated: April 22, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "By installing and using WriteFlow AI, you agree to these Terms of Service.",
        },
        {
          title: "2. Description of Service",
          content:
            "WriteFlow AI is a Chrome browser extension that provides AI-powered writing assistance using third-party AI models.",
        },
        {
          title: "3. User Accounts",
          content:
            "• You must provide accurate information when creating an account.\n• You are responsible for maintaining the security of your account credentials.\n• Each license is for one user only.",
        },
        {
          title: "4. Acceptable Use",
          content:
            "You agree not to:\n• Use the service for illegal purposes\n• Attempt to circumvent usage limits or quotas\n• Reverse engineer or extract source code\n• Use automated scripts to abuse the API\n• Generate harmful, abusive, or infringing content",
        },
        {
          title: "5. Subscription and Billing",
          content:
            "• Free tier: 20 AI requests per day\n• Paid tiers: Billed monthly or yearly, auto-renewal\n• You may cancel anytime; cancellation takes effect at the next billing cycle\n• No refunds for partial months",
        },
        {
          title: "6. Intellectual Property",
          content:
            "WriteFlow AI and its code are our property. You retain ownership of content you create using the service.",
        },
        {
          title: "7. Limitation of Liability",
          content:
            'The service is provided "as is". We are not liable for AI-generated content accuracy.',
        },
        {
          title: "8. Termination",
          content:
            "We may suspend or terminate accounts that violate these terms.",
        },
        {
          title: "9. Governing Law",
          content:
            "These terms are governed by the laws of the People's Republic of China.",
        },
        {
          title: "10. Contact",
          content:
            "For questions about these terms: {{email}}",
        },
      ],
    },
    refund: {
      title: "Refund Policy",
      lastUpdated: "Last updated: April 22, 2026",
      sections: [
        {
          title: "1. Subscription Refunds",
          content:
            "• You may request a full refund within 14 days of your initial purchase if you are unsatisfied with the service.\n• Refund requests must be sent to {{email}} with your account email and purchase date.\n• Refunds are typically processed within 5-7 business days.",
        },
        {
          title: "2. Non-Refundable Situations",
          content:
            "• Refunds are not provided for partial months or unused portions of a subscription period.\n• If your account was terminated due to violation of Terms of Service, no refund will be issued.",
        },
        {
          title: "3. How to Request a Refund",
          content:
            'Email us at {{email}} with the subject "Refund Request" and include:\n• Your registered email address\n• Date of purchase\n• Reason for refund request',
        },
        {
          title: "4. Contact",
          content: "For refund inquiries: {{email}}",
        },
      ],
    },
  },
  "zh-CN": {
    common: {
      home: "首页",
      pricing: "定价",
      install: "安装",
      freeInstall: "免费安装",
      viewPricing: "查看定价",
      contactEmail: "dbcnbj888@gmail.com",
      copyright: "WriteFlow AI. 保留所有权利。",
      contact: "联系我们：",
      tagline: "AI 驱动的 Chrome 写作助手，让写作像呼吸一样自然。",
    },
    home: {
      badge: "AI 驱动的 Chrome 写作助手",
      title: "WriteFlow AI",
      subtitle: "让写作像呼吸一样自然",
      description:
        "AI 驱动的 Chrome 写作助手。Tab 续写、划词改写、智能润色，三秒上手，零门槛使用。",
      installBtn: "免费安装 Chrome 扩展",
      viewPricingBtn: "查看定价",
      freeQuota: "每天 20 次免费 AI 辅助，无需信用卡",
      mockupUrl: "writeflow-ai.com",
      mockupTabHint: "按 Tab 续写",
      mockupSelectedText: "选中文字：",
      mockupRewrite: "改写",
      mockupPolish: "润色",
      mockupTranslate: "翻译",
      featuresTitle: "核心功能",
      featuresSubtitle: "三大核心能力，覆盖你的每一个写作场景",
      feature1Title: "Tab 智能续写",
      feature1Desc:
        "光标处按下 Tab，AI 自动理解上下文，续写出连贯内容。写邮件、发推文、填表单，一气呵成。",
      feature2Title: "划词即时改写",
      feature2Desc:
        "选中任意网页上的文字，一键改写、润色、翻译、总结。无需复制粘贴，原地完成。",
      feature3Title: "多模型智能路由",
      feature3Desc:
        "自动调用 DeepSeek + Kimi 双引擎，短文本快、长文本稳，智能选择最优模型。",
      useCasesTitle: "适用场景",
      useCase1: "写邮件",
      useCase2: "发社交媒体",
      useCase3: "写报告/论文",
      useCase4: "填表单/写评价",
      ctaTitle: "开始免费使用",
      ctaDesc: "每天 20 次免费 AI 辅助，无需信用卡",
      ctaInstall: "立即安装",
      ctaPricing: "查看定价",
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle: "选择适合你的方案",
      freeName: "Free",
      freeDesc: "适合轻度用户，日常写作辅助",
      freeFeature1: "每天 20 次 AI 辅助",
      freeFeature2: "Tab 续写",
      freeFeature3: "划词改写（基础模式）",
      freeFeature4: "智能润色",
      freeFeature5: "标准响应速度",
      freeCta: "下载扩展",
      proName: "Pro",
      proDesc: "最受欢迎，高效写作必备",
      proFeature1: "每天 200 次 AI 辅助（10 倍免费版）",
      proFeature2: "全部改写模式（正式、简洁、创意、学术）",
      proFeature3: "优先响应队列",
      proFeature4: "无广告",
      proFeature5: "邮件技术支持",
      proCta: "升级 Pro",
      ultraName: "Ultra",
      ultraDesc: "专业用户首选，无限畅享",
      ultraFeature1: "无限次 AI 辅助",
      ultraFeature2: "全部 Pro 功能",
      ultraFeature3: "超长文本支持（单次 4000+ tokens）",
      ultraFeature4: "高级创意模式",
      ultraFeature5: "优先技术支持",
      ultraFeature6: "新功能抢先体验",
      ultraCta: "升级 Ultra",
      yearly: "年付",
      monthly: "月付",
      perMonth: "/ 月",
      perYear: "/ 年",
      billedYearly: "按年计费，每年 ${price}",
      billedMonthly: "按月计费",
      mostPopular: "最受欢迎",
      faqTitle: "常见问题",
      faq1Q: "免费版够用吗？",
      faq1A: "每天 20 次适合轻度用户，写几封邮件、几条社交动态完全够用。",
      faq2Q: "可以随时取消订阅吗？",
      faq2A: "可以随时取消，下个计费周期停止扣费。",
      faq3Q: "支持哪些支付方式？",
      faq3A: "支持信用卡、PayPal、支付宝（通过 Paddle/Stripe 安全支付）。",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: April 22, 2026",
      sections: [
        {
          title: "1. Introduction",
          content:
            'WriteFlow AI（"我们"）尊重您的隐私。本隐私政策说明我们在您使用 Chrome 扩展和网站时如何收集、使用和保护您的信息。',
        },
        {
          title: "2. Information We Collect",
          content:
            "• 账户信息：创建账户时，我们会收集您的电子邮件地址和唯一设备标识符。\n• 使用数据：我们收集有关您如何使用扩展的信息（例如功能使用情况、API 请求次数），以改进我们的服务并执行使用限制。\n• 内容数据：您提交给我们 AI 写作服务的文本会发送给第三方 AI 提供商（DeepSeek 和 Kimi/Moonshot）进行处理。我们不会永久存储您的写作内容。",
        },
        {
          title: "3. How We Use Your Information",
          content:
            "• 提供 AI 写作服务\n• 管理您的订阅和使用配额\n• 改进产品功能\n• 就您的账户与您沟通",
        },
        {
          title: "4. Data Sharing",
          content:
            "我们仅与以下方共享数据：\n• AI 服务提供商（DeepSeek、Kimi/Moonshot），用于内容处理\n• 支付处理商（Stripe/Paddle），用于订阅管理\n我们不会将您的个人数据出售给第三方。",
        },
        {
          title: "5. Data Security",
          content:
            "我们采用行业标准的安全措施，包括 HTTPS 加密、安全身份验证令牌和数据库访问控制。",
        },
        {
          title: "6. Your Rights",
          content:
            "您有权访问、更正或删除您的个人数据。请联系 {{email}} 行使这些权利。",
        },
        {
          title: "7. Cookies",
          content:
            "我们的网站仅使用必要的 Cookie。Chrome 扩展不使用 Cookie。",
        },
        {
          title: "8. Changes to This Policy",
          content: "我们可能会不时更新本政策。更改将发布在本页面上。",
        },
        {
          title: "9. Contact Us",
          content:
            "如果您对本隐私政策有任何疑问，请通过以下方式联系我们：{{email}}",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated: April 22, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "安装和使用 WriteFlow AI，即表示您同意这些服务条款。",
        },
        {
          title: "2. Description of Service",
          content:
            "WriteFlow AI 是一款 Chrome 浏览器扩展，使用第三方 AI 模型提供 AI 驱动的写作辅助。",
        },
        {
          title: "3. User Accounts",
          content:
            "• 创建账户时必须提供准确的信息。\n• 您有责任维护账户凭据的安全。\n• 每个许可证仅供一位用户使用。",
        },
        {
          title: "4. Acceptable Use",
          content:
            "您同意不：\n• 将服务用于非法目的\n• 试图规避使用限制或配额\n• 逆向工程或提取源代码\n• 使用自动化脚本滥用 API\n• 生成有害、辱骂或侵权的内容",
        },
        {
          title: "5. Subscription and Billing",
          content:
            "• 免费版：每天 20 次 AI 请求\n• 付费版：按月或按年计费，自动续订\n• 您可以随时取消；取消将在下个计费周期生效\n• 不支持部分月份退款",
        },
        {
          title: "6. Intellectual Property",
          content:
            "WriteFlow AI 及其代码是我们的财产。您保留使用本服务创建的内容的所有权。",
        },
        {
          title: "7. Limitation of Liability",
          content:
            '本服务按"现状"提供。我们对 AI 生成内容的准确性不承担责任。',
        },
        {
          title: "8. Termination",
          content:
            "对于违反这些条款的账户，我们可能会暂停或终止。",
        },
        {
          title: "9. Governing Law",
          content: "这些条款受中华人民共和国法律管辖。",
        },
        {
          title: "10. Contact",
          content: "有关这些条款的问题：{{email}}",
        },
      ],
    },
    refund: {
      title: "Refund Policy",
      lastUpdated: "Last updated: April 22, 2026",
      sections: [
        {
          title: "1. Subscription Refunds",
          content:
            "• 如果您对服务不满意，可在首次购买后 14 天内申请全额退款。\n• 退款请求必须发送至 {{email}}，并附上您的账户电子邮件和购买日期。\n• 退款通常在 5-7 个工作日内处理。",
        },
        {
          title: "2. Non-Refundable Situations",
          content:
            "• 不支持部分月份或未使用订阅期部分的退款。\n• 如果因违反服务条款而导致账户被终止，将不予退款。",
        },
        {
          title: "3. How to Request a Refund",
          content:
            '发送电子邮件至 {{email}}，主题为"退款申请"，并包含以下内容：\n• 您注册时使用的电子邮件地址\n• 购买日期\n• 退款原因',
        },
        {
          title: "4. Contact",
          content: "退款咨询：{{email}}",
        },
      ],
    },
  },
  "zh-TW": {
    common: {
      home: "首頁",
      pricing: "定價",
      install: "安裝",
      freeInstall: "免費安裝",
      viewPricing: "查看定價",
      contactEmail: "dbcnbj888@gmail.com",
      copyright: "WriteFlow AI. 保留所有權利。",
      contact: "聯絡我們：",
      tagline: "AI 驅動的 Chrome 寫作助手，讓寫作像呼吸一樣自然。",
    },
    home: {
      badge: "AI 驅動的 Chrome 寫作助手",
      title: "WriteFlow AI",
      subtitle: "讓寫作像呼吸一樣自然",
      description:
        "AI 驅動的 Chrome 寫作助手。Tab 續寫、劃詞改寫、智能潤色，三秒上手，零門檻使用。",
      installBtn: "免費安裝 Chrome 擴展",
      viewPricingBtn: "查看定價",
      freeQuota: "每天 20 次免費 AI 輔助，無需信用卡",
      mockupUrl: "writeflow-ai.com",
      mockupTabHint: "按 Tab 續寫",
      mockupSelectedText: "選中文字：",
      mockupRewrite: "改寫",
      mockupPolish: "潤色",
      mockupTranslate: "翻譯",
      featuresTitle: "核心功能",
      featuresSubtitle: "三大核心能力，覆蓋你的每一個寫作場景",
      feature1Title: "Tab 智能續寫",
      feature1Desc:
        "光標處按下 Tab，AI 自動理解上下文，續寫出連貫內容。寫郵件、發推文、填表單，一氣呵成。",
      feature2Title: "劃詞即時改寫",
      feature2Desc:
        "選中任意網頁上的文字，一鍵改寫、潤色、翻譯、總結。無需複製貼上，原地完成。",
      feature3Title: "多模型智能路由",
      feature3Desc:
        "自動調用 DeepSeek + Kimi 雙引擎，短文本快、長文本穩，智能選擇最優模型。",
      useCasesTitle: "適用場景",
      useCase1: "寫郵件",
      useCase2: "發社交媒體",
      useCase3: "寫報告/論文",
      useCase4: "填表單/寫評價",
      ctaTitle: "開始免費使用",
      ctaDesc: "每天 20 次免費 AI 輔助，無需信用卡",
      ctaInstall: "立即安裝",
      ctaPricing: "查看定價",
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle: "選擇適合你的方案",
      freeName: "Free",
      freeDesc: "適合輕度用戶，日常寫作輔助",
      freeFeature1: "每天 20 次 AI 輔助",
      freeFeature2: "Tab 續寫",
      freeFeature3: "劃詞改寫（基礎模式）",
      freeFeature4: "智能潤色",
      freeFeature5: "標準響應速度",
      freeCta: "下載擴展",
      proName: "Pro",
      proDesc: "最受歡迎，高效寫作必備",
      proFeature1: "每天 200 次 AI 輔助（10 倍免費版）",
      proFeature2: "全部改寫模式（正式、簡潔、創意、學術）",
      proFeature3: "優先響應隊列",
      proFeature4: "無廣告",
      proFeature5: "郵件技術支持",
      proCta: "升級 Pro",
      ultraName: "Ultra",
      ultraDesc: "專業用戶首選，無限暢享",
      ultraFeature1: "無限次 AI 輔助",
      ultraFeature2: "全部 Pro 功能",
      ultraFeature3: "超長文本支持（單次 4000+ tokens）",
      ultraFeature4: "高級創意模式",
      ultraFeature5: "優先技術支持",
      ultraFeature6: "新功能搶先體驗",
      ultraCta: "升級 Ultra",
      yearly: "年付",
      monthly: "月付",
      perMonth: "/ 月",
      perYear: "/ 年",
      billedYearly: "按年計費，每年 ${price}",
      billedMonthly: "按月計費",
      mostPopular: "最受歡迎",
      faqTitle: "常見問題",
      faq1Q: "免費版夠用嗎？",
      faq1A: "每天 20 次適合輕度用戶，寫幾封郵件、幾條社交動態完全夠用。",
      faq2Q: "可以隨時取消訂閱嗎？",
      faq2A: "可以隨時取消，下個計費周期停止扣費。",
      faq3Q: "支持哪些支付方式？",
      faq3A: "支持信用卡、PayPal、支付寶（通過 Paddle/Stripe 安全支付）。",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: April 22, 2026",
      sections: [
        {
          title: "1. Introduction",
          content:
            'WriteFlow AI（「我們」）尊重您的隱私。本隱私政策說明我們在您使用 Chrome 擴展和網站時如何收集、使用和保護您的信息。',
        },
        {
          title: "2. Information We Collect",
          content:
            "• 賬戶信息：創建賬戶時，我們會收集您的電子郵件地址和唯一設備標識符。\n• 使用數據：我們收集有關您如何使用擴展的信息（例如功能使用情況、API 請求次數），以改進我們的服務並執行使用限制。\n• 內容數據：您提交給我們 AI 寫作服務的文本會發送給第三方 AI 提供商（DeepSeek 和 Kimi/Moonshot）進行處理。我們不會永久存儲您的寫作內容。",
        },
        {
          title: "3. How We Use Your Information",
          content:
            "• 提供 AI 寫作服務\n• 管理您的訂閱和使用配額\n• 改進產品功能\n• 就您的賬戶與您溝通",
        },
        {
          title: "4. Data Sharing",
          content:
            "我們僅與以下方共享數據：\n• AI 服務提供商（DeepSeek、Kimi/Moonshot），用於內容處理\n• 支付處理商（Stripe/Paddle），用於訂閱管理\n我們不會將您的個人數據出售給第三方。",
        },
        {
          title: "5. Data Security",
          content:
            "我們採用行業標準的安全措施，包括 HTTPS 加密、安全身份驗證令牌和數據庫訪問控制。",
        },
        {
          title: "6. Your Rights",
          content:
            "您有權訪問、更正或刪除您的個人數據。請聯繫 {{email}} 行使這些權利。",
        },
        {
          title: "7. Cookies",
          content:
            "我們的網站僅使用必要的 Cookie。Chrome 擴展不使用 Cookie。",
        },
        {
          title: "8. Changes to This Policy",
          content: "我們可能會不時更新本政策。更改將發布在本頁面上。",
        },
        {
          title: "9. Contact Us",
          content:
            "如果您對本隱私政策有任何疑問，請通過以下方式聯繫我們：{{email}}",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated: April 22, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "安裝和使用 WriteFlow AI，即表示您同意這些服務條款。",
        },
        {
          title: "2. Description of Service",
          content:
            "WriteFlow AI 是一款 Chrome 瀏覽器擴展，使用第三方 AI 模型提供 AI 驅動的寫作輔助。",
        },
        {
          title: "3. User Accounts",
          content:
            "• 創建賬戶時必須提供準確的信息。\n• 您有責任維護賬戶憑證的安全。\n• 每個許可證僅供一位用戶使用。",
        },
        {
          title: "4. Acceptable Use",
          content:
            "您同意不：\n• 將服務用於非法目的\n• 試圖規避使用限制或配額\n• 逆向工程或提取源代碼\n• 使用自動化腳本濫用 API\n• 生成有害、辱罵或侵權的內容",
        },
        {
          title: "5. Subscription and Billing",
          content:
            "• 免費版：每天 20 次 AI 請求\n• 付費版：按月或按年計費，自動續訂\n• 您可以隨時取消；取消將在下個計費周期生效\n• 不支持部分月份退款",
        },
        {
          title: "6. Intellectual Property",
          content:
            "WriteFlow AI 及其代碼是我們的財產。您保留使用本服務創建的內容的所有權。",
        },
        {
          title: "7. Limitation of Liability",
          content:
            '本服務按「現狀」提供。我們對 AI 生成內容的準確性不承擔責任。',
        },
        {
          title: "8. Termination",
          content:
            "對於違反這些條款的賬戶，我們可能會暫停或終止。",
        },
        {
          title: "9. Governing Law",
          content: "這些條款受中華人民共和國法律管轄。",
        },
        {
          title: "10. Contact",
          content: "有關這些條款的問題：{{email}}",
        },
      ],
    },
    refund: {
      title: "Refund Policy",
      lastUpdated: "Last updated: April 22, 2026",
      sections: [
        {
          title: "1. Subscription Refunds",
          content:
            "• 如果您對服務不滿意，可在首次購買後 14 天內申請全額退款。\n• 退款請求必須發送至 {{email}}，並附上您的賬戶電子郵件和購買日期。\n• 退款通常在 5-7 個工作日內處理。",
        },
        {
          title: "2. Non-Refundable Situations",
          content:
            "• 不支持部分月份或未使用訂閱期部分的退款。\n• 如果因違反服務條款而導致賬戶被終止，將不予退款。",
        },
        {
          title: "3. How to Request a Refund",
          content:
            '發送電子郵件至 {{email}}，主題為「退款申請」，並包含以下內容：\n• 您註冊時使用的電子郵件地址\n• 購買日期\n• 退款原因',
        },
        {
          title: "4. Contact",
          content: "退款諮詢：{{email}}",
        },
      ],
    },
  },
} as const;
