import Image from "../../../../Components/Image/Image";

const HomeSectionFour = () => {
  return (
    <section className="home section-three-style">
      <Image
        position={[0, 0, 45, 40]}
        link={
          "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80"
        }
      />
      <Image
        position={[55, 0, 40, 40]}
        link={
          "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
      <Image
        position={[10, 45, 80, 55]}
        link={
          "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        }
      />
    </section>
  );
};
export default HomeSectionFour;
