import React from "react";
import Items from "../mini-components/Items";
import Title from "../mini-components/Title";

const Sales = ({ wide, endpoint }) => {
  const { title, items } = endpoint;
  return (
    <section className="nike-container">
      <Title title={title} />
      <div
        className={`grid items-center justify-items-center ${
          wide
            ? "grid-cols-3 xl:grid-cols-2 lg:grid-cols-2"
            : "grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 "
        } gap-7   lg:gap-6 mt-7`}
      >
        {items?.map((item, index) => (
          <Items key={index} {...item} wide={wide} />
        ))}
      </div>
    </section>
  );
};

export default Sales;
