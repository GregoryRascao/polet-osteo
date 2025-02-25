import { FaInstagram, FaFacebook } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className="footer-dark bg-gray-800">
      <div className="flex flex-col">
        <div className="flex item social justify-center">
          <a href="https://www.instagram.com/agathepoletosteopathe/">
            <FaInstagram className="m-2" />
          </a>

          <a href="https://www.facebook.com/Agathe-Polet-Ost%C3%A9opathe-2328646570791996/">
            <FaFacebook className="m-2" />
          </a>
        </div>
        <p className="copyright">
          Copyright © 2025, Design For Agathe Polet. All right
          reserved.&nbsp;0484 11 4874.
        </p>
      </div>
    </div>
  );
}
