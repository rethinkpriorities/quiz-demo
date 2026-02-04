import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import Header from './layout/Header';
import WorldviewSlotModal from './ui/WorldviewSlotModal';
import ShareButton from './ui/ShareButton.jsx';
import { useQuiz } from '../context/useQuiz';
import { useShareUrl } from '../hooks/useShareUrl.js';
import styles from '../styles/components/WorldviewHub.module.css';
import copy from '../../config/copy.json';
import features from '../../config/features.json';

/**
 * Worldview Hub screen for advanced mode.
 * Shows worldview slots that can be filled by taking the quiz.
 * Allows adding more worldviews dynamically.
 * Provides access to Moral Marketplace when 2+ worldviews are filled.
 */
function WorldviewHub() {
  const {
    worldviewIds,
    worldviewNames,
    completedMap,
    switchWorldview,
    startQuiz,
    goToStep,
    justCompletedWorldview,
    clearJustCompletedWorldview,
    worldviews,
    activeWorldviewId,
    selectedCalculations,
    marketplaceBudget,
    canAddWorldview,
    addWorldview,
  } = useQuiz();

  const [modalWorldviewId, setModalWorldviewId] = useState(null);

  const {
    copied,
    loading: shareLoading,
    error: shareError,
    handleShare: handleShareClick,
  } = useShareUrl({
    worldviews,
    activeWorldviewId,
    selectedCalculations,
    worldviewNames,
    marketplaceBudget,
  });

  // Derive alert state from justCompletedWorldview
  const showAlert = Boolean(justCompletedWorldview);
  const alertMessage = justCompletedWorldview
    ? `${worldviewNames[justCompletedWorldview] || `Worldview ${justCompletedWorldview}`} completed!`
    : '';

  // Auto-dismiss alert after 3 seconds
  useEffect(() => {
    if (justCompletedWorldview) {
      const timer = setTimeout(() => clearJustCompletedWorldview(), 3000);
      return () => clearTimeout(timer);
    }
  }, [justCompletedWorldview, clearJustCompletedWorldview]);

  // Count filled worldviews
  const filledCount = worldviewIds.filter((id) => completedMap[id]).length;
  const canAccessMarketplace = filledCount >= 2;

  const handleSlotClick = (worldviewId) => {
    const isFilled = completedMap[worldviewId];

    if (isFilled) {
      // Show modal with options for filled slots
      setModalWorldviewId(worldviewId);
    } else {
      // Start quiz for empty slots
      switchWorldview(worldviewId);
      startQuiz();
    }
  };

  const handleEditAnswers = () => {
    if (modalWorldviewId) {
      switchWorldview(modalWorldviewId);
      startQuiz();
    }
    setModalWorldviewId(null);
  };

  const handleCloseModal = () => {
    setModalWorldviewId(null);
  };

  const handleMarketplace = () => {
    goToStep('marketplace');
  };

  return (
    <div className="screen">
      <Header />

      {showAlert && <div className={styles.alert}>{alertMessage}</div>}

      <main className="screen-main">
        <div className={styles.container}>
          <h1 className={styles.heading}>{copy.hub?.heading || 'Your Worldviews'}</h1>
          <p className={styles.subtitle}>
            {copy.hub?.subtitle ||
              'Define different perspectives, then see how they combine in the Moral Marketplace.'}
          </p>

          <div className={styles.slotsGrid}>
            {worldviewIds.map((id) => {
              const isFilled = completedMap[id];
              const name = worldviewNames[id] || `Worldview ${id}`;

              return (
                <div
                  key={id}
                  className={`${styles.slotCard} ${
                    isFilled ? styles.slotCardFilled : styles.slotCardEmpty
                  }`}
                  onClick={() => handleSlotClick(id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleSlotClick(id);
                    }
                  }}
                >
                  <span className={styles.slotNumber}>Slot {id}</span>
                  <span className={styles.slotName}>{name}</span>
                  {isFilled ? (
                    <>
                      <span className={styles.slotCheckmark}>&#10003;</span>
                      <span className={`${styles.slotStatus} ${styles.slotStatusFilled}`}>
                        Click to edit
                      </span>
                    </>
                  ) : (
                    <span className={`${styles.slotStatus} ${styles.slotStatusEmpty}`}>
                      Click to define
                    </span>
                  )}
                </div>
              );
            })}

            {/* Add worldview card - only show when more can be added */}
            {canAddWorldview && (
              <div
                className={`${styles.slotCard} ${styles.slotCardAdd}`}
                onClick={addWorldview}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    addWorldview();
                  }
                }}
              >
                <Plus size={32} className={styles.addIcon} />
                <span className={styles.addLabel}>
                  {copy.hub?.addWorldview || 'Add another worldview'}
                </span>
              </div>
            )}
          </div>

          <div className={styles.marketplaceSection}>
            <button
              className={`btn btn-primary ${styles.marketplaceButton}`}
              onClick={handleMarketplace}
              disabled={!canAccessMarketplace}
            >
              {copy.hub?.marketplaceButton || 'View Moral Marketplace'}
            </button>
            {!canAccessMarketplace && (
              <p className={styles.marketplaceHint}>
                {copy.hub?.marketplaceHint || 'Complete at least 2 worldviews to unlock'}
              </p>
            )}
            {features.ui?.shareResults && filledCount > 0 && (
              <ShareButton
                loading={shareLoading}
                copied={copied}
                error={shareError}
                onClick={handleShareClick}
                className={styles.shareButton}
              />
            )}
          </div>
        </div>
      </main>

      {modalWorldviewId && (
        <WorldviewSlotModal
          worldviewId={modalWorldviewId}
          worldviewName={worldviewNames[modalWorldviewId] || `Worldview ${modalWorldviewId}`}
          onEditAnswers={handleEditAnswers}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default WorldviewHub;
