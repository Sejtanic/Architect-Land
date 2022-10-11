import Image from "../../../Components/Image/Image";

const HomeSectionSix = () => {
  return (
    <section className="home section-six-style">
      <Image
        position={[0, 0, 50, 50]}
        link={
          "https://images.unsplash.com/photo-1543489822-c49534f3271f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        }
      />
      <Image
        position={[5, 55, 40, 40]}
        link={
          "https://images.unsplash.com/photo-1596641708979-42fafb8a019b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
        }
      />
      <Image
        position={[55, 5, 40, 40]}
        link={
          "https://images.unsplash.com/photo-1635248518231-dea98b1e5510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
      />
      <Image
        position={[50, 50, 50, 50]}
        // className={"middle"}
        link={
          "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      ></Image>
    </section>
  );
};
export default HomeSectionSix;
