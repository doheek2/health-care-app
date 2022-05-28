import AverageScoreGraph from './averageScoreGraph';
import ScorePredictGraph from './scorePredictGraph';
import CostPredictionGraph from './costPredictionGraph';
import CompareLastYear from './compareLastYear';
import styles from './healthResult.module.scss';

const HealthResult = () => {
  return (
    <section className={styles.sectionWrapper}>
      <CompareLastYear />
      <AverageScoreGraph />
      <ScorePredictGraph />
      <CostPredictionGraph />
    </section>
  );
};

export default HealthResult;
