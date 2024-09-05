document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("searchInput");
  const tooltip = document.getElementById("tooltip");

  const movies = [
    "Интерстеллар",
    "Остров проклятых",
    "Отступники",
    "Волк с Уолл-Стрит",
    "Начало",
    "Выживший",
    "Титаник",
  ];

  //Функция для отображения рекомендаций
  const showRecommendations = (filteredMovies) => {
    tooltip.innerHTML = ""; //Очищаем предыдущие результаты
    if (filteredMovies.length > 0) {
      filteredMovies.forEach((movie) => {
        const item = document.createElement("div");
        item.classList.add("tooltip-item");
        item.textContent = movie;
        item.addEventListener("click", () => {
          searchInput.value = movie; //Выставляем выбранный фильм в input
          tooltip.style.display = "none"; //Скрываем подсказки
        });
        tooltip.appendChild(item);
      });
      tooltip.style.display = "block"; //Показываем подсказки
    } else {
      tooltip.style.display = "none"; //Скрываем подсказки
    }
  };

  //Обработка события фокуса на Input
  searchInput.addEventListener("focus", () => {
    showRecommendations(movies); //Показываем все фильмы при фокусе
  });

  //Обработка ввода текста
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter((movie) =>
      movie.toLowerCase().includes(searchTerm)
    );
    showRecommendations(filteredMovies);
  });

  //Обработка потери фокуса
  searchInput.addEventListener("blur", () => {
    setTimeout(() => {
      tooltip.style.display = "none"; //Скрываем подсказки после потери фокуса
    }, 200); //Небольшая задержка, чтобы успеть кликнуть на фильм
  });
});
