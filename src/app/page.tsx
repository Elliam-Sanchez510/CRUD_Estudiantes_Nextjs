import CalcularNotas from './components/Estudiantes/calcularNotas';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CalcularNotas/>
    </main>
  )
}
