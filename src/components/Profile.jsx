import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProfileContainer = styled.div`
  margin: 20px auto;
  width: 300px;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  background-color: white;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-block: 40px;
`;
const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
`;
const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
const Tag = styled.p`
  color: gray;
`;
const Location = styled.p`
  color: gray;
`;
const Statistics = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Stat = styled.li`
  width: 100px;
  height: 100px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Label = styled.span``;
const Quantity = styled.span`
  font-weight: bold;
`;

const Profile = (props) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={props.avatar} alt="User avatar" className="avatar" />
        <Name>{props.username}</Name>
        <Tag>@{props.tag}</Tag>
        <Location>{props.location}</Location>
      </Description>

      <Statistics>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{props.stats.followers}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{props.stats.views}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{props.stats.likes}</Quantity>
        </Stat>
      </Statistics>
    </ProfileContainer>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats:{
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }
};

export default Profile;
