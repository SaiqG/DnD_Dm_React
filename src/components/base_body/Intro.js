import './Intro.css'
import '../../App.css'
import Lists from '../lists/Lists'

function BaseAppBody() {
    return (

        <div className='intro'>
            <div className='container'>
                <Lists /> 
            </div>
        </div>

    )
}

export default BaseAppBody;