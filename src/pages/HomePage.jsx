import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiFillThunderbolt } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const HomePage = ({ initialArticles }) => {
    const [sections, setSections] = useState([]);
    const [articles, setArticles] = useState(initialArticles || []);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/v1/article/getArticles');
                if (!res.ok) throw new Error('Failed to fetch articles');
                const data = await res.json();
                setSections({
                    section1: Array.isArray(data.sections.section1) ? data.sections.section1 : [],
                    section2: Array.isArray(data.sections.section2) ? data.sections.section2 : [],
                    section3: Array.isArray(data.sections.section3) ? data.sections.section3 : []
                });
                
                setArticles(data.articles || []);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchArticles();
    }, []);

    // Function to format date to 'YYYY-MM-DD'
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-CA'); // 'en-CA' for 'YYYY-MM-DD' format
    };

    // Process and format section1Blogs
    const section1Blogs = Array.isArray(sections.section1)
        ? sections.section1.slice(0, 4).map(blog => ({
            ...blog,
            formattedDate: formatDate(blog.date),
        }))
        : [];

    // Process and format section2Blogs
    const section2Blogs = Array.isArray(sections.section2)
        ? sections.section2
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 9)
            .map(blog => ({
                ...blog,
                formattedDate: formatDate(blog.date),
            }))
        : [];

    // Process and format section3Blogs
    const section3Blogs = Array.isArray(sections.section3)
        ? sections.section3
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 8)
            .map(blog => ({
                ...blog,
                formattedDate: formatDate(blog.date),
            }))
        : [];



    return (
        <div className="w-full bg-[#F5F5F7]">
            <Header />
            <div className="container mx-auto px-28 mt-8 py-4">
                <p className='text-4xl font-semibold'>Latest news</p>
                <section>
                    <div className="flex justify-center items-center gap-4 mt-4 border rounded-2xl p-2  bg-white shadow-md">
                        <div className="">
                            <img
                                src={section1Blogs[3]?.thumbnailImage}
                                alt=""
                                className='h-full rounded-xl'
                            />
                        </div>
                        <div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9 col-12 col-sm-12">
                            <h1 className="text-gray-400 ">
                                <small className="d-flex">
                                    {" "}
                                    <AiFillThunderbolt />
                                    Quick Read
                                </small>
                            </h1>
                            <h1 className="pop font-bold text-3xl">
                                {section1Blogs[3]?.title}
                            </h1>
                            <h1 className="text-gray-400 font-bold mt-3">
                                <small className="d-flex">{section1Blogs[3]?.formattedDate} </small>
                            </h1>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {
                            section1Blogs.length > 0 ? section1Blogs.map((section, index) => (
                                <div key={index} className="flex flex-col justify-center items-center  gap-4 mt-4 border rounded-2xl py-8 bg-white shadow-md">
                                    <div className="">
                                        <img
                                            src={section.thumbnailImage}
                                            alt=""
                                            className='h-96 rounded-xl'
                                        />
                                    </div>
                                    <div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9 col-12 col-sm-12">
                                        <h1 className="text-gray-400 ">
                                            <small className="d-flex ">
                                                {" "}
                                                <AiFillThunderbolt />
                                                Quick Read
                                            </small>
                                        </h1>
                                        <h1 className="pop font-bold text-3xl">
                                            {section.title}
                                        </h1>
                                        <h1 className="text-gray-400 font-bold ">
                                            <small className="d-flex"> {section.formattedDate}</small>
                                        </h1>
                                    </div>
                                </div>
                            )) : (
                                <p>No articles available.</p>
                            )
                        }
                    </div>
                </section>
                <section>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                        {
                            section2Blogs.length > 0 ? section2Blogs.map((section, index) => (
                                <div key={index} className="flex flex-col justify-center items-center gap-4 mt-4 border rounded-2xl py-4  bg-white shadow-md">
                                    <div className="">
                                        <img
                                            src={section.thumbnailImage}
                                            alt=""
                                            className='h-full rounded-xl'
                                        />
                                    </div>
                                    <div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9 col-12 col-sm-12">
                                        <h1 className="text-gray-400 ">
                                            <small className="d-flex">
                                                {" "}
                                                <AiFillThunderbolt />
                                                Quick Read
                                            </small>
                                        </h1>
                                        <h1 className="pop font-bold text-lg">
                                            {section.title}
                                        </h1>
                                        <h1 className="text-gray-400 font-bold ">
                                            <small className="d-flex"> {section.formattedDate}</small>
                                        </h1>
                                    </div>
                                </div>
                            )) : (
                                <p>No articles available in section 2.</p>
                            )
                        }
                    </div>
                </section>
                <p className='text-3xl font-bold py-4'>More from Infinity Blogs</p>
                <section>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {
                            section3Blogs.length > 0 ? section3Blogs.map((section, index) => (
                                <div key={index} className="p-2 w-full flex justify-center items-center gap-4 mt-4 border rounded-2xl  bg-white shadow-md">
                                    <div className="">
                                        <img
                                            src={section.thumbnailImage}
                                            alt=""
                                            className='h-40 w-96 rounded-xl'
                                        />
                                    </div>
                                    <div className="col-md-9 col-lg-9 col-xl-7 col-xxl-9 col-12 col-sm-12">
                                        <h1 className="text-gray-400 ">
                                            <small className="d-flex">
                                                {" "}
                                                <AiFillThunderbolt />
                                                Quick Read
                                            </small>
                                        </h1>
                                        <h1 className="pop font-bold text-lg">
                                            {section.title}
                                        </h1>
                                        <h1 className="text-gray-400 font-bold ">
                                            <small className="d-flex"> {section.formattedDate}</small>
                                        </h1>
                                    </div>
                                </div>
                            )) : (
                                <p>No articles available in section 3.</p>
                            )
                        }
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

// Fetch articles server-side
export async function getServerSideProps() {
    try {
        const res = await fetch('http://localhost:5000/api/v1/article/getarticle');
        if (!res.ok) throw new Error('Failed to fetch articles');
        const data = await res.json();
        return {
            props: { initialArticles: data.articles || [] },
        };
    } catch {
        return {
            props: { initialArticles: [] },
        };
    }
}

export default HomePage;
