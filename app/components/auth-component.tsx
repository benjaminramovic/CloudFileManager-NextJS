'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export const SignIn = ({ provider, ...props }: { provider?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); signIn(provider); }}>
      <button {...props} type="submit">Sign in with Github</button>
    </form>
  )
}

export const SignOut = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <form action={() => signOut()}>
      <button {...props} type="submit">Sign out</button>
    </form>
  )
}

export const AuthStatus = () => {
  const { data: session, status } = useSession()

  if (status === "loading") return <p>Loading...</p>

  return (
    <div className="mt-6 flex flex-col gap-2 items-center">
      {session?.user ? (
        <>
          <p className="text-sm text-gray-600">Hello, {session.user.name}</p>
          <SignOut className="bg-red-400 rounded-2xl px-2 py-1 text-white cursor-pointer" />
        </>
      ) : (
        <SignIn provider="github" className="bg-green-500 text-white rounded-md px-3 py-1" />
      )}
    </div>
  )
}
