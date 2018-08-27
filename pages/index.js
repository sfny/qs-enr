export default () =>
  <div className='container'>
    <div className='card'>
      <div className='logo'>logo</div>
    <h1>Hello There!</h1>
    <p>We’ll need some basic information from you to set up your account.</p>
    <p>scoped!</p>
    <p>scoped!</p>
  </div>
    <style jsx>{`
      .card {
        background-color: white;
        width: 432px;
        height: 582px;
        border-radius: 24px;
        padding: 2em;
        box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.2);
        flex-direction: column;

      }
      p,h1,h2 {
        color: '#333333';
      }
      h1 {
        font-size: 30px;
      }
      p {
          font-size: 16px;
      }
      .container {
        margin-top: 2em;
        background: rgba(248,248,248);
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .logo {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      @media (max-width: 600px) {
        div {
          background: '#F8F8F8';
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background: rgba(248,248,248);
      }
    `}</style>
  </div>
