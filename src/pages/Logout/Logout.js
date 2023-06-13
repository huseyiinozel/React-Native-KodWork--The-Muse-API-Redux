import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

function Logout() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch({ type: "REMOVE_USER" });
    navigation.reset({
      index: 0,
      routes: [{ name: "Job" }]
    });
  }, [dispatch, navigation]);

  return null;
}

export default Logout;

