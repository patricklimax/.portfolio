'use client';
import './globals.css'
import { Header } from '@/components/header';
import { Hero } from '@/components/hero/hero';
import { ProjectCover } from '@/components/project/ProjectCover';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="mainBox mx-auto min-h-screen px-2 text-slate-400 relative">
      <Header />
      <Hero />
      <ProjectCover />
      <Footer />
    </main>
  );
}
