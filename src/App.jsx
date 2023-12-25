import Card from "./Component/Card/Card";

function App() {
  return (
    <div className='bg-sky-200 h-screen'>
      <h1 className='text-3xl underline text-center mb-4'>QR-code Component</h1>
      <div className='grid justify-center mt-24'>
        <Card image={"./src/assets/image-qr-code.png"}>
          <div>
            <h1 className='text-xl text-pretty font-bold text-center m-1'>
              Improve your front-end skills by building projects
            </h1>
            <p className='text-base mt-4 text-pretty text-center'>
              Scan the QR code to visit Frontend Mentor and take you coding
              skill to the next level
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
