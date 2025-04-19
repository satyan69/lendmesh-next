export default function Pagination({
    page,
    totalPages,
    onPageChange,
  }: {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }) {
    return (
      <div className="flex justify-center items-center mt-6">
        <button
          type="button"
          className={`bg-[#F4F9FE] ${
            page === 1 ? "" : "hover:bg-[#6BE3A2]"
          } rounded-full px-2 py-2 cursor-pointer`}
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          <svg
            className="size-8 transform rotate-90"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <span className="text-sm px-5">
          Page {page} of {totalPages}
        </span>
        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className={`bg-[#F4F9FE] text-xl rounded-full px-2 py-2 cursor-pointer ${
            page === totalPages ? "" : "hover:bg-[#6BE3A2]"
          }`}
        >
          <svg
            className="size-8 transform -rotate-90"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  } 