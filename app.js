const firebase = require("firebase");
const axios = require("axios");
const app = firebase.initializeApp({
  apiKey: "AIzaSyBrgtVUnKa6v9eLLulX3KiuCgEqs5y-jm8",
  authDomain: "jira-dashboard-43191.firebaseapp.com",
  databaseURL: "https://jira-dashboard-43191.firebaseio.com",
  projectId: "jira-dashboard-43191",
  storageBucket: "jira-dashboard-43191.appspot.com",
  messagingSenderId: "1091749799228",
  appId: "1:1091749799228:web:e02e79e264adf8cc6eaa39",
  measurementId: "G-T8T2XVVKRY"
});
const db = firebase.firestore();
const key = "Basic cmFua28uc3BlZ2FyOk1pbGFua29zcGVnYXIxMg==";

const buildUrl = (url, key) => {
  return [
    url,
    {
      headers: {
        authorization: key
      }
    }
  ];
};

function fetchProjectsFromJiraAndSaveToFirestore() {
  const url = "https://jira.towa-digital.com/rest/api/latest/project/";

  axios.get(buildUrl(url, key)).then(res => {
    res.data.forEach(item => {
      const data = {
        name: item.name,
        key: item.key,
        url: `https://jira.towa-digital.com/projects/${item.key}`
      };

      saveToProjectsCollection(data);
    });
  });
}

const saveToProjectsCollection = data => {
  return db.collection("projects").add(data);
};

const fetchAllProjects = () => {
  db.collection("projects")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        return doc.data();
      });
    });
};

fetchAllProjects();
