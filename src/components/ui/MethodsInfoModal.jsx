import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import MethodIcon from './MethodIcon';
import { getEnabledMethods } from '../../constants/calculationMethods';
import styles from '../../styles/components/MethodsInfoModal.module.css';
import copy from '../../../config/copy.json';

function MethodsInfoModal({ onClose }) {
  const enabledMethods = getEnabledMethods();
  const methodsInfo = copy.results.methodsInfo.methods;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{copy.results.methodsInfo.modalTitle}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={16} />
          </button>
        </div>
        <div className={styles.content}>
          {enabledMethods.map((method, index) => {
            const info = methodsInfo[method.key];
            if (!info) return null;
            const methodCopy = copy.results.methods[method.key];
            return (
              <div key={method.key}>
                {index > 0 && <div className={styles.divider} />}
                <div className={styles.methodSection}>
                  <div className={styles.methodHeader}>
                    {methodCopy?.icon && <MethodIcon name={methodCopy.icon} size={20} />}
                    <h3 className={styles.methodTitle}>{info.title}</h3>
                  </div>
                  <div className={styles.methodDescription}>
                    <ReactMarkdown>{info.description}</ReactMarkdown>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MethodsInfoModal;
