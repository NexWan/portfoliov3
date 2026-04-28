import {
  MailOutlined,
  TwitterOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function FooterComponent() {
  const socials = [
    { label: "Email",    href: "mailto:lcontrerasmartinez235@gmail.com",                            icon: <MailOutlined />     },
    { label: "Twitter",  href: "https://x.com/OddysDaWan",                                          icon: <TwitterOutlined />  },
    { label: "GitHub",   href: "https://github.com/NexWan",                                         icon: <GithubOutlined />   },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/leonardo-contreras-martinez-a30843229/", icon: <LinkedinOutlined /> },
  ];

  return (
    <footer
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start gap-1">
          <div className="flex items-center gap-3">
            <img
              src="/tsuchinoko_dark.png"
              alt="NexWan mascot"
              className="h-9 w-9 object-contain"
            />
            <span
              className="font-bold text-xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
            >
              NexWan
            </span>
          </div>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            Front-end Dev · Student · Builder
          </p>
        </div>

        <div className="flex flex-wrap gap-5 justify-center">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--pk)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: "var(--muted)" }}>
          Made with ❤️ by NexWan · 2025
        </p>
      </div>
    </footer>
  );
}

export default FooterComponent;
