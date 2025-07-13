export const formatDate = (date: any) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const calculateDuration = (startDate: any, endDate?: any) => {
  const start = new Date(String(startDate));
  const end = endDate ? new Date(String(endDate)) : new Date();
  
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth() + (years * 12);
  
  const totalYears = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (totalYears === 0) {
    return `${remainingMonths} month${remainingMonths === 1 ? '' : 's'}`;
  } else if (remainingMonths === 0) {
    return `${totalYears} year${totalYears === 1 ? '' : 's'}`;
  } else {
    return `${totalYears} year${totalYears === 1 ? '' : 's'}, ${remainingMonths} month${remainingMonths === 1 ? '' : 's'}`;
  }
}; 