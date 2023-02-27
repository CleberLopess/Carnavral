import { useEffect } from "react";

import { currentDataBase } from "services/firebase";
import { get, child } from "firebase/database";
import { useDispatch } from "react-redux";
import { setSelectionsSuccess } from "store/slices/selections";
import { setEventsSuccess } from "store/slices/events";
import { setModalForm } from "store/slices/modalForm";

import { GiffInitial } from "sections/giffInitial";
import { ModalForm } from "sections/modalForm";
import { Header } from "sections/header";
import { HeroBanner } from "sections/heroBanner";
import { ContentEvents } from "sections/contentEvents";
import { Footer } from "sections/footer";

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

  useEffect(() => {
    setTimeout(() => {
      dispatch(setModalForm(true));
    }, 3000);
  }, [dispatch]);

  return (
    <>
      <GiffInitial />
      <ModalForm />
      <Header />
      <HeroBanner />
      <ContentEvents />
      <Footer />
    </>
  );
};

export default Index;
