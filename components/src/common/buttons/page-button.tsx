type PageButtonProps = {
    page: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function PageButton({ page, currentPage, setCurrentPage }: PageButtonProps) {
    const isActive = currentPage === page;
    return (
        <button
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-semibold shadow text-base 
            transition-all duration-150 focus:outline-none focus:ring-[var(--main-color-secondary)] 
            focus:ring-2 focus:border-[var(--main-color-secondary)] z-10 ${
                isActive
                    ? 'bg-blue-100 text-[var(--main-color)] border-blue-400 scale-105'
                    : 'bg-[var(--background)]/80 text-gray-700 border-blue-200 hover:bg-blue-50 hover:border-blue-300'
            }`}
            onClick={() => setCurrentPage(page)}
            aria-current={isActive ? 'page' : undefined}
        >
            {page}
        </button>
    );
}