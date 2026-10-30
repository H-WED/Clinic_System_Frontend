import "./Card.scss";

export function CardContainer({ children, className = "" }) {
  return <div className={`cardContainer ${className}`}>{children}</div>;
}

export function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}
