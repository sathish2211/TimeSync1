import React from 'react';

const Dashboard = () => {
  const styles = {
    page: {
      position: 'absolute',
      width: '80%',
      height: '80%',
      left: '10%',
      top: '10%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: '4px',
      boxShadow: '0 0 10px 0 rgba(0,0,0, 0.4)',
    },
    pageHeader: {
      width: '100%',
      height: '50px',
      lineHeight: '50px',
      backgroundColor: 'rgba(84,185, 205, 1.0)',
      color: 'white',
      padding: '5px 20px',
      boxSizing: 'border-box',
    },
    title: {
      width: '40%',
      float: 'left',
      lineHeight: '40px',
      fontSize: '1.5em',
      fontWeight: 700,
    },
    userPanel: {
      width: '40%',
      float: 'right',
      display: 'flex',
      alignItems: 'center',
    },
    username: {
      padding: '0 20px',
      fontWeight: 600,
      fontSize: '1em',
    },
    img: {
      borderRadius: '5px',
    },
    main: {
      position: 'relative',
      width: '100%',
      height: '100%',
      clear: 'both',
      backgroundColor: 'white',
      display: 'flex',
    },
    nav: {
      width: '200px',
      backgroundColor: 'rgba(227,234,235, 0.8)',
    },
    searchbox: {
      width: '170px',
      height: '30px',
      lineHeight: '30px',
      margin: '15px',
      backgroundColor: 'white',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
    },
    searchIcon: {
      marginLeft: '5px',
      marginRight: '5px',
      fontSize: '16px',
      color: '#bbb',
    },
    searchInput: {
      width: '120px',
      border: 'none',
      backgroundColor: 'white',
      color: 'black',
      fontFamily: 'Lato',
    },
    menu: {
      width: '100%',
      margin: '15px',
      color: '#555',
    },
    menuTitle: {
      fontWeight: 700,
      fontSize: '1em',
      textTransform: 'uppercase',
    },
    menuItem: {
      cursor: 'pointer',
      listStyle: 'none',
      margin: '5px 0',
      padding: '5px 0',
      paddingLeft: '10px',
      fontWeight: 600,
      marginRight: '30px',
      borderRadius: '4px',
      transition: '0.25s all',
    },
    menuItemActive: {
      color: '#79BC46',
    },
    menuItemHover: {
      backgroundColor: '#999',
    },
    menuIcon: {
      fontSize: '1.4em',
      marginRight: '10px',
    },
    view: {
      marginLeft: '200px',
      padding: '10px',
    },
    viewHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '70px',
      padding: '20px',
      borderBottom: '1px solid #E0E0E0',
    },
    viewTitle: {
      fontSize: '1.4em',
      fontWeight: 400,
      color: '#AAA',
      marginTop: '-18px',
    },
    button: {
      height: '30px',
      lineHeight: '30px',
      backgroundColor: '#AAA',
      borderRadius: '4px',
      padding: '0 20px',
      cursor: 'pointer',
      color: 'white',
      fontWeight: 700,
    },
    buttonActive: {
      backgroundColor: 'rgba(84,185, 205, 1.0)',
    },
    buttonInverz: {
      backgroundColor: 'inherit',
      border: '1px solid #AAA',
      color: '#AAA',
      fontSize: '1.3em',
      paddingLeft: '10px',
      paddingRight: '16px',
    },
    content: {
      marginTop: '70px',
    },
    list: {
      title: {
        padding: '10px',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: 'rgba(84,185, 205, 1.0)',
      },
      ul: {
        paddingLeft: '10px',
        color: '#777',
      },
      li: {
        height: '50px',
        lineHeight: '50px',
        listStyle: 'none',
        borderTop: '1px solid #AAA',
      },
      liChecked: {
        backgroundColor: '#F0F4F5',
      },
      info: {
        float: 'right',
      },
      span: {
        fontWeight: 600,
      },
      button: {
        float: 'right',
        width: '100px',
        height: '30px',
        lineHeight: '30px',
        backgroundColor: '#AAA',
        borderRadius: '4px',
        margin: '10px 10px',
        textAlign: 'center',
        cursor: 'pointer',
        color: 'white',
        fontWeight: 700,
      },
      buttonGreen: {
        backgroundColor: '#85C157',
      },
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.pageHeader}>
        <div style={styles.title}>Dashboard</div>
        <div style={styles.userPanel}>
          <i className="fa fa-chevron-down" />
          <span style={styles.username}>John Doe</span>
          <img
            src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg"
            width={40}
            height={40}
            alt="User"
            style={styles.img}
          />
        </div>
      </header>
      <main style={styles.main}>
        <nav style={styles.nav}>
          <div style={styles.searchbox}>
            <i className="fa fa-search" style={styles.searchIcon} />
            <input
              type="search"
              placeholder="Search"
              style={styles.searchInput}
            />
          </div>
          <div style={styles.menu}>
            <div style={styles.menuTitle}>Navigation</div>
            <ul>
              <li style={styles.menuItem}>
                <i className="fa fa-home" style={styles.menuIcon} /> Home
              </li>
              <li style={styles.menuItem}>
                <i className="fa fa-signal" style={styles.menuIcon} /> Activity
              </li>
              <li style={{ ...styles.menuItem, ...styles.menuItemActive }}>
                <i className="fa fa-tasks" style={styles.menuIcon} /> Manage
                Tasks
              </li>
              <li style={styles.menuItem}>
                <i className="fa fa-envelope" style={styles.menuIcon} /> Messages
              </li>
            </ul>
          </div>
        </nav>
        <section style={styles.view}>
          <header style={styles.viewHeader}>
            <div style={styles.viewTitle}>Manage Tasks</div>
            <div>
              <div style={{ ...styles.button, ...styles.buttonActive }}>
                Add New Task
              </div>
              <div style={styles.button}>Completed</div>
              <div style={{ ...styles.button, ...styles.buttonInverz }}>
                <i className="fa fa-trash-o" />
              </div>
            </div>
          </header>
          <div style={styles.content}>
            <div>
              <div style={styles.list.title}>Today</div>
              <ul style={styles.list.ul}>
                <li style={{ ...styles.list.li, ...styles.list.liChecked }}>
                  <i className="fa fa-check-square-o" />
                  <span style={styles.list.span}>Update team page</span>
                  <div style={styles.list.info}>
                    <div style={{ ...styles.list.button, ...styles.list.buttonGreen }}>
                      In progress
                    </div>
                    <span>Complete by 25/04/2014</span>
                  </div>
                </li>
                <li style={styles.list.li}>
                  <i className="fa fa-square-o" />
                  <span style={styles.list.span}>Design a new logo</span>
                  <div style={styles.list.info}>
                    <div style={styles.list.button}>Pending</div>
                    <span>Complete by 10/04/2014</span>
                  </div>
                </li>
                <li style={styles.list.li}>
                  <i className="fa fa-square-o" />
                  <span style={styles.list.span}>Find a front end developer</span>
                  <div style={styles.list.info}></div>
                </li>
              </ul>
            </div>
            <div>
              <div style={styles.list.title}>Tomorrow</div>
              <ul style={styles.list.ul}>
                <li style={styles.list.li}>
                  <i className="fa fa-square-o" />
                  <span style={styles.list.span}>Find front end developer</span>
                  <div style={styles.list.info}></div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
