import { withRouter } from "react-router-dom"

class NavigationComponent extends React.Component{
   state = {
      title: "Home"
   }

   changeTitle = (newTitle) => {
      this.setState({
          title: newTitle
      })
   }

   componentDidMount(){
    //listens for any route changes
    this.props.history.listen(() => {
        this.changeTitle(window.location.pathname) 
    })
   }

   render(){
      <div>{this.state.title}</div>
   }
}

export default withRouter(NavigationComponent)