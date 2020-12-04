const generateImageURL = (fileName: string): string => {
  return "https://book-server-image.s3-ap-northeast-1.amazonaws.com/" + fileName;
};
export { generateImageURL };
