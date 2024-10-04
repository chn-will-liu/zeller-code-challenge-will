import { PropsWithChildren } from "react";
import styled, { css, keyframes } from "styled-components";

const SkeletonKeyFrames = keyframes`
    0% {
        translate: -100%;
        left: 0;
    }
    100% {
        translate: 0;
        left: 100%;
    }
    `;

const SkeletonContainer = styled.div<{ $height?: string; $width?: string }>`
  position: relative;
  overflow: clip;
  border-radius: 2px;
  background: #cde4f8;

  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height};
    `};

  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
    `};
`;

const SkeletonInner = styled.div`
  position: absolute;
  height: 100%;
  width: 128px;
  background-image: linear-gradient(
    to right,
    #c9dff3 0%,
    #f0f7fd 50%,
    #c9dff3 100%
  );
  animation: ${SkeletonKeyFrames} 1s infinite linear;
`;

function Skeleton(
  props: PropsWithChildren<{
    className?: string;
    height?: string;
    width?: string;
  }>
) {
  return (
    <SkeletonContainer
      className={props.className}
      $height={props.height}
      $width={props.width}
    >
      <SkeletonInner />
    </SkeletonContainer>
  );
}

export default Skeleton;
