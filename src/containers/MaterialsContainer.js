import React from 'react'
import { connect } from 'react-redux'
// import { BrowserRouter as Router } from 'react-router-dom'
import Material from '../components/Material'
import MaterialForm from '../components/MaterialForm'
// import { fetchMaterials } from '../actions/fetchMaterials'

class MaterialsContainer extends React.Component{

    render() {
        return (
            <div>
                <MaterialForm id={this.props.match.params.id}/>
                <ul>
                    <Material patterns={this.props} />
                </ul>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        patterns: state.PatternReducer.patterns
    }
}


export default connect(mapStateToProps)(MaterialsContainer)
