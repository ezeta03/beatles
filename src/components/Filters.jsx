import React from 'react';
import styles from '../assets/sass/App.module.scss'

const Filters = ({
  blocks,
  composers,
  blockFilter,
  composerFilter,
  setBlockFilter,
  setComposerFilter
}) => (
  <div className={styles.filters}>
    <select value={blockFilter} onChange={(e) => setBlockFilter(e.target.value)}>
      {blocks.map(block => <option key={block} value={block}>{block}</option>)}
    </select>
    <select value={composerFilter} onChange={(e) => setComposerFilter(e.target.value)}>
      {composers.map(composer => <option key={composer} value={composer}>{composer}</option>)}
    </select>
  </div>
);

export default Filters;