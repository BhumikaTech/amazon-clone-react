import Box from "./Box";
import "./Shop.css";

function Shop({ search }) {
  const boxes = [
    {
      id: 1,
      title: "Free International returns",
      image: "/images/box1-1.jpg",
      link: "See More",
    },
    {
      id: 2,
      title: "Lunar New Year",
      image: "/images/box1-2.jpg",
      link: "See More",
    },
    {
      id: 3,
      title: "Toys",
      image: "/images/box1-3.jpg",
      link: "See More",
    },
    {
      id: 4,
      title: "Electronics",
      image: "/images/box1-4.jpg",
      link: "See More",
    },
    {
      id: 5,
      title: "Health and Personal Care",
      image: "/images/box2-1.jpg",
      link: "See More",
    },
    {
      id: 6,
      title: "Deals in Smartphones",
      image: "/images/box2-2.jpg",
      link: "See More",
    },
    {
      id: 7,
      title: "Pet Care",
      image: "/images/box2-3.jpg",
      link: "See More",
    },
    {
      id: 8,
      title: "Fashion Trends",
      image: "/images/box2-4.jpg",
      link: "See More",
    },
  ];

  const filteredBoxes = boxes.filter((box) =>
    box.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shop-section">
      {filteredBoxes.length > 0 ? (
        filteredBoxes.map((box) => (
          <Box
            key={box.id}
            title={box.title}
            image={box.image}
            link={box.link}
          />
        ))
      ) : (
        <h2>No categories found.</h2>
      )}
    </div>
  );
}

export default Shop;