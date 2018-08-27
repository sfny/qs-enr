export default () =>
  <div className='container'>
    <div className='card'>
      <div className='logo'>
        <img src="/static/Chime-Logo-Green.svg" />
      </div>
    <h1>Hello There!</h1>
    <div className='subheading'>We’ll need some basic information from you to set up your account.</div>
    <div className='input-row'>input row</div>
    <div className='input-row'>input row</div>
    <div className='input-row'>input row</div>
    <div className='input-row'>input row</div>
    <div className='btn-wrapper'>
      <button className='btn-primary'>Next</button>
    </div>
  </div>
    <style jsx>{`
      .card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: white;
        width: 26em;
        height: 38em;
        min-height: 584px;
        border-radius: 24px;
        padding-top: 1em;
        padding-bottom: 1em;
        padding-left: 6em;
        padding-right: 6em;
        box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.2), 0px 24px 32px 0px rgba(0, 0, 0, 0.07);

      }
      p,h1,h2 {
        color: #333333;
      }
      h1 {
        font-size: 30px;
        line-height: 0px;
      }
      p {
          font-size: 16px;
      }
      .subheading {
        font-size: 14px;
      }
      .container {
        margin-top: 2em;
        background: rgba(248,248,248);
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .logo {
        min-height: 48px;
        max-height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .btn-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;

      }
      .btn-primary {
        width: 272px;
        height 48px;
        border-radius: 24px;
        background: #2DC384;
        color: white;
        border-style: none;
        margin-top: 1em;
        margin-bottom: 2em;
      }
      .input-row {
          min-height: 40px;
          background-color: rgba(248,248,248);
          margin-botton: 2.5em;
          border-radius: 4px;
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
        font: 12px roboto;
      }
      button {
        font 16px roboto;
        font-weight: 700;
      }
    `}</style>
  </div>
