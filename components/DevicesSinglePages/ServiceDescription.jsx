"use client";

export default function ServiceDescription({ title, content }) {
  return (
    <section className="py-6">
      <div className=" mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-semibold font-serif mb-4">{title}</h2>

        <div className="text-base leading-7 space-y-4 text-gray-700">
          {content.map((block, index) => (
            <p key={index}>
              {block.map((item, i) =>
                item.bold ? (
                  <strong key={i} className="font-semibold text-gray-900">
                    {item.text}
                  </strong>
                ) : (
                  <span key={i}>{item.text}</span>
                )
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
