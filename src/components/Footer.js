import hr from '../assets/curve-hr.svg'

export default function Footer(){
  return (
    <div className="mt-4 bg-white rounded-md text-black  px-8 py-4">
      <ul className="text-center">
        <li><a href="#home" className="hover:underline">About</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#honors" className="hover:underline">Honor & Awards</a></li>
        <li><a href="#certs" className="hover:underline">Certfications</a></li>
      </ul>

      <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />

      <p className="text-sm font-light text-center">Copyright © 2023 Ijlal ansari . All Right Reserved</p>

    </div>
  )
}
