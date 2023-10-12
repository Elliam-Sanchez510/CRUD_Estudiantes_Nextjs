import Image from 'next/image'
import calcularNotas from './components/calcularNotas';
import CalcularNotas from './components/calcularNotas';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CalcularNotas/>
    </main>
  )
}
