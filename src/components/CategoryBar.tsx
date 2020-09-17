import React from 'react';

interface Props {
  trail: string[];
}

const CategoryBar: React.FC<Props> = ({ trail }) => (
  <div className="mt-8">
    {trail.map((category, i) => {
      return (
        // Initially I was using <></> syntax here but,
        // since the key attribute can not be added to <></>
        // I decided to use React.Fragment instead
        <React.Fragment key={`category-${i}`}>
          <button
            className="text-lg tracking-wider font-bold font-mono inline text-gray-600 hover:text-gray-500 focus:outline-none"
            onClick={() => alert(`Clicked ${category}`)}
          >
            {category.toUpperCase()}
          </button>

          {/* Basically if its the last item don't insert ">" */}
          {i + 1 !== trail.length && (
            <span className="px-2" style={{ color: '#6E757F' }}>
              {/* ">" */}
              &gt;
            </span>
          )}
        </React.Fragment>
      );
    })}
  </div>
);

export default CategoryBar;
