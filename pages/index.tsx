import React, { useState } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { RootState } from "@store/storeConfig";
import { userAction } from "@slice/userSlice";
import { User } from "@interface/user";
import { useDispatch, useSelector } from "react-redux";

const ListStyle = styled.ul`
  border-top: 1px solid #ccc;
  > li {
    border-bottom: 1px solid #ccc;
  }
`;
const InputStyle = styled.div`
  > input[type="text"] {
    border: 1px solid #ccc;
  }
`;

const Index: NextPage = () => {
  const users = useSelector<RootState, User[]>((state) => state.user);
  const [id, setId] = useState<number | null>(users[users.length - 1].id + 1);
  const [name, setName] = useState<string | null>("");
  const dispatch = useDispatch();
  const onClicks = () => {
    dispatch(
      userAction({
        id,
        name,
      }),
    );
  };
  return (
    <div>
      <ListStyle>
        {users.map((v) => {
          return (
            <li key={v.id}>
              <span>id : {v.id}</span> / <span>name : {v.name}</span>
            </li>
          );
        })}
      </ListStyle>
      <InputStyle>
        <label htmlFor="user_id">유저 id</label>
        <input
          type="text"
          value={id}
          id="user_id"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const { value } = e.currentTarget;
            setId(Number(value));
          }}
        />
      </InputStyle>
      <InputStyle>
        <label htmlFor="user_name">유저 name</label>
        <input
          type="text"
          value={name}
          id="user_name"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const { value } = e.currentTarget;
            setName(value);
          }}
        />
      </InputStyle>
      <button onClick={() => onClicks()} type="button">
        action test
      </button>
    </div>
  );
};
export default Index;
