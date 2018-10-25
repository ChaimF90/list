import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components";

const Shmoo = styled.div`
    height: 500px;
    width: 500px;
    position: absolute;
    left: 50%;
`;

class Foo extends React.Component {

    state = {
        node: null,
    }

    handleRef = (node) => {
        this.setState({ node });
    }

    render() {
        return (
            <div ref={this.handleRef}>
                <Portal node={this.state.node}>
                    <div style={{position: "relative"}}>
                        <Shmoo>
                            I am a portal
                        </Shmoo>
                    </div>
                </Portal>
            </div>
        );
    }
}

export default Foo;
