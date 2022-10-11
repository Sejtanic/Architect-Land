import Image from "../../../../Components/Image/Image";

const HomeSectionFive = () => {
  return (
    <section className="home section-five-style">
      <Image
        position={[0, 15, 90, 30]}
        link={
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
      />
      <Image
        position={[0, 55, 90, 30]}
        link={
          "https://images.unsplash.com/photo-1598491429789-8a63dab49c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUyfHxkZXNlcnQlMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        }
      />
    </section>
  );
};
export default HomeSectionFive;
