"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileMenuButton = ({ onClick }:any) => {
  return (
    <button className="absolute right-2 top-2 p-2" onClick={onClick}>
    <FontAwesomeIcon className="text-4xl" icon={faBars} />
  </button>
  )
}

export default MobileMenuButton
