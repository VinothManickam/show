import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Menu, Button } from 'antd';
import { HomeOutlined, StarOutlined, MessageOutlined } from '@mui/icons-material';
import { SettingOutlined } from "@ant-design/icons"; // Import the SettingOutlined icon
import './App.css';

function App() {
  const [stories, setStories, setBlogData] = useState([
    { id: 1, title: 'Sample Story 1', summary: 'This is the summary of Sample Story 1.' },
    { id: 2, title: 'Sample Story 2', summary: 'This is the summary of Sample Story 2.' },
  ]);

  useEffect(() => {
    // Make an API request to your Flask backend here
    axios.get('http://127.0.0.1:5000/api/posts/company_a')  // Replace 'company_a' with the desired company name
      .then(response => {
        setBlogData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="app-container">
      <div className="left-side">
        <Menu
          items={[
            { label: 'Home', icon: <HomeOutlined /> },
            { label: 'DiaryBlog Admin', icon: <StarOutlined /> },
            { label: 'Typelt Admin', icon: <MessageOutlined /> },
            { label: 'Settings', icon: <SettingOutlined /> },
          ]}
        ></Menu>
      </div>
      <form>
      <div class="content row"> 
        <h1>Web Components That Just Works.</h1>
        <p>Welcome to our online store!</p>  
      </div>
      <br />
      <div class="row">
      <Button className="create-blog-button">CREATE NEW POST</Button>
      <h1 className="blog-heading">List Of Post</h1>
    </div>
    
    <table className="story-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Summary</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {stories.map(story => (
            <tr key={story.id}>
              <td>{story.title}</td>
              <td>{story.summary}</td>
              <td>
                <button>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </form>
    </div>
  );
}

export default App;
