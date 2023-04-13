import styles from '@/styles/Directory.module.css';

export function Directory() {
    return (<>
        <div className={styles.totalScreen}>
            <div className={styles.filtersBox}>
                <p>Filters</p>

                <div className={styles.typeFilterComponent}>
                    <p>type: </p>
                    <input
                        className={styles.blockBoundary}
                        id="frm-type"
                        name="type"
                        required
                    />
                </div>

                <div className = {styles.checkboxComponent}>
                    <label>
                        <input type="checkbox" className={styles.checkboxBoundary}/>
                        <span className = {styles.checkLabel}>Alphabetical</span>
                    </label>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.searchBox}>
                    4 results
                </div>
                <div className={styles.resultsNum}>
                    3 results
                </div>
                <div className={styles.directory}>

                </div>
            </div>
        </div>
        
    </>)
}