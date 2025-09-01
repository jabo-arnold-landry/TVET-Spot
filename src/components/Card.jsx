function Card({ children, structure }) {
  return (
    <div className="flex gap-3 border border-progress rounded-sm px-2 py-1 cursor-pointer hover:bg-primary hover:text-white">
      {children}
    </div>
  );
}

export default Card;
