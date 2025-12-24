"use client";

export default function DescriptionOnly({
  description,
  className = "",
}) {
  if (!description) return null;

  const renderText = (text, index) => {
    const [boldText, ...restText] = text.split(":");

    // Agar ":" hai → left bold
    if (restText.length > 0) {
      return (
        <p key={index}>
          <span className="font-semibold text-gray-900">
            {boldText}:
          </span>{" "}
          {restText.join(":").trim()}
        </p>
      );
    }

    // Normal paragraph
    return <p key={index}>{text}</p>;
  };

  return (
    <section className={`py-2 bg-transparent ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-relaxed space-y-0">
        {Array.isArray(description)
          ? description.map(renderText)
          : renderText(description, 0)}
      </div>
    </section>
  );
}
