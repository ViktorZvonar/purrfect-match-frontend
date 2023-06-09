import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const FormTitle = styled.p`
  margin-left: 12px;

  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.35;

  color: ${props => props.theme.colors.textColor};

  @media ${props => props.theme.media.tab} {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 1.36;
    margin: 0;
    text-align: ${props =>
      props.category !== 'my-pet' && props.currentStep === 3 && 'center'};
  }
`;

export const FormLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: 14px;
  line-height: 1.3;

  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.m};
  }

  input[type='range'] {
    -webkit-appearance: none; /* Убирает стандартные стили для WebKit браузеров */
    -moz-appearance: none; /* Убирает стандартные стили для Firefox */
    width: 100%;
    height: 10px;
    background-color: ${props => props.theme.colors.backgroundModal};
    border-radius: 40px;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  input[type='range']::-moz-range-thumb {
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  input[type='range']:hover {
    opacity: 1;
  }

  input[type='range']::-webkit-slider-thumb:hover {
    background-color: ${props => props.theme.colors.link};
  }

  input[type='range']::-moz-range-thumb:hover {
    background-color: ${props => props.theme.colors.link};
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -16px;
  left: 16px;
  font-size: 14px;
  color: ${props => props.theme.colors.red};

  font-size: 12px;
  line-height: 1.3;
`;

export const StyledField = styled(Field)`
  padding: 10px 16px;
  width: 100%;
  height: 40px;
  margin-top: 4px;

  font-family: ${props => props.theme.fonts.main};
  font-size: 14px;
  line-height: 150%;

  ::placeholder {
    font-family: ${props => props.theme.fonts.main};
  }

  color: ${props => props.theme.colors.inputText};
  background: ${props => props.theme.colors.backgroundModal};
  border-radius: ${props => props.theme.radius.normal};
  border: ${props =>
    props.errors ? '1px solid #F43F5E' : '1px solid #54adff'};
  outline: none;

  @media ${props => props.theme.media.tab} {
    margin-top: 8px;
    height: 48px;
    padding: 12px 16px;
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 8px;
  margin-top: auto;

  @media ${props => props.theme.media.tab} {
    justify-content: ${props => props.category !== 'my-pet' && 'center'};
    flex-direction: row;
    bottom: 20px;
    right: 32px;
  }
`;

export const FormButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  width: 248px;
  height: 48px;

  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeiths.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.link};

  // gap: 12px;
  // text-align: center;

  background-color: transparent;
  border-radius: ${({ theme }) => theme.radius.normal};
  border: none;
  outline: none;

  transition: color 250ms ease;

  :not([disabled]):hover,
  :not([disabled]):focus-visible {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.buttonText};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: ${({ theme }) => theme.radius.normal};
    opacity: 0;
    transition: opacity 250ms ease;
  }

  :not([disabled]):hover::before,
  :not([disabled]):focus-visible::before {
    opacity: 1;
  }

  :active,
  :disabled {
    filter: opacity(0.6);
  }

  @media ${props => props.theme.media.tab} {
    width: 146px;
  }
`;
