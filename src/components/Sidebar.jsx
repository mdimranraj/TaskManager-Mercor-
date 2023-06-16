import React, { useState } from 'react';
import styles from '../styles/sidebar.module.css'; // Import the CSS file for styling

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
        
        <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
        
        {/* Content for the sidebar */}
        <div className={`${styles.logo}`}>
            <img className={styles.logoImg} src='./logo.png' /> 
            <span className={`${styles.menuItem} ${styles.logoHead} ${collapsed ? styles.collapsed : ''}`}> Project M.</span>
            <span className={styles.toggleBtn} onClick={toggleCollapse}>
                {!collapsed ? '«' : '»'}
            </span>
        </div>

        <div className={styles.menuDiv}>
            <div className={`${styles.menuItem} ${collapsed ? styles.collapsed : ''}`}>
                <img className={styles.menuImg} src='./home.png'/>Home
            </div>
            <div className={`${styles.menuItem} ${collapsed ? styles.collapsed : ''}`}>
                <img className={styles.menuImg} src='./message.png'/>Messages
            </div>
            <div className={`${styles.menuItem} ${collapsed ? styles.collapsed : ''}`}>
                <img className={styles.menuImg} src='./task.png'/>Tasks
            </div>
            <div className={`${styles.menuItem} ${collapsed ? styles.collapsed : ''}`}>
                <img className={styles.menuImg} src='./members.png'/>Members
            </div>
            <div className={`${styles.menuItem} ${collapsed ? styles.collapsed : ''}`}>
                <img className={styles.menuImg} src='./settings.png'/>Settings
            </div>
        </div>

        <hr className={`${styles.rule} ${styles.menuItem} ${collapsed ? styles.collapsed : ''}`}></hr>

        <div className={`${styles.projectDiv} ${styles.menuItem} ${collapsed ? styles.collapsed : ''}`}>
            <div className={`${styles.projectsHead} ${styles.menuItem} ${collapsed ? styles.collapsed : ''}`}>
                <h5>My Projects</h5>
                <img className={`${styles.addImg} ${styles.menuItem} ${collapsed ? styles.collapsed : ''}`} src='./add-square.png'/>
            </div>
            
            <div className={`${styles.projectItem} ${styles.menuItem} ${collapsed ? styles.collapsed : ''}`}>
                <div className={styles.dot1}></div><span className={styles.projectName}>Mobile App</span>
            </div>
            <div className={`${styles.projectItem} ${styles.menuItem} ${collapsed ? styles.collapsed : ''}`}>
                <div className={styles.dot2}></div><span className={styles.projectName}>Website Redesign</span>
            </div>
            <div className={`${styles.projectItem} ${styles.menuItem} ${collapsed ? styles.collapsed : ''}`}>
                <div className={styles.dot3}></div><span className={styles.projectName}>Design System</span>
            </div>
            <div className={`${styles.projectItem} ${styles.menuItem} ${collapsed ? styles.collapsed : ''}`}>
                <div className={styles.dot4}></div><span className={styles.projectName}>Wireframes</span>
            </div>
        </div>


        
    </div> 
  );
};

export default Sidebar;
