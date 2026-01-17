/**
 * Progress bar indicator for question screens
 * Shows completion percentage with gradient fill
 */
const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-container">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
