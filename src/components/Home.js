import React from 'react'
import {connect} from 'react-redux'
class HomeUI extends React.Component {
//	componentDidMount(){
//		this.props.fetchListDate()
//	}
	render (){
		return (
			<div>
			    <h2>首页</h2>
			    <p>你好</p>
			    <ul>
			    	{
			    		this.props.home_list.map((item,index)=>{
			    			return <li>
			    				你好
			    			</li>
			    		})
			    	}
			    </ul>
			</div>
		)
	}
}

const mapState2Props = (state) => {
	return {
		home_list: state.home_list
	}
}

const mapDispacth2Props = (dispatch) => {
	return {
		fetchListDate: () => {
			fetch("/api/detdata").then((res)=>{
				return res.json();
			}).then((json)=>{
				dispatch({
					type: "GET_HOME_LIST",
					payload: json
				})
			})
		}
	}
}

const Home = connect(mapState2Props, mapDispacth2Props)(HomeUI)

export default Home;




