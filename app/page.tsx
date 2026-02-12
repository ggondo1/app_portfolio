import Link from "next/link";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <>
    <Header />
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl"> Bem-vindo ao meu <span className="text-blue-600">portfólio</span></h1>
        <p className="text-2xl mt-3">Comece a construir seu portfólio hoje!</p>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/portfolio" className="p-6 mt-6 text-left border rounded-2xl hover:text-blue-600 focus:text-blue-600">
            <h2 className="text-2xl font-semibold"> Ver portfólio</h2>
            <p className="mt-4 text-xl">Explore os trabalhos realizados</p>
          </Link>  
          <div className="p-6 mt-6 text-left border rounded-2xl hover:text-blue-600 focus:text-blue-600">
            <h2 className="text-2xl font-semibold">Área Administrativa</h2>
            <p className="mt-4 text-xl">Gerencie o seu portfólio (requer login)</p>
          </div>
        </div>
      </main>
    </div>
    <Footer />
   </>
   
  );
}
