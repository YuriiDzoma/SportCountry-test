import {connect} from "react-redux";
import Navigation from "./Navigation";
import {getNavigation} from "../../redux/navigation-selectors";


const NavigationContainer = ({navigation}) => {

 return (
     <Navigation navigation={navigation} />
 )
}

const mapStateToProps = (state) => ({
    navigation: getNavigation(state),
})

export default connect (mapStateToProps)(NavigationContainer)

