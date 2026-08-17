const SectionHeader = ({ eyebrow, title, description, id }) => {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p className="badge" id={id ? `${id}-label` : undefined}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
