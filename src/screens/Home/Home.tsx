import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar.component";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLock } from "react-icons/ai";
import validator from 'validator';
import { faker } from '@faker-js/faker';

import styles from "./Home.module.css";
import CustomModal from "../../components/CustomModal/CustomModal.component";
import CustomInput from "../../components/CustomInput/CustomInput.component";
import { deleteDataFromStorage, getDataFromStorage, saveToStorage } from "../../utils/storage";
import { NoteType, User } from "../../@types";
import { AddNoteBtn, AddNoteError, AddNoteInput, AddNoteText, CancelBtn, Container, DeleteButtons, InputAndButtonContainer, LoginButton, LoginText, NotesContainer, YesBtn } from "./Home.style";
import Note from "../../components/Note/Note.component";

const audioOptions = ["Microphone", "Earpice", "Speaker"];

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState("");
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<User|undefined>();
  const [noteToAdd, setNoteToAdd] = useState('');
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [favouriteNotes, setFavouriteNotes] = useState<string[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [favouriteModalOpen, setFavouriteModalOpen] = useState(false);
  const [nodeToDelete, setNodeToDelete] = useState<NoteType>()
  const [noteToAddToFavourite, setNoteToAddToFavourite] = useState<NoteType>();
  const [addingToFav, setAddingToFav] = useState(true);

  const [addNoteError, setAddNoteError] = useState('');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const hangleAudioInputSelection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedAudio(event.target.value);
  };

  const togglesShowLogin = () => {
    setLoginModalOpen(!loginModalOpen);
  };

  const login = async () => {
    resetErrorStates();
    let hasError = false;
    if (!validator.isEmail(email)) {
      hasError = true;
      setEmailError("Invalididate email");
    }
    if (password.length < 6) {
      hasError = true;
      setPasswordError("password must be at least 3 characters");
    }
    if (hasError) {
      return;
    }
    try {
      let users = await getDataFromStorage("storiedUsers");
      if (!users) {
        saveToStorage("storiedUsers", []);
        users = [];
      }
      const user = users.find((user: User) => user.email === email);
      if (user) {
        saveToStorage("storiedUser", user);
        setLoggedInUser(user);
        setLoginModalOpen(false);
      } else {
        let user = {
          _id: faker.string.uuid(),
          email,
          password,
        };
        let newUsers = [...users, user];
        saveToStorage("storiedUsers", newUsers); //add new user to list of users
        saveToStorage("storiedUser", user); // indicate the currently logged in user
        setLoggedInUser(user);
        setLoginModalOpen(false);
      }
    } catch (error) {}
  }

  const logout = async () => {
    try {
        deleteDataFromStorage('storiedUser');
        setLoggedInUser(undefined);
    } catch (error) {
        console.log(error);
    }
  }

  const resetErrorStates = () => {
    setEmailError('');
    setPasswordError('');
  }

  const getLoggedInUser = async () =>{
    try {
        const user = await getDataFromStorage('storiedUser');
        const users = await getDataFromStorage('storiedUsers');
        if(user){
            console.log('Logged in user', user);
            setLoggedInUser(user);
        }
        if(users){
            console.log('user', users.length);
            setLoggedInUser(user);
        }
    } catch (error) {
        console.log(error);
    }
  }

  const getAllNotes = async () => {
    try {
      const notes = await getDataFromStorage('notes');
      if(!notes){
        saveToStorage('notes', []);
      }else{
        setNotes(notes)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getFavouriteNotes = async () => {
    try {
      const favouriteNotes = await getDataFromStorage('favouriteNotes');
      if(!favouriteNotes){
        saveToStorage('favouriteNotes', []);
      }else{
        setFavouriteNotes(favouriteNotes)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const addNote = () => {
    setAddNoteError('')
    if(noteToAdd.length < 3){
      setAddNoteError('A note should be at least 3 characters long')
      return
    }
    try {
      let notes = getDataFromStorage('notes');
      if(!notes){
        saveToStorage('notes', []);
        notes = [];
      }
      let newNote = {
        _id: faker.string.uuid(),
        _user_id: loggedInUser ? loggedInUser._id : null,
        title: noteToAdd,
        created_at: new Date()
      }
      let newNotes = [...notes, newNote];
      saveToStorage('notes', newNotes) //update storage
      setNotes(newNotes)
      setNoteToAdd('')
    } catch (error) {
      
    }
  }

  const deleteNote = () => {
    let remainingNotes = notes.filter(note => note._id !== nodeToDelete!._id);
    let remainingFavNotes = favouriteNotes.filter(_id => _id !== nodeToDelete!._id)
    setNotes(remainingNotes)
    setFavouriteNotes(remainingFavNotes)
    saveToStorage('notes', remainingNotes);
    saveToStorage('favouriteNotes', remainingFavNotes);
    setDeleteModalOpen(false)
  }

  const markAsFavorite = async () => {
    try {
      let favouriteNotesFromStorage = await getDataFromStorage('favouriteNotes');
      let favouriteNoteAlreadyExists = favouriteNotesFromStorage.find(
        (_id: string) => _id === noteToAddToFavourite!._id
      );
      if(favouriteNoteAlreadyExists){
        return
      }
      let newNotes = [...favouriteNotesFromStorage,  noteToAddToFavourite?._id];
      saveToStorage('favouriteNotes', newNotes) //update storage
      setFavouriteNotes(newNotes)
      setFavouriteModalOpen(false)
    } catch (error) {
      
    }
  }

  const removeFromFavorite = async () => {
    try {
      let favouriteNotesFromStorage = await getDataFromStorage('favouriteNotes');
      let favouriteNoteAlreadyExists = favouriteNotesFromStorage.find(
        (_id: string) => _id === noteToAddToFavourite!._id
      );
      if(!favouriteNoteAlreadyExists){
        return
      }
      let newNotes = favouriteNotesFromStorage.filter(
        (_id: string) => _id !== noteToAddToFavourite?._id
      );
      saveToStorage('favouriteNotes', newNotes) //update storage
      setFavouriteNotes(newNotes)
      setFavouriteModalOpen(false)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getLoggedInUser();
    getAllNotes();
    getFavouriteNotes();
  }, [])
  

  return (
    <Container>
      <NavBar
        color="#e0ecfc"
        dropdownOpen={dropdownOpen}
        audioOptions={audioOptions}
        onSelectAudioInput={hangleAudioInputSelection}
        selectedAudio={selectedAudio}
        onLoginClick={togglesShowLogin}
        loggedInUser={loggedInUser}
        logout={logout}
      />

      {loginModalOpen && (
        <CustomModal title="Join Us" closeModal={setLoginModalOpen}>
          <CustomInput
            errorText={emailError}
            type="text"
            leftIcon={<HiOutlineMail />}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            errorText={passwordError}
            leftIcon={<AiFillLock />}
            passwordInput
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton onClick={login}>
            <LoginText>Login</LoginText>
          </LoginButton>
        </CustomModal>
      )}
      {deleteModalOpen && (
        <CustomModal title="Confirm Delete ?" closeModal={setDeleteModalOpen}>
          <DeleteButtons>
            <YesBtn onClick={deleteNote}>
              <span>Yes</span>
            </YesBtn>
            <CancelBtn>
              <span>Cancel</span>
            </CancelBtn>
          </DeleteButtons>
        </CustomModal>
      )}
      {favouriteModalOpen && (
        <CustomModal
          title={
            addingToFav ? "Mark as Favourite ?" : "Remove from Favourite ?"
          }
          closeModal={setFavouriteModalOpen}
        >
          <DeleteButtons>
            <YesBtn onClick={addingToFav ? markAsFavorite : removeFromFavorite}>
              <span>Yes</span>
            </YesBtn>
            <CancelBtn>
              <span>Cancel</span>
            </CancelBtn>
          </DeleteButtons>
        </CustomModal>
      )}
      <InputAndButtonContainer>
        <AddNoteBtn onClick={addNote}>
          <AddNoteText>Add Note</AddNoteText>
        </AddNoteBtn>
        <AddNoteInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNoteToAdd(e.target.value)
          }
          value={noteToAdd}
          placeholder="Add your note text here..."
        />
      </InputAndButtonContainer>
      {addNoteError.length > 0 && <AddNoteError>{addNoteError}</AddNoteError>}
      <NotesContainer>
        {notes
          .filter((note) => favouriteNotes.includes(note._id))
          .map((note) => {
            return (
              <Note
                isFavorite={note!}
                note={note}
                onFavourite={() => {
                  setAddingToFav(false);
                  setNoteToAddToFavourite(note);
                  setFavouriteModalOpen(true);
                }}
                onDelete={() => {
                  setNodeToDelete(note);
                  setDeleteModalOpen(true);
                }}
              />
            );
          })}
        {notes
          .filter((note) => !favouriteNotes.includes(note._id))
          .map((note) => {
            let isFavNote: any = undefined;
            return (
              <Note
                isFavorite={isFavNote ?? null}
                note={note}
                onFavourite={() => {
                  setAddingToFav(true);
                  setNoteToAddToFavourite(note);
                  setFavouriteModalOpen(true);
                }}
                onDelete={() => {
                  setNodeToDelete(note);
                  setDeleteModalOpen(true);
                }}
              />
            );
          })}
      </NotesContainer>
    </Container>
  );
};

export default Home;
