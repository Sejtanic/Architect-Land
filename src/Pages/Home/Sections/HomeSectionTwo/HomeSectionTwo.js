import Image from "../../../../Components/Image/Image";

const HomeSectionTwo = () => {
  return (
    <section className="home section-two-style">
      <Image
        position={[10, 0, 80, 40, 1]}
        link={
          "https://images.unsplash.com/photo-1628244076843-7bcf63fa9a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAxfHxob3VzZSUyMGV4dGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        }
      />
      <Image
        position={[0, 50, 45, 50]}
        link={
          "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        }
      />
      <Image
        position={[50, 50, 50, 50]}
        link={
          "https://images.unsplash.com/photo-1628021079635-633dd5bf64a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        }
      />
    </section>
  );
};
export default HomeSectionTwo;
