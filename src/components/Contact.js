import React, {Component} from "react";
import axios from "axios";

const Individual = ({ individual: {id, email, name, designation, photo_path} }) => {

    return (
        <div className='country'>
            <div className='country_flag'>
                <img src={photo_path} alt={id}/>
            </div>
            <div className='country_text'>
                <p>
                    <span>Designation: </span>
                    {designation}
                </p>
                <p>
                    <span>Email: </span>
                    {email}
                </p>
            </div>
        </div>
    )
};

class Contact extends Component {
    state = {
        data: [],
    };

    componentDidMount() {
        this.fetchIndividualData()
    }
    fetchIndividualData = async () => {
        const url = 'http://accrdet.localhost/individual_list';
        try {
            const response = await axios.get(url);
            const data = await response.data;
            this.setState({
                data,
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className='app'>
                <h1>React Component Life Cycle</h1>
                <h1>Calling API</h1>
                <p>There are {this.state.data.length} individuals in the api</p>
                <div className='countries-wrapper'>
                    {this.state.data.map((individual) => (
                        <Individual individual={individual} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Contact;