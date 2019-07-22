import React,{Component} from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,
    SearchInfoTitle,SerachInfoSwitch,SerachInfoItem,SearchInfoList} from './style'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import axios from 'axios'

class Header extends Component{
    getListArea(show){
        if(show){
            return (
            <SearchInfo> 
                <SearchInfoTitle>
                    热门搜索
                    <SerachInfoSwitch>换一批</SerachInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SerachInfoItem>区块链</SerachInfoItem>
                    <SerachInfoItem>小程序</SerachInfoItem>
                    <SerachInfoItem>vue</SerachInfoItem>
                    <SerachInfoItem>毕业</SerachInfoItem>
                    <SerachInfoItem>PHP</SerachInfoItem>
                    <SerachInfoItem>故事</SerachInfoItem>
                    <SerachInfoItem>flutter</SerachInfoItem>
                    <SerachInfoItem>理财</SerachInfoItem>
                    <SerachInfoItem>美食</SerachInfoItem>
                    <SerachInfoItem>投稿</SerachInfoItem>
                </SearchInfoList>
            </SearchInfo>)
        } else{
            return null
        }
    }
    render(){
        return(<HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载app</NavItem>
                <NavItem className="right">
                <i className="iconfont">&#xe636;</i>
                </NavItem>
                <NavItem className="right">登录</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={this.props.focused}
                        timeout={200}
                        classNames='slide'
                    >
                        <NavSearch
                        className={this.props.focused?'focused':''}
                        onFocus={this.props.handleInputFocus}
                        onBlur={this.props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={this.props.focused?"focused iconfont":'iconfont'}>&#xe63c;</i>
                    {this.getListArea(this.props.focused)}
                </SearchWrapper>
                
                <Addition>
                    <Button classNam="reg">注册</Button>
                    <Button className="writing">
                    <span className="iconfont">&#xe603;</span>
                        写文章</Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
        )}}
        const mapStateToProps=(state)=>{
            return {
                focused:state.header.focused
            }
        }
        const mapDispatchToProps=(dispatch)=>{
            return{
                getList(){
                    return(dispatch)=>{
                        axios({
                            url:'https://www.jianshu.com/trending_search'
                        }).then(
                            res=>console.log(res)
                        )
                    }
                },
                handleInputFocus(){
                    const action={
                        type:'search_focus'
                    };
                    dispatch (action)
                },
                handleInputBlur(){
                    const action={
                        type:'search_blur'
                    }
                    dispatch (action)
                }
            }
        }

        export default connect(mapStateToProps,mapDispatchToProps)(Header)
    