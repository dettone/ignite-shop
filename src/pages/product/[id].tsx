import { useRouter } from "next/router"


export default function Product() {

  const { query } = useRouter()
    return (
      <main>
        {JSON.stringify(query)}
      </main>
    )
  }
  