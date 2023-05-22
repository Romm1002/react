const BaseSection = ({ className, id, children }) => {
  return (
    <section className={className} id={id}>
      <div className="max-width">{children}</div>
    </section>
  );
};

export default BaseSection;
