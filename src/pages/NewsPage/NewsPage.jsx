import { useState, useEffect } from 'react';
import Loader from 'shared/components/Loader';
import Container from 'shared/components/Container';
import Title from 'shared/components/Title';
import Search from 'shared/components/Search';
import NewsList from './NewsList';
import Pagination from 'shared/hooks/pagination';

import { getAllNews } from 'utils/ApiNews';
import { useSearchParams } from 'react-router-dom';
import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get('page');
    return page ? Number(page) : 1;
  });
  const [fetching, setFetching] = useState(false);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    setFetching(true);
    const params = { page: currentPage };

    if (search) {
      params.search = search;
    }
    const fetchNews = async params => {
      try {
        const { data } = await getAllNews(params);
        console.log('data:', data);

        setNews(data.results);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.log(error);
      } finally {
        setFetching(false);
      }
    };
    fetchNews(params);
  }, [currentPage, search]);

  const onSubmit = async values => {
    const params = { page: 1, search: values.search };
    try {
      const { data } = await getAllNews(params);
      setNews(data.results);
      setTotalPages(data.totalPages);
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    } finally {
      setFetching(false);
    }
    setSearchParams(params);
  };

  return (
    <Container>
      {/* <Title>News</Title> */}
      {/* <Search onFormSubmit={onSubmit} setItems={setNews} /> */}

      {/* {fetching && <Loader />} */}
      {/* {Boolean(news.length) && <NewsList items={news} />} */}
      {/* {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          setFetching={setFetching}
        />
      )} */}

      <div
        style={{
          width: '600px',
          height: '100px',
          background: '#fff',
          display: 'flex',
          gap: '20px',
        }}
      >
        <Button w="150">Button</Button>
        <Button shape="solid" w="150">
          Button
          <Icon id="paw" f="currentColor" s="none" />
        </Button>
        <Button shape="solid" w="150">
          Button
          <Icon id="camera" />
        </Button>
        <Button shape="yellow" w="150">
          Button
          <Icon id="location" />
        </Button>
      </div>
    </Container>
  );
};

export default NewsPage;
