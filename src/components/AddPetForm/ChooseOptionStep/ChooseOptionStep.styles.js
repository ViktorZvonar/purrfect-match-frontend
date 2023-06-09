import styled from 'styled-components';

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 12px;

  @media ${props => props.theme.media.tab} {
    margin-top: 60px;
  }
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  width: fit-content;
  padding: 8px 16px;
  border-radius: ${props => props.theme.radius.normal};
  
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: 14px;
  line-height: 1,4;

  background-color: ${props => (props.checked ? '#54adff' : '#CCE4FB')};
  color: ${props => (props.checked ? '#FEF9F9' : '#54ADFF')};

  input[type='radio'] {
    position: absolute;
    height: 1px; 
    width: 1px;
    opacity: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    pointer-events: none;
  }
`;
