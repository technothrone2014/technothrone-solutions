import { ArrowUpRight, Code2, Crown, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="site-shell flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white">
          <Crown className="h-4 w-4 text-accent" aria-hidden="true" />
          Technothrone Solutions
        </a>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Technothrone Solutions</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-400">
          <a href="mailto:technothrone2014@gmail.com" className="footer-link"><Mail className="h-3.5 w-3.5" aria-hidden="true" /> Email</a>
          <a href="https://github.com/technothrone2014" target="_blank" rel="noopener noreferrer" aria-label="Technothrone Solutions on GitHub (opens in a new tab)" className="footer-link">@technothrone2014 <Code2 className="h-3.5 w-3.5" aria-hidden="true" /><ArrowUpRight className="h-3 w-3" aria-hidden="true" /></a>
          <a href="https://github.com/jayjchiringz" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile @jayjchiringz (opens in a new tab)" className="footer-link">@jayjchiringz <Code2 className="h-3.5 w-3.5" aria-hidden="true" /><ArrowUpRight className="h-3 w-3" aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  )
}
