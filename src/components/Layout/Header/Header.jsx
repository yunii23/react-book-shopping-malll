import "../../../css/Header.css";

const Header = () => {
    return (
        <header>
        <div class="firstMenu">
            <div class="menu">
                <ul>
                    <li><a href="#a">웹툰/만화</a></li>
                    <li><a href="#a">웹소설</a></li>
                    <li><a href="#a">도서</a></li>
                    <li><a href="#a">셀렉트</a></li>
                </ul>
            </div>
            <div class="userMenu">
                <ul>
                    <li><a href="#a">회원가입</a></li>
                    <li><a href="#a">로그인</a></li>
                </ul>
            </div>
        </div>

        <div class="secondMenu">
            <h1><a href="#a">OIOI</a></h1>
            <div class="search">
                <input class="searchClick" type="text"/>
                <div id="popup" class="invisible">
                    <p>최근 검색어</p>
                </div>
            </div>
            <div class="menuIcon">
                <ul>
                    <li><a href="#a">알림</a></li>
                    <li><a href="#a">장바구니</a></li>
                    <li><a href="#a">내서재</a></li>
                    <li><a href="#a">회원정보</a></li>
                </ul>
            </div>
        </div>
    </header>
    )
}

export default Header