import { Link } from "react-scroll";

export const navLinks = [
  { to: "#", title: "home" },
  { to: "popularSale", title: "popular" },
  { to: "topRatedSale", title: "top" },
  { to: "topStories", title: "stories" },
];

const ListItem = ({ to, title, sticky }) => {
  return (
    <li
      className={`grid items-center mx-2  ${
        window.scrollY > 30 && sticky ? "text-slate-900" : "text-slate-200"
      } cursor-pointer capitalize`}
    >
      <Link activeClass="active" smooth spy to={to} offset={-80}>
        {title}
      </Link>
    </li>
  );
};
export default ListItem;
