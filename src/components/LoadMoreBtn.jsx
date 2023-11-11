import './LoadMoreBtn.css';

const LoadMoreBtn = ({handleLoadMore}) => {
    return (  
        <div className="button-container" onClick={handleLoadMore}>
            <button>More Pokemon</button>
        </div>
    );
}
 
export default LoadMoreBtn;