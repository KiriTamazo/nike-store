import React from "react";
import Items from "../mini-components/Items";
import Title from "../mini-components/Title";

const Sales = ({ id, wide, endpoint, children }) => {
  const { title, items } = endpoint;
  return (
    <section id={id} className="nike-container">
      <Title title={title} />
      <div
        className={`grid items-center justify-items-center ${
          wide
            ? "grid-cols-3  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1"
            : "grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 "
        } gap-7   lg:gap-6 mt-7`}
      >
        {items?.map((item, index) => (
          <Items key={index} {...item} wide={wide} />
        ))}
      </div>
      {children}
    </section>
  );
};

export default Sales;
