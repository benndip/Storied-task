import React from "react";
import {
  Container,
  DeleteAndFavourite,
  IconContainer,
  NoteDate,
  NoteTitle,
} from "./Note.style";
import { AiFillStar } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { NoteType } from "../../@types";

type IProps = {
  note: NoteType;
  isFavorite: NoteType;
  onFavourite: () => void;
  onDelete: () => void;
};

const Note: React.FC<IProps> = ({ note, onFavourite, onDelete, isFavorite }) => {

  const { title, created_at } = note;

  return (
    <Container>
      <NoteTitle>{title}</NoteTitle>
      <NoteDate>{new Date(created_at).toUTCString()}</NoteDate>
      <DeleteAndFavourite>
        <IconContainer onClick={onFavourite}>
            <AiFillStar  size={24} color={isFavorite ? "#ff9f43": "#eee"} />
        </IconContainer>
        <IconContainer onClick={onDelete}>
            <BsFillTrash3Fill size={24} color="#ee5253" />
        </IconContainer>
      </DeleteAndFavourite>
    </Container>
  );
};

export default Note;
