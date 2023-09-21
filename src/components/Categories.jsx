import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {
  return (<>
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
      <h2 style={{marginLeft:"350px", fontFamily:"sans-serif"}}>
        Hover below items and Click at 
        <Icon>
          <SearchOutlined />
        </Icon> to proceed..!!</h2>
      </>
  );
};

export default Categories;
