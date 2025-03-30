const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const handleSubmissionCount = (readOnly = false) => {
  try {
    const currentValue = getLocalStorage("qs") || 0;
    const localStorageDate = getLocalStorage("date");
    const now = new Date();

    if (
      localStorageDate &&
      now - new Date(localStorageDate) < 24 * 60 * 60 * 1000
    ) {
      if (currentValue >= 3) {
        return false;
      }
      if (!readOnly) {
        setLocalStorage("qs", currentValue + 1);
      }
      return true;
    }
    if (!readOnly) {
      setLocalStorage("qs", 1);
      setLocalStorage("date", now.toISOString());
    }
    return true;
  } catch {
    return false;
  }
};
