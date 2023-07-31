import CreatePerson from "./CreatePerson";
import Link from "./Link";

function SideBar() {
  const links = [
    { label: "Table", path: "/" },
    { label: "Card", path: "/card" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="block text-xl text-white"
        activeClassName=" border-b-2 ml-2 my-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="bg-teal-500 px-10 h-screen">
      <h1 className="font-mono text-2xl px-2 pt-4">Enter Your Personal Data</h1>
      <CreatePerson />
      <div className="block">
        <h2 className="font-mono text-2xl">Show Saved Data</h2>
         {renderedLinks}
      </div>
    </div>
  );
}

export default SideBar;
