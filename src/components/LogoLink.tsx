import Image from 'next/image';
import Link from 'next/link';
const LogoLink = () => {
  return (
    <div >
    <Link href="/">
      <Image  src="/me/me1.jpg"
                  height="50"
                  width="50"
                  className=" rounded-full"
                  alt="img" />
    </Link>
  </div>
  )
}

export default LogoLink
