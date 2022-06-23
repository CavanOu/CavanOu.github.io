import styled from "styled-components";

export const HeaderWrapper = styled.div`
width: 100%;
position: fixed;
top: 0;
background: white;
height: 22.4vw;
z-index: 100;
`

export const HeaderNavBar = styled.div`
position: relative;
height: 11.73333vw;
line-height: 11.73333vw;
padding: 0  3.2vw 0 4.8vw;
font-size: 0;
background: #fff;
a{
    text-decoration: none;
    &.logo{
        float: left;
        height: 11.73333vw;
        .Navbar_logo{
        color: #fb7299;
        font-size: 7.46667vw;
    }
    }
    
}
.right {
    float: right;
    height: 11.73333vw;
    .search {
        margin-right: 5.86667vw;
        width: 5.86667vw;
        height: 5.86667vw;
        display: inline-block;
        margin-top: 0.53333vw;
        i {
            color: #ccc;
            font-size: 5.86667vw;
        }
    }
    .face {
        vertical-align: top;
        width: 6.4vw;
        height: 6.4vw;
        display: inline-block;
        margin-top: 2.66667vw;
        margin-right: 3.2vw;
        img {
            width: 100%;
            height: 100%;
            border-radius: 3.2vw;
        }
    }
    .bfs-img {
        background: url(src/assets/images/common/c51b9046c461967fbf9cfff36d399996dd6f5df0.jpg@48w_48h_1c.png) no-repeat 50%;
        background-size: contain;
        background-color: #e7e7e7;
        -o-object-fit: cover;
        object-fit: cover;
    }
    .launch-app-btn {
        display: inline-block;
        position: relative;
    }
    .m-nav-openapp {
    vertical-align: top;
    }
    .nav-open-app-img {
        width: 19.2vw;
    }
    .nav-open-app-img,
    .openapp {
        margin-left: 2.13333vw;
        height: 6.4vw;
        margin-top: 2.66667vw;
        vertical-align: top;
    }
}  
`

export const HeaderMenu = styled.div`
height: 10.66667vw;
position: relative;
/* background: skyblue; */
display: flex;
font-size: 3.73333vw;
.adm-tabs {
    --active-line-color:#FB7299;
    --active-line-height: 3px;
    --active-line-border-radius: 3px;
    .adm-tabs-tab-wrapper {
        padding: 0 4.26667vw;
        .adm-tabs-tab{
        padding: 0;
    a{
    list-style: none;
    text-align: left;
    display: inline-block;
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    height: 10.66667vw;
    line-height: 10.66667vw;
    text-decoration: none;
    color: #000;
    font-size: 3.73333vw;
        &.active{
            /* & 表示上级选择器 此处表示a .active */
            color: #FB7299;
        }
        .v-switcher__header__tabs__item i,
        .v-switcher__header__tabs__item span {
        vertical-align: middle;
        &::before{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        transform: scaleY(.5);
        background-color: #e7e7e7;
}
}
}
}
}

}

`

export const DropdownWrapper = styled.div`
position: relative;
    flex-shrink: 0;
    z-index: 1;
    float: right;
    order: 3;
    margin-top: 1.33333vw;
    margin: 0 2.66667vw;
    .adm-dropdown-item-title-arrow{
        font-size: 16px;
        color: #aaa;
    }
    
`