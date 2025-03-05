import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Quiz Platform</h1>
      <div className="space-y-4">
        <Link href="/login">
          <a className="bg-blue-500 text-white px-4 py-2 rounded">Login</a>
        </Link>
        <Link href="/signup">
          <a className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</a>
        </Link>
      </div>
    </div>
  )
}
