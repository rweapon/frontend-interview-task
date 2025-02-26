export const formatSiteUrl = (url: string): string => {
  return url.replace(/^(https?:\/\/)?(www\.)?/, '');
};