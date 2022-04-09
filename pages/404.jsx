import Link from "next/link"

export default function Page404 () {
  return (
    <div>
      <h1>404 - Pagina no encontrada</h1>
      <Link href="/">
        Ir al inicio
      </Link>
    </div>
  )
}
