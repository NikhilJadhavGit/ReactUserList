import React from "react";
import CardArray from './CardArray';
import SearchBox from './SearchBox'
import Scroll from './Scroll';
class App extends React.Component{
        constructor(){
        super();
        this.state = {
            searchField : '',
            users : []
        }
         
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((users)=>users.json())
        .then((data)=>this.setState({users:data}));
    }
    onSearchFieldChange = (event)=>{
        this.setState({searchField : event.target.value}) 
    }
    render(){
        const FilteredUsers = this.state.users.filter(user=>user.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        return (
            <div className="tc">
                <h2>Users</h2>
                <SearchBox changeFunction={this.onSearchFieldChange}/>
                <Scroll>
                    <CardArray users={FilteredUsers}/>
                </Scroll>
            </div>
        )
        
    }
}
export default App;