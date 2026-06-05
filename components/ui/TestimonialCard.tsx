type Props = {
  quote: string;
  author: string;
  location?: string;
};

export function TestimonialCard({ quote, author, location }: Props) {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <blockquote className="text-slate-700 leading-relaxed">
        <span aria-hidden className="mr-1 text-2xl text-sky-300">
          “
        </span>
        {quote}
      </blockquote>
      <figcaption className="mt-4 text-sm font-medium text-slate-900">
        {author}
        {location && (
          <span className="ml-2 font-normal text-slate-500">— {location}</span>
        )}
      </figcaption>
    </figure>
  );
}
