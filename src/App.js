import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import { getPosts } from './Page/getPosts';



const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
margin-top: 50px;

`

const Title = styled.h1`
font-size: 36px;
font-weight: bold;
margin-bottom: 20px;
`

const List = styled.ul`
list-style: none;
padding: 0;
margin:0;
`

const ListItem = styled.div`
background-color: #FFC0CB;
border-radius: 5px;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
padding:10px;
margin-bottom: 10px;
`

function App() {
const [selectPost, setSelectPost] = useState('')
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts", selectPost],
    queryFn: getPosts,
  });

  if(isLoading)
     return <p>...Loading data</p>

  if(error)
    return <p>Error fetching data:{error.message}</p>

  return (
    <div className="App">
     <Container>
      <Title>
        List of post React Query
      </Title>
      <List>
        {
          data.map((item)=>(
            <ListItem key={item.id} onClick={()=>setSelectPost(item.id)}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </ListItem>
          ))
        }  
      </List>
     </Container>
    </div>
  );
}

export default App;
