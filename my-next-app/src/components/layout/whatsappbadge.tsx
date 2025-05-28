
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";


export default function WhatsappBadge() {
  return (
    <div className="whatsapp_badge">
      <Link href="https://wa.me/919420655627" target="_blank">
        <FaWhatsapp fill="#fff" />
      </Link>
    </div>
  );
}