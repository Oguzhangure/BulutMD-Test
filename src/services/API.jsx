import data from "../data/data.json";

const API = () => {
  //Filmleri ve Dizileri çeken fonksiyonlar.
  const getMovies = () =>
    data.entries.filter((item) => item.programType === "movie");

  const getSeries = () =>
    data.entries.filter((item) => item.programType === "series");

    
  //Çekilen bileşenleri sıralayan fonsiyon. Belirlediğim c parametresi istenen şekilde sıralama yapılmasını sağlar (Yeniden eskiye,Eskiden yeniye).
  const sortSeries = (c) =>
    getSeries().sort((a, b) => {
      if (c === true) {
        return b.releaseYear - a.releaseYear;
      } else {
        return a.releaseYear - b.releaseYear;
      }
    });

  const sortMovies = (c) =>
    getMovies().sort((a, b) => {
      if (c === true) {
        return b.releaseYear - a.releaseYear;
      } else {
        return a.releaseYear - b.releaseYear;
      }
    });
  
  //Çekilen itemleri rastgele sıralayan fonksiyon. tempItems, hangi bilenşenlei çektiğimizi belirlediğimiz parametre.
  const randomizeItems = (tempItems) => {
    for (let i = 0; i < tempItems.length; i++) {
      const tempItem = tempItems[i];
      const randomIndex = Math.floor(Math.random() * tempItems.length);
      tempItems[i] = tempItems[randomIndex];
      tempItems[randomIndex] = tempItem;
    }
    return tempItems;
  };
  //Arama fonsiyonu. Çekilen veriyi inputtaki veriye göre filtreler
  const searchItems = (inputText, items) => {
    const filteredItems = [
      items.filter((movie) => {
        return movie.title.toLowerCase().includes(inputText.toLowerCase());
      }),
    ];
    return filteredItems[0];
  };

  return {
    getMovies,
    getSeries,
    sortMovies,
    sortSeries,
    randomizeItems,
    searchItems,
  };
};

export default API;
