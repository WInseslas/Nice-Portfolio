import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import LogoutModal from '../components/LogoutModal';
import isAuthenticated from '../utils/isAuthenticated';

export default function Dashboard() {

  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = '/Dashboard';
      console.log(localStorage.getItem('token'))
    } else {
      // Récupérer les messages depuis l'API
      fetch('http://127.0.0.1:3030/api/message/read', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
      })
        .then(response => response.json())
        .then(data => { setMessages(data.data) })
        .catch(error => setError(error));
    }
  }, []);

  return (
    <div id='page-top'>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className='d-flex flex-column'>
          <div id="content">
            <Navbar messages={messages} />
            <div className="container-fluid"></div>
          </div>
          <Footer />
        </div>
      </div>
      <ScrollToTop />
      <LogoutModal />
    </div>
  );
}
