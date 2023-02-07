import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"

const MovieRaiting = ({number}) => {
return <div>
<FontAwesomeIcon icon={faStar} />
 <span>{number}</span>
</div>
}

export default MovieRaiting