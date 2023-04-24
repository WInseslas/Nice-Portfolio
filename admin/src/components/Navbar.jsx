/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import formatDate from "../utils/formatDate";

export default function Navbar({ messages, isLoading, user }) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <ul className="navbar-nav ml-auto">

                {/* <!-- Nav Item - Messages --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw"></i>
                        {/* <!-- Counter - Messages --> */}
                        <span className="badge badge-danger badge-counter">{messages ? messages.length : 0}</span>
                    </a>
                    {/* <!-- Dropdown - Messages --> */}
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">
                            Message Center
                        </h6>
                        {isLoading && <>
                            <div className="dropdown-item text-center small text-gray-500">Loading...</div>
                        </>}
                        {messages && messages.map((message, index) => (

                            <a key={index} className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_1.svg" alt="..." />
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div className="font-weight-bold">
                                    <div className="text-truncate">{message.subject}.</div>
                                    <div className="small text-gray-500">{message.name} ·
                                        <br /> <div style={{ fontWeight: "bolder", color: 'black' }}>{formatDate(message.date_sent)}</div>
                                    </div>
                                </div>
                            </a>
                        ))}

                        {!isLoading && messages && messages.length === 0 && <>
                            <div style={{ fontWeight: "bolder", color: 'black' }} className="dropdown-item text-center small text-gray-500">You have no messages</div>
                        </>}

                        {!isLoading && messages && messages.length > 0 && <>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                        </>}

                    </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user ? user.firstname : ""}</span>
                        <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                    </a>

                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>

            </ul>

        </nav>
    )
}
