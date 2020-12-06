const generateImageURL = (fileName: string): string => {
  const endpoint = "https://book-server-image.s3-ap-northeast-1.amazonaws.com/";
  return endpoint + fileName;
};
export { generateImageURL };
