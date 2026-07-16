export function Mark() {
  return (
    <svg className="site-mark" viewBox="0 0 36 36" aria-hidden="true">
      <path d="M7 9 18 18 29 9M7 27l11-9 11 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle className="mark-vector" cx="7" cy="9" r="3" />
      <circle className="mark-vector" cx="29" cy="9" r="3" />
      <circle className="mark-center" cx="18" cy="18" r="3.8" />
      <circle className="mark-graph" cx="7" cy="27" r="3" />
      <circle className="mark-graph" cx="29" cy="27" r="3" />
    </svg>
  )
}
