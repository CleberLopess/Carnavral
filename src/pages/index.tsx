import { useEffect } from "react";

import { Header } from "sections/header";
import { HeroBanner } from "sections/heroBanner";
import { ContentEvents } from "sections/contentEvents";
import { Footer } from "sections/footer";

import { currentDataBase } from "services/firebase";
import { get, child } from "firebase/database";
import { useDispatch } from "react-redux";
import { setSelectionsSuccess } from "store/slices/selections";
import { setEventsSuccess } from "store/slices/events";

const Index = () => {
  const dispatch = useDispatch();

  //get selections
  useEffect(() => {
    get(child(currentDataBase, `selections`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch(setSelectionsSuccess(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  //get events
  useEffect(() => {
    get(child(currentDataBase, `events`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch(setEventsSuccess(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  return (
    <>
      <Header />
      <HeroBanner />
      <ContentEvents />
      <Footer />
    </>
  );
};

export default Index;
