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

export const incrementQs = () => {
  const currentValue = getLocalStorage("qs");
  if (currentValue !== null) {
    setLocalStorage("qs", currentValue + 1);
  } else {
    setLocalStorage("qs", 0);
  }
};
