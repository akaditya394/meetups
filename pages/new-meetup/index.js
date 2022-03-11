import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupsPage = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupsPage;
