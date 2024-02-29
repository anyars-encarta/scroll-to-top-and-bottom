import { useEffect, useState } from "react";

const ScrollToTopAndBottom = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fetch('https://dummyjson.com/products?limit=100');
            const data = await response.json();
            setProducts(data.products);
            setLoading(false);
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (error) {
      return  <h3>There was an error. {error}.</h3>
    };

    if (loading) {
       return <h3>Loading data. Please wait...</h3>
    };

    return (<div>
        <h1>Scroll To Top And Bottom Feature</h1>
        <h3>This is the top section</h3>
        <button>Scroll To Bottom</button>
        {
            products && products.length ? 
            products.map(item => 
                <div key={item.id}>
                    <p>{item.title}</p>
                </div>)
            : null
        }
        <button>Scroll To Top</button>
        <h3>This is the bottom of the page</h3>
    </div>)
};

export default ScrollToTopAndBottom;