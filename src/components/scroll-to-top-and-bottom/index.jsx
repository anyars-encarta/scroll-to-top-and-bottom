import { useRef } from 'react';
import UseFetch from './use-fetch';

const ScrollToTopAndBottom = () => {
  const { data, error, loading } = UseFetch(
    'https://dummyjson.com/products?limit=100',
    {},
  );

  const bottomRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (error) {
    return (
      <h3>
        {error}
        .
      </h3>
    );
  }

  if (loading) {
    return <h3>Loading data. Please wait...</h3>;
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button type="button" onClick={handleScrollToBottom}>Scroll To Bottom</button>

      {
                data && data.products && data.products.length
                  ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
                  : null
            }

      <button type="button" onClick={handleScrollToTop}>Scroll To Top</button>
      <h3 ref={bottomRef}>This is the bottom of the page</h3>
    </div>
  );
};

export default ScrollToTopAndBottom;
