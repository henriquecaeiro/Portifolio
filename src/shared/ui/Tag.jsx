const Tag = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted">
      {children}
    </span>
  );
};

export default Tag;
