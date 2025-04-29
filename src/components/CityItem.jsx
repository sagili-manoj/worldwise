import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  console.log(emoji);
  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }
  const emojiMap = {
    IN: "🇮🇳",
    US: "🇺🇸",
    CA: "🇨🇦",
    FR: "🇫🇷",
    JP: "🇯🇵",
    DE: "🇩🇪",
    CN: "🇨🇳",
    GB: "🇬🇧",
    IT: "🇮🇹",
    // Add more as needed
  };

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}> {emojiMap[emoji.toUpperCase()] || "🏳️"}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
