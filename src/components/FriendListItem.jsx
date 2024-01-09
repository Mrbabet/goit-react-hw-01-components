import React from "react";
import styled from "styled-components";

const FriendItem = styled.li`
  margin: 0 auto;
  margin-block: 10px;
  padding: 10px;
  gap: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  width: 200px;
`;
const Status = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
const Avatar = styled.img``;
const FriendName = styled.p``;

const FriendListItem = ({ avatar, name, isOnline }) => {
  const online = "green";
  const offline = "red";
  return (
    <FriendItem>
      <Status style={{ backgroundColor: isOnline ? online : offline }}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

export default FriendListItem;
