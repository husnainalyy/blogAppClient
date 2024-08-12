import { useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';

const Header = () => {
    const [categories, setCategories] = useState([
        { name: "All", id: 1 },
        { name: "Technology", id: 2 },
        { name: "Design", id: 3 },
        { name: "Culture", id: 4 },
        { name: "Business", id: 5 },
        { name: "Politics", id: 6 },
        { name: "Opinion", id: 7 },
        { name: "Science", id: 8 },
        { name: "Health", id: 9 },
        { name: "Style", id: 10 },
        { name: "Travel", id: 11 },
        { name: "Culture", id: 12 },
        { name: "Business", id: 13 },
        { name: "Politics", id: 14 },
        { name: "Opinion", id: 15 },
        { name: "Science", id: 16 },
        { name: "Health", id: 17 },
        { name: "Style", id: 18 },
        { name: "Travel", id: 19 },
        { name: "Culture", id: 20 },
        { name: "Business", id: 21 },
        { name: "Politics", id: 22 },
        { name: "Opinion", id: 23 },
        { name: "Science", id: 24 },
        { name: "Health", id: 25 },
        { name: "Style", id: 26 },
        { name: "Travel", id: 27 },
        { name: "Culture", id: 28 },
        { name: "Business", id: 29 },
        { name: "Politics", id: 30 },
        { name: "Opinion", id: 31 },
        { name: "Science", id: 32 },
        { name: "Health", id: 33 },
        { name: "Style", id: 34 },
        { name: "Travel", id: 35 },
        { name: "Culture", id: 36 },
    ]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="w-full h-10 flex justify-between items-center px-4 bg-[#121822] text-white">
                <div>Infinity blogs</div>
                <div className="hidden md:flex">
                    {/* show first 10 categories only */}
                    {categories.slice(0, 10).map((category) => (
                        <button key={category.id} className="mx-2">{category.name}</button>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div>
                        <input type="text" placeholder='Enter Title' className='px-4 rounded-xl text-black' />
                    </div>
                    <button>
                        <FaSearch />
                    </button>
                    <button className="md:hidden" onClick={toggleMenu}>
                        <FaBars />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-[#121822] text-white">
                    {categories.map((category) => (
                        <button key={category.id} className="block w-full text-left px-4 py-2">{category.name}</button>
                    ))}
                </div>
            )}
        </>
    );
};

export default Header;