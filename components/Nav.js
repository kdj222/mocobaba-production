import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(["순위", "구인"]);
  return (
    <div className='wrap bg-blue-500 text-white text-xs'>
      <div className='container bg-blue-500 flex justify-around p-1 '>
        <div>LOGO</div>
        <ul className='flex gap-5'>
          {menu.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
          <li className='w'>
            <form>
              <input className='h-5 text-black' />
            </form>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .wrap {
          width: 100%;
        }
        .container {
          min-width: 1080px;
          max-width: 1680px;
          margin: 0 auto;
        }
        input {
          width: 200px;
          outline: none;
          padding-left: 20px;
        }
      `}</style>
    </div>
  );
}
