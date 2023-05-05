
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/partials/Sidebar';
import Navbar from '../components/partials/Navbar';
import Footer from '../components/partials/Footer';
import ScrollToTop from '../components/partials/ScrollToTop';
import LogoutModal from '../components/partials/LogoutModal';
import isAuthenticated from '../utils/isAuthenticated';
import Swal from 'sweetalert2';
import useFetch from '../hooks/useFetch';

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const connect = params.get('connect');

  useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = '/?error=connect';
    } else {
      const welcomeAlert = () => {
        Swal.fire({
          title: 'Welcome!',
          text: 'Thank you for logging in!',
          icon: 'success',
          timer: 1000,
          confirmButtonText: 'OK'
        }).then(() => {
          window.history.replaceState(null, null, window.location.pathname);
        });
      };

      if (connect === "success") {
        welcomeAlert();
      }
    }
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, [connect]);
  
  const token = localStorage.getItem('token');
  const apiUrl = 'http://127.0.0.1:3030/api/message/getUnreadMessages';
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    },
  };
  const [data, isLoadingData] = useFetch({ url: apiUrl, options: options });

  useEffect(() => {
    if (data) {
      setMessages(data.data);
    }

    if (!isLoadingData) {
      setIsLoading(false);
    }
  }, [data, isLoadingData]);

  return (
    <div id='page-top'>
      <div id="wrapper">
        <Sidebar user={currentUser} />
        <div id="content-wrapper" className='d-flex flex-column'>
          <div id="content">
            <Navbar messages={messages} isLoading={isLoading} user={currentUser} />
            <div className="container-fluid">
              {currentUser && <p>Bonjour {currentUser.firstname} !</p>}
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <ScrollToTop />
      <LogoutModal />
    </div>
  );
}
