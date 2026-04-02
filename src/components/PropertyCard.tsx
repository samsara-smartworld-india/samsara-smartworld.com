import Link from 'next/link';

interface PropertyCardProps {
  title: string;
  location: string;
  area: string;
  rent: string;
  highlights: string[];
  href: string;
  badge?: string;
}

export default function PropertyCard({ title, location, area, rent, highlights, href, badge }: PropertyCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
      {/* Placeholder image area */}
      <div className="relative h-52 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
        <span className="text-blue-300 text-sm">Property Image</span>
        {badge && (
          <span className="absolute top-3 left-3 bg-blue-700 text-white text-xs font-semibold px-2.5 py-1 rounded">
            {badge}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{location}</p>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="bg-gray-50 rounded px-3 py-2">
            <span className="block text-xs text-gray-500">Area</span>
            <span className="font-semibold text-gray-900">{area}</span>
          </div>
          <div className="bg-gray-50 rounded px-3 py-2">
            <span className="block text-xs text-gray-500">Rent</span>
            <span className="font-semibold text-gray-900">{rent}</span>
          </div>
        </div>

        <ul className="space-y-1.5 mb-6 flex-1">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
              <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {h}
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="block text-center rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
