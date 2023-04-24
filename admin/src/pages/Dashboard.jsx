import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import LogoutModal from '../components/LogoutModal';
import isAuthenticated from '../utils/isAuthenticated'
import Swal from 'sweetalert2';

export default function Dashboard() {

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)
  const params = new URLSearchParams(window.location.search);
  const connect = params.get('connect');

  useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = '/?error=connect';
    } else {
      setCurrentUser(JSON.parse(localStorage.getItem('user')))
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
        welcomeAlert()
      }

      // Récupérer les messages depuis l'API
      fetch('http://127.0.0.1:3030/api/message/getUnreadMessages', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
      })
        .then(response => {
          if (!response.status === 200) {
            throw Error("An error has occurred.")
          }
          return response.json()
        })
        .then(data => {
          setIsLoading(false)
          setMessages(data.data)
        })
        .catch(error => {
          console.log(error)
        });
    }
  }, []);

  return (
    <div id='page-top'>
      <div id="wrapper">
        <Sidebar user={currentUser} />
        <div id="content-wrapper" className='d-flex flex-column'>
          <div id="content">
            <Navbar messages={messages} isLoading={isLoading} user={currentUser} />
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
