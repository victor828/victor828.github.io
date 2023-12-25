export default function Card({ image, children }) {
  return (
    // <section className='max-w-72 max-h-96 bg-white rounded-2xl m-auto p-4'>
    <section
      style={{
        borderRadius: "1rem",
        background: "white",
        maxWidth: "320px",
        padding: "1rem",
        maxHeight: "550px",
        minWidth: "320px",
        boxShadow: "10px 10px 10px black",
      }}>
      <div>
        <img style={{ borderRadius: "1rem" }} src={image} alt='QR' />
      </div>
      <div className='p-4'>{children}</div>
    </section>
  );
}
