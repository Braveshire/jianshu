import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
position:relative;
height:56px;
border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href:'/'
})`
position:absolute;
display:block;
height:56px;
width:100px;
top:0;
left:0;
background:url(${logoPic});
background-size:contain;
`
export const Nav = styled.div`
width:960px;
height:100%;
padding-right:70px;
box-sizing:border-box;
margin:0 auto
`
export const NavItem = styled.div`
&.left{float:left}
&.right{float:right;color:#969696}
&.active{color:#ea6f5a}
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;
`
export const NavSearch = styled.input.attrs({
    placeholder:"请搜索"
})`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top:9px;
    box-sizing:border-box;
    padding:0 35px 0 20px;
    font-size:14px;
    margin-left:20px;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out
    }
    &.slide-exit-active{
        width:160px;
    }
`
export const SearchInfo = styled.div`
position:absolute;
top:56px;
left:0;
width:240px;
padding:0 20px;
box-shadow:0 0 8px rgba(0,0,0,.2)
`
export const SearchInfoTitle = styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;
`
export const SearchInfoList = styled.div`
over-flow:hidden;
`
export const SerachInfoSwitch = styled.span`
float:right;
font-size:12px;
`
export const SerachInfoItem = styled.a`
display:block;
float:left;
line-height:20px;
padding:0 5px;
font-size:12px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;
margin-right:10px;
margin-bottom:10px;
`
export const Addition = styled.div`
position:absolute;
top:0;
right:0
`
export const SearchWrapper = styled.div`
position:relative;
float:left;
.iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    background:pink;
    &.focused{
        background:#777;
        color:#fff;
    }
}
`
export const Button = styled.div`
float:right;
margin-top:9px;
margin-right:20px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
padding:0 20px;
font-size:15px;
&.reg{
    color:#ec6149
}
&.writing{
    color:#fff
    background:#ec6149
}
`