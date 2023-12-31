const ImportanceIcon = ({ fill, stroke, isInTodoCard }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill ? fill : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={stroke ? stroke : "currentColor"}
      style={{ width: isInTodoCard ? "2rem" : "1.8rem", height: isInTodoCard ? "2rem" : "1.8rem" }}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
};

export default ImportanceIcon;
