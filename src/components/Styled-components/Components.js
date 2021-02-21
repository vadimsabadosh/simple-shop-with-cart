import styled from 'styled-components';

export const Catalog = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    max-width:1170px;
    margin:0 auto;
    @media screen and (max-width: 639px){
        width:100%;
        padding: 0 15px;
        flex-direction: column;
    }
`;
export const Card = styled.div`
    width: 30%;
    margin: 0 1.5% 5%;
    text-align: center;
    @media screen and (max-width: 639px){
        width: 100%;
        margin: 0px 0 15% 0;
        text-align: center;
    }
`;

export const Img = styled.img`
    max-width: 100%;
    cursor: pointer;
`;

export const Button = styled.button`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.5rem 2rem;
  background: #ef4648;
  border-radius: 13px;
  border:none;
  :disabled{
      background-color: #838383;
  }
`;

export const Container = styled.div`
    max-width:1170px;
    margin:0 auto;
    margin-bottom: 100px;
    @media screen and ( max-width: 639px ){
        max-width:100%;
        padding: 0 15px;
    }
    @media screen and ( max-width: 1024px ){
        max-width:100%;
        padding: 0 25px;
    }
`;
export const CartWrapper = styled.div`
    text-align: center;
    border-radius:10px;
    box-shadow: 0 0 20px #c09494;
    padding:10px 20px;

`;
export const CartDiv = styled.div`
    margin:10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:10px;
    box-shadow: 0 0 20px #999;
    width: 100%;
    @media screen and ( max-width: 639px ){
        flex-direction: column;
        margin:25px auto;
    }

`;
export const Photo = styled.img`
    object-fit: cover;
    max-height: 100%;
    width: 25%;
    height: 100px;
    border-radius: 10px 0 0 10px;
    @media screen and ( max-width: 639px ){
        width: 100%;
        border-radius: 10px 10px 0 0;
    }
`;
export const InnerWrap = styled.div`
    width:75%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and ( max-width: 639px ){
        width: 100%;
    }
`;
export const Name = styled.h4`
    width:25%;
    @media screen and ( max-width: 639px ){
        width: 30%;
    }
`;

export const Price = styled.p`
    width:25%;
    @media screen and ( max-width: 639px ){
        width: 50%;
    }
`;
export const DeleteBtn = styled.button`
    width:25%;
    border:none;
    background:transparent;
    @media screen and ( max-width: 639px ){
        width: 20%;
    }
`;
export const ImgTrash = styled.img`
    width:10%;
    margin:0 auto;
    @media screen and ( max-width: 639px ){
        width: 40%;
    }
`;
export const TotalPrice = styled.h5`
    text-align: left;
`;
