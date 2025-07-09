import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaBook } from 'react-icons/fa';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 12;

    useEffect(() => {
        fetch('/data/books.json')
            .then((res) => res.json())
            .then((data) => {
                const updated = data.map((b) => ({ ...b, showEmail: false }));
                setBooks(updated);
            })
            .catch((err) => console.error('Error loading books:', err));
    }, []);


    // Pagination Logic
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    const totalPages = Math.ceil(books.length / booksPerPage);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
            <h1 className="text-4xl font-bold text-center mb-12 text-blue-700 dark:text-yellow-300 flex justify-center items-center gap-3">
                <FaBook className="text-blue-600 dark:text-yellow-400" /> Available Books
            </h1>

            {/* Book Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {currentBooks.map((book) => (
                    <div
                        key={book.id}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl border dark:border-gray-700"
                    >
                        <div className="w-full h-64 overflow-hidden flex items-center justify-center bg-white dark:bg-gray-700">
                            <img
                                src={book.image}
                                alt={book.name}
                                className="h-full w-auto object-contain"
                            />
                        </div>

                        <div className="p-5 space-y-3">
                            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{book.name}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{book.description}</p>
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                                <p><strong>Seller:</strong> {book.seller}</p>
                                <p><strong>Price:</strong> ₹{book.price}</p>
                            </div>
                            {book.email ? (
                                <>
                                    <button
                                        onClick={() =>
                                            setBooks((prevBooks) =>
                                                prevBooks.map((b) =>
                                                    b.id === book.id ? { ...b, showEmail: !b.showEmail } : b
                                                )
                                            )
                                        }
                                        className="inline-flex items-center gap-2 mt-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition"
                                    >
                                        <FaEnvelope /> Contact Seller
                                    </button>
                                    {book.showEmail && (
                                        <p className="mt-2 text-blue-700 dark:text-blue-300 text-sm font-medium">
                                            {book.email}
                                        </p>
                                    )}
                                </>
                            ) : (
                                <button
                                    disabled
                                    className="inline-flex items-center gap-2 mt-2 text-white bg-gray-400 px-4 py-2 rounded-lg text-sm cursor-not-allowed"
                                >
                                    <FaEnvelope /> Email Not Available
                                </button>
                            )}



                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Buttons */}
            <div className="mt-12 flex justify-center items-center gap-4">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded disabled:opacity-50"
                >
                    Previous
                </button>

                {[...Array(totalPages)].map((_, idx) => (
                    <button
                        key={idx + 1}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`px-3 py-1 rounded ${currentPage === idx + 1
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                            }`}
                    >
                        {idx + 1}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Books;
