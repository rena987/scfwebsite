import styles from '@/styles/Directory.module.css';
import OrgCard from './orgCard';
import Image from 'next/image';

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
                <label role="search" className={styles.searchBox}>
                    <i className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search for a startup..."
                    />
                </label>
                <div className={styles.resultsNum}>
                    3 results
                </div>
                <div className={styles.directory}>
                    <OrgCard />
                    <OrgCard />
                    <OrgCard />
                </div>
            </div>
        </div>
        
    </>)
}
