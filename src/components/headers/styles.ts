import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  height: 60px;
  background: linear-gradient(#1f0000 0%, #000000 95%, #2e0000 100%);
  margin: 0 auto;
  justify-content:center ;

  h1{
    color: #FFF;
    padding: 10px;
    margin: 0 auto;
  }
`
export const Menu = styled.div`
color: #FFF;
ul{
  display: flex;
  margin-left: -15%;
}
li{
  margin-top: 5%;
  position: relative;
  margin-left:10px;
}

a{
  text-decoration: none;
  color: #FFF;
}




`


