import React, { Component } from 'react';
import axios from 'axios';
class Categories extends Component {

    state = {
        categories: []
    }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/api/category/')
    //         .then(response => {
    //             this.setState({
    //                 categories: response.data
    //             })
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.log('error', error);
    //         })
    // }

    componentDidMount() {
        axios.get('http://localhost:5000/api/category/',{
            "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMDkwNTUxZjRjMGQzMjFhOGFhMzljYSIsImlhdCI6MTU2MTU3OTY2MywiZXhwIjoxNTYxNjE1NjYzfQ.OhdYuaC1HlbqDWH6pq3NYH5kandiX3M3xMZ_kPB9gqQ"
        })
            .then(response => {
                this.setState({
                    categories: response.data
                })
                console.log(response);
            })
            .catch(error => {
                console.log('error', error);
            })
    }
    render() {
        return (
            <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
                {this.state.categories.map(category => (
                    <li className="nav-item" key={category._id}>{category.title}</li>
                ))}
             </ul>
             </div> 
             </nav>  
            </div>
        )
    }
}
 
export default Categories;