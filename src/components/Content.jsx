// ? Dahili bir resim eklemek icin import yapmak gereklidir.
import img2 from "../img/birds.jpeg";
import "./Content.css";

const Content = () => {
  //! JS ALANI
  const imgStyle = {
    display: "block",
    width: "300px",
    margin: "1rem auto",
  };

  return (
    //! JSX ALANI
    <div>
      {/* Inline Style */}
      <h2 style={{ color: "red" }}>React JS</h2>
      <p style={{ backgroundColor: "lightgreen", padding: "1rem" }}>
        React, kullanici arabirimi tasaralamak icin kullanilan bir JS
        kutuphanesidir.
      </p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg"
        alt="img1"
      />

      <img src={img2} style={imgStyle} alt="" />

      <p className="par-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt
        sit voluptate blanditiis. Dolores voluptates beatae laudantium ratione
        dolor. Eius quibusdam placeat officia quae deleniti molestias
        voluptatum, dolores libero laboriosam recusandae dicta labore aperiam
        totam ut laudantium nihil nam quod vitae minus fugiat architecto, unde
        reiciendis fugit vel! Aperiam, odit.
      </p>
    </div>
  );
};

export default Content;
