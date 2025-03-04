"use client";

import {
  breakPoint3,
  darkPurple,
  fgColor,
  lightPurple,
  mediumPurple,
  radius,
} from "@/shared/variables";
import styled from "@emotion/styled";

export const TabsSC = styled.div<{ $activeTab: number; $tabsCount: number }>`
  --padding-size: 4px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: var(--padding-size);
  background-color: ${darkPurple};
  border-radius: ${radius}px;
  box-sizing: border-box;
  isolation: isolate;
  height: 40px;

  &::after {
    z-index: -1;
    border-radius: inherit;
    content: "";
    position: absolute;
    inset: var(--padding-size);
    width: calc(
      100% / ${(props) => props.$tabsCount} - var(--padding-size) * 2
    );
    margin-left: ${(props) => (props.$activeTab * 100) / props.$tabsCount}%;
    background: ${mediumPurple};

    transition: all 0.15s ease-in-out;
  }
`;

export const Tab = styled.div<{ $isActive: boolean; $isDisabled: boolean }>`
  color: ${fgColor};

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  font-weight: 500;

  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  user-select: none;
  -webkit-user-select: none;

  opacity: ${(props) => (props.$isDisabled ? 0.5 : 1)};
  cursor: ${(props) => (props.$isDisabled ? "not-allowed" : "pointer")};
`;

export const TabLink = styled.a`
  text-decoration: none;
  color: ${fgColor};
`;
