import styles from './styles.css';
import SearchContainer from '../Search/SearchContainer.jsx';
import Dropdown from '../Dropdown/Dropdown.jsx';
import Icon from '../Icon/Icon.jsx'

const ReviewsControl = ({searchMode, reviewsCount, searchedTerm, onClearSearch, sortOptions, languages_count, onLanguageChange, onSortOptionChange}) => {
    if(searchMode) {
    return (
      <div className={styles.reviewsHeader}>
      <p className={styles.headerLabel}>Recommended Reviews</p>      
      <form className={styles.headerForm} onSubmit={(e)=> e.preventDefault()} id="reviewsControl">
              <p className={styles.searchResultText}>
                  {`${reviewsCount} reviews mentioning “${searchedTerm}”`}
              </p>  
              <button className={styles.clearSearchButton} onClick={onClearSearch}>
              Clear results
                  <Icon name="close_small" height="14" width="14" fill="#666" />
              </button>
            <span className={styles.searchbarWrapper}>    
                <SearchContainer />
            </span>          
        </form>
      </div>
    )
  }

  return (
    <div className={styles.reviewsHeader}>
      <p className={styles.headerLabel}>Recommended Reviews</p>
      
      <form className={styles.headerForm} onSubmit={(e)=> e.preventDefault()} id="reviewsControl">
          <span className={styles.searchbarWrapper}>    
            <SearchContainer />
          </span>          
          <span className={styles.dropdownWrapper}>
              <Dropdown label="Sort By" options={sortOptions} selectedIdx={0} onSelectionChange={onSortOptionChange} />
          </span>          
          <span className={styles.dropdownWrapper}>
              <Dropdown label="Language" options={languages_count} selectedIdx={0} onSelectionChange={onLanguageChange} />
          </span>
      </form>
    </div>
  )
};

export default ReviewsControl;
