function Header(){
    return (
      <div>
        <div className="w-full h-20 flex items-center space-x-28">
          <h1 className="w-2/5 font-bold text-2xl">Book Lover</h1>
          <div>
            <ul className="flex space-x-4 text-slate-500">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
            </ul>
          </div>
        </div>
        <div className="h-10 pl-2 rounded flex items-center text-white bg-slate-950">
          Products
        </div>
      </div>
    );
}

export default Header