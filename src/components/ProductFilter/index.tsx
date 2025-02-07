"use client";
import { useState, useRef, useEffect } from "react";
import { LucideCircleChevronDown } from "lucide-react";
export default function ProductCTA() {
  
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  const [selectedOption, setSelectedOption] = useState("");

  // Close details when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(event.target as Node)
      ) {
        detailsRef.current.open = false; // Close <details>
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex gap-5">
      <div className="relative">
        {/* ✅ Keep <details> and set it open by default */}
        <details
          ref={detailsRef}
          className="group [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            
            <span className="text-md font-semibold"> Sort by </span>

            <span className="transition group-open:-rotate-180">
              <LucideCircleChevronDown/>
            </span>
          </summary>

          <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-1">
            <div className="w-65 rounded-sm border border-gray-200 bg-white">
              <ul className="space-y-1 border-gray-200 p-4">
                {["Newest", "Highest", "Lowest"].map((option) => (
                  <li key={option}>
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name="sortOption"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => setSelectedOption(option)}
                        className="size-5 rounded-sm border-gray-300"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {option}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
