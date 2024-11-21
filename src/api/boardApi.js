import axiosInstance from '../axiosInstance';

async function apiRequest({
  method = 'GET',
  endpoint,
  data = null,
  errorMessage,
}) {
  try {
    const response = await axiosInstance({
      method,
      url: endpoint,
      data,
    });
    return response.data;
  } catch (error) {
    throw new Error(errorMessage);
  }
}

export async function getArticles(size) {
  return apiRequest({
    method: 'GET',
    endpoint: `/articles?orderBy=like&pageSize=${size}`,
    errorMessage: '게시글을 불러오는데 실패했습니다.',
  });
}
