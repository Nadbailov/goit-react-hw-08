import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.notFound}>
      <h1 className={s.notFoundTitle}>404</h1>
      <p className={s.notFoundText}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={s.home}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
