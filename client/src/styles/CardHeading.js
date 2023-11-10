import styled from "styled-components";

const Wrapper = styled.div`
  .card-heading-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .card-marker {
    background-color: var(--color-primary);

    height: 3.3rem;
    width: 3.3rem;

    border-radius: 6px;
  }

  .card-title {
    color: var(--color-black);

    font-size: 3rem;
    font-weight: 600;
  }
`;

export default Wrapper;
