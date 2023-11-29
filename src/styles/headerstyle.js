import styled from "@emotion/styled";

export const TopBar = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  gap: 6px;
  align-items: center;
  flex-shrink: 0;
  padding: 8px 4px;
  background: #fef7ff;
  h2 {
    font-weight: 400;
  }
  button {
    width: 48px;
    height: 48px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    flex-direction: column;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
