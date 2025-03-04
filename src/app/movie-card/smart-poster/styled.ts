"use client";

import styled from "@emotion/styled";
import Image from "next/image";

export const Poster = styled(Image)`
  border-radius: 16px;

  width: 100%;
  height: auto;
  aspect-ratio: 0.75;
  object-fit: cover;

  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const SkeletonPoster = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 0.75;
  background: rgba(255, 255, 255, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
`;
