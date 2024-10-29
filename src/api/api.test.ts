import fetchMock from 'fetch-mock';
import { getPaints, getPaintsSearch, getPaintById } from './api';
import { API_BASE_URL, API_URL, IMAGE_BASE_URL } from '../constants/constants';

describe('API Tests', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('fetchByText should return data', async () => {
    const search = 'art';
    const mockResponse = {
      data: [
        {
          id: 1,
          title: 'Art Title',
          image_id: 'image1',
          artist_title: 'Artist',
          is_on_view: true,
        },
      ],
    };
    fetchMock.getOnce(`${API_URL}?q=${encodeURIComponent(search)}&limit=100&fields=id,title,image_id,artist_title,is_on_view`, {
      body: mockResponse,
      headers: { 'content-type': 'application/json' },
    });

    const result = await getPaintsSearch(search);
    expect(result).toEqual([
      {
        id: 1,
        title: 'Art Title',
        author: 'Artist',
        imageUrl: `${IMAGE_BASE_URL}/image1/full/843,/0/default.jpg`,
        status: 'Public',
      },
    ]);
  });

  test('getPaints should return data', async () => {
    const mockResponse = {
      data: [
        {
          id: 1,
          title: 'Art Title',
          image_id: 'image1',
          artist_title: 'Artist',
          is_public_domain: true,
        },
      ],
    };
    fetchMock.getOnce(API_BASE_URL, {
      body: mockResponse,
      headers: { 'content-type': 'application/json' },
    });

    const result = await getPaints();
    expect(result).toEqual([
      {
        id: 1,
        title: 'Art Title',
        author: 'Artist',
        imageUrl: `https://www.artic.edu/iiif/2/image1/full/843,/0/default.jpg`,
        status: 'Public',
      },
    ]);
  });

  test('getPaintById should return data', async () => {
    const id = 1;
    const mockResponse = {
      data: {
        id: 1,
        title: 'Art Title',
        image_id: 'image1',
        artist_display: 'Artist',
        date_display: '2023',
        artist_nationality: 'Nationality',
        dimensions: 'Dimensions',
        credit_line: 'Credit Line',
        repository: 'Repository',
        is_public_domain: true,
      },
    };
    fetchMock.getOnce(`${API_BASE_URL}/${id}`, {
      body: mockResponse,
      headers: { 'content-type': 'application/json' },
    });

    const result = await getPaintById(id);
    expect(result).toEqual({
      id: 1,
      title: 'Art Title',
      author: 'Artist',
      imageUrl: `https://www.artic.edu/iiif/2/image1/full/843,/0/default.jpg`,
      years: '2023',
      nationality: 'Nationality',
      dimensions: 'Dimensions',
      creditLine: 'Credit Line',
      repository: 'Repository',
      status: 'Public',
    });
  });
});
