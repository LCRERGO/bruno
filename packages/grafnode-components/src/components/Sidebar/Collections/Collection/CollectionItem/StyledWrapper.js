import styled from 'styled-components';

const Wrapper = styled.div`
  .menu-icon {
    display: none;
    flex-grow: 1;
    justify-content: flex-end;
  }

  .indent-block {
    border-right: solid 1px #e1e1e1;
  }

  .collection-item-name {
    height: 1.875rem;
    cursor: pointer;
    user-select: none;

    .rotate-90 {
      transform: rotateZ(90deg);
    }

    &:hover {
      background: #e7e7e7;
      .menu-icon {
        display: flex;
      }
    }

    .menu-icon {
      color: rgb(110 110 110);
    }

    &.item-focused-in-tab {
      background: #2383e0;
      color: white;

      &:hover {
        background: #2383e0 !important;
        color: white !important;
      }

      .menu-icon {
        color: white !important;
      }

      .indent-block {
        border-right: solid 1px #6faaea;
      }
    }

    div.tippy-box {
      position: relative;
      top: -0.625rem;
    }
  }
`;

export default Wrapper;
