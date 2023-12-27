export default function Button({ children, ...props }) {
  return (
    <button
      className="mt-5 mx-3 p-2 rounded bg-amber-700 text-xl hover:bg-amber-800"
      {...props}
    >
      {children}
    </button>
  );
}
