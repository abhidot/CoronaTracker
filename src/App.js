import React, {Fragment} from 'react';

import { Cards, Chart, CountryPicker, Home, About, Symptoms, Precautions } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data:{},
        country:'',
    }

    async componentDidMount(){
        const data = await fetchData();
        this.setState({data});
    }
    handleCountryChange = async (country) => {
        const fetchedData  = await fetchData(country);
        this.setState({data:fetchedData,country:country});
    }
    render() {
        const { data,country } = this.state;
        return (
            <div id="fullpage">
                <section className={styles.home} id="home">
                <Home />
            </section>
            <section className={styles.about} id="about">
                <About />
            </section>
            <section className={styles.symptoms} id="symptoms">
                <Symptoms />
            </section>
            <section className={styles.precautions} id="precautions">
                <Precautions />
            </section>
            <div className= {styles.container} id="tracker">
                <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" alt="COVID-19" ></img>
                <Cards data={ data } />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country = {country} />
            </div>
            </div>
        );
    }
}
export default App;