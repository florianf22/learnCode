import * as React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';

const Header = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = React.useState(false);

  if (status === 'authenticated') {
    return (
      <div className="flex justify-between items-center relative">
        <Logo />

        <div className="flex items-center">
          <div
            className="cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image
              src={session.user.image}
              width={40}
              height={40}
              className="rounded-full mr-4"
              alt="user image"
            />
          </div>

          {menuOpen && (
            <div
              className="flex flex-col items-center absolute top-full right-0
    bg-accent text-white px-4 py-2 shadow-lg z-10 rounded-md"
            >
              <div className="flex gap-3 py-2">
                <div
                  className={`relative h-[40px] w-[40px] rounded-lg overflow-hidden self-start`}
                >
                  <Image
                    src={session.user.image}
                    alt="Author photo"
                    layout="fill"
                    className="object-fill"
                  />
                </div>

                <div>
                  <h3 className="text-sm">{session.user.name}</h3>
                  <p className="text-sm">{session.user.email}</p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-white my-4" />

              <Link href="/interests">
                <a
                  href="#!"
                  className="text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out mb-4
          self-start"
                >
                  Change Interests
                </a>
              </Link>

              <div className="h-[1px] w-full bg-white mb-4" />

              <Link href="/auth">
                <a
                  href="#!"
                  className="text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out mb-4
          self-start"
                  onClick={signOut}
                >
                  Sign out
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default Header;
