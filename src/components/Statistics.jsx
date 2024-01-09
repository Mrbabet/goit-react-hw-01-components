import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 500px;
  margin: 0 auto;
`;
const Title = styled.h2`
  text-align: center;
  padding-block: 40px;
`;
const StatList = styled.ul`
  display: flex;
`;
const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;
const StatLabel = styled.span`
  color: white;
`;
const StatPercentage = styled.span`
  color: white;
  font-size: 20px;
`;

const Statistics = ({ title, stats }) => {
  const backgroundColors = [
    "#ca7a7a",
    "#63c263",
    "#7272f5",
    "#64aeb1",
    "#f557f5",
  ];
  return (
    <StatisticsContainer>
      <Title>{title}</Title>
      <StatList>
        {stats.map((stat, index) => {
          const backgroundColor =
            backgroundColors[index % backgroundColors.length];

          return (
            <StatItem key={index} style={{ backgroundColor }}>
              <StatLabel>{stat.label}</StatLabel>
              <StatPercentage>{stat.percentage}%</StatPercentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  percentage: PropTypes.number,
  label: PropTypes.number,
};

export default Statistics;
