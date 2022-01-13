import styled from "styled-components";
import { Card } from "antd";

export const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fdfafa;
`;
export const StyledWrapper = styled.div`
	height: 100vh;
	width: 100vw;
`;

export const StyledCard = styled(Card)`
	width: clamp(50%, 70%, 75%);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #e5d7ff;
  box-shadow: 0px 4px 12px -5px #000;
`;
