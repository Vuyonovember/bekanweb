
const TestStyles = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-4 bg-red-500 text-white z-50">
      <p>If you see this, Tailwind is working!</p>
      <p className="text-yellow-300">This text should be yellow if Tailwind colors are working</p>
      <div className="mt-2 p-2 bg-blue-500 rounded">
        <p className="text-white">This is a test component with Tailwind styles</p>
      </div>
    </div>
  );
};

export default TestStyles;
