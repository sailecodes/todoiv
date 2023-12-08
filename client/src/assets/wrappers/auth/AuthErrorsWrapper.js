import styled from "styled-components";

const AuthErrorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  height: 8rem;

  p {
    color: var(--color-error);

    font-size: var(--font-text-xsms);
  }

  @media (min-width: 425px) {
    height: 10rem;

    p {
      font-size: var(--font-text-mds);
    }
  }
`;

export default AuthErrorsWrapper;
