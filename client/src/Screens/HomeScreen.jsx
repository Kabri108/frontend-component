import Layout from '../Layout/Layout'
import React, { useState, useEffect } from 'react';
import Sidebar from './Admin/Sidebar'
import MainContent from '../components/MainContent'


export default function HomeScreen() {

  const [isOpen, setIsOpen] = useState(true);
  const [links, setLinks] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Fetch links from the backend
    const fetchLinks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/sidebar-links');
        const data = await response.json();
        setLinks(data);
      } catch (error) {
        console.error("Error fetching sidebar links:", error);
      }
    };
    fetchLinks();
  }, []);

  return (
    <Layout>
      <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} links={links} />
      
      {/* Main Content */}
      <MainContent />
    </div>
    </Layout>
  )
}
