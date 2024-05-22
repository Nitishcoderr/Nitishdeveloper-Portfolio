import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const MobileDrawer = ({ isOpen, onClose }:any) => {


  const handleLinkClick = () => {
    // Close the drawer when a link is clicked
    onClose();
  };


  return (
    <div
    className={`fixed flex flex-col justify-center items-center z-[100] top-0 right-0 h-full w-full bg-background text-text transition-transform duration-300 transform ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    <button className="absolute right-7 top-4 p-3" onClick={onClose}>
      <FontAwesomeIcon className="text-5xl" icon={faXmark} />
    </button>
    <ul className="flex flex-col justify-center items-center space-y-4">
      <li className="text-3xl hover:text-accent hover:font-semibold">
        <Link onClick={handleLinkClick} href="/">Home</Link>
      </li>
      <li className="text-3xl hover:text-accent hover:font-semibold">
      <Link onClick={handleLinkClick} href="/project">Project</Link>
      </li>
      <li className="text-3xl hover:text-accent hover:font-semibold">
      <Link onClick={handleLinkClick} href="/about">About</Link>
      </li>
      <li className="text-3xl hover:text-accent hover:font-semibold">
      <Link onClick={handleLinkClick} href={"/contact"}>Contact</Link>
      </li> 
    </ul>
  </div>
  )
}

export default MobileDrawer
