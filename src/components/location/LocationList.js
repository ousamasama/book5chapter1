import React, { Component } from 'react'

class LocationList extends Component {
    render() {
        return (
            <article>
                <h3>Student Kennels</h3>
                <section className="puppy">
                    <h4>Nashville North Location</h4>
                    <h5>500 Puppy Way</h5>
                </section>
                <section className="kitty">
                    <h4>Nashville South Location</h4>
                    <h5>501 Kitty Way</h5>
                </section>
            </article>
        );
    }
}

export default LocationList