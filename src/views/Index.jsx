function Button({ children }) {
  return (
    <button
      type="button"
      className="border py-5 px-10 rounded-md bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)]"
    >
      {children}
    </button>
  );
}

export default function Index() {
  return (
    <div className="w-full h-dvh flex flex-col items-center md:flex-row md:justify-around">
      <Button>Sell</Button>

      <Button>Inventory</Button>
    </div>
  );
}
