import { Button } from '@/components/ui/button'
import Link from 'next/link'


const HomePage = () => {
  return (
      <div>
          HomePage(unprotected)
          <Link href="/sign-in">
              <Button>Login</Button>
          </Link>
          <Link href="/sign-up">
              <Button>SignUp</Button>
          </Link>
      </div>
  )
}

export default HomePage