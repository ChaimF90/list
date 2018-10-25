import React, { Component } from 'react';
import { List, WindowScroller, AutoSizer } from "react-virtualized";
import styled from "styled-components";
import { Portal } from 'react-portal';

const Container = styled.div`
  display: "flex";
  height: 500px;
  width: 50%;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  border: 1px solid blue;
`;

const ListContainer = styled.div`
  flex: 1;
`;

const data = [
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "John",
    age: 45,
  },
]

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 4px solid black;
`;

const NameCell = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
  background-color: purple;
`;

const AgeCell = styled.div`
  flex: 1;
  text-align: center;
`;

const CustomList = styled.ul`
  border: 1px solid blue;
  background-color: orange;
  z-index: 100;
  position: absolute;
  left: 40%;
  margin: 0;
  top: 100%;
`;

class App extends Component {
  state = {
    nodes: [],
  }

  handleRef = (node) => {
    const nodes = [...this.state.nodes];
    nodes.push(node);
    this.setState({ nodes });
  }

  rowRenderer = (listProps) => {
    const thisRow = data[listProps.index];
    return (
      <Row key={listProps.key} style={listProps.style}>
        <NameCell ref={this.handleRef}>
          {thisRow.name}
          <Portal node={this.state.nodes[listProps.index]}>
            <CustomList>
              {data.map((item, index) => <li key={index}>{item.name}{index + 1}</li>)}
            </CustomList>
          </Portal>
        </NameCell>
        <AgeCell>
          {thisRow.age}
        </AgeCell>
      </Row>
    );
  }

  render() {
    return (
      <Container>
        <ListContainer>
          <AutoSizer>
            {({ width, height }) => (
              <List
                autoHeight
                width={width}
                height={height}
                rowCount={1}
                rowHeight={80}
                rowRenderer={this.rowRenderer}
              />
            )}
          </AutoSizer>
        </ListContainer>
      </Container>
    );
  }
}

export default App;
