import { useState } from "react";

const Footer = () => {
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

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Infinity Blogs</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {categories.map(category => (
                        <div key={category.id} className="flex items-center">
                            <span className="text-sm">{category.name}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Infinity Blogs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;