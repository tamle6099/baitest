import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import css from "./Transactions.module.css";
import LogoImg from "../../image/logo_2.png";
import IconWhite from "../../image/icon-white.svg";

function Transactions() {
  return (
    <>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 tabs__container"
      >
        <Tab eventKey="home" title="Transactions">
          <div className={css.transactions__container}>
            <div className={css.transactions__content}>
              <div className={css.transactions__name}>
                <img src={LogoImg} alt="" />
                <div>
                  <h3>Eric R Hopper</h3>
                  <p>3 hours ago</p>
                </div>
              </div>
              <div className={css.transactions_usd}>
                <p>-850 USDT</p>
              </div>
            </div>
            <div className={css.transactions__content}>
              <div className={css.transactions__name}>
                <img src={LogoImg} alt="" />
                <div>
                  <h3>Eric R Hopper</h3>
                  <p>3 hours ago</p>
                </div>
              </div>
              <div className={css.transactions_usd}>
                <p>-850 USDT</p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Pending">
          <h1>Pending</h1>
        </Tab>
      </Tabs>
      <div className={css.app}>
        <div className={css.app__img}>
          <img src={IconWhite} alt="" />
        </div>
        <div className={css.app__button__container}>
          <div className={css.app__button_click}>
            <div className={css.app__button}>
              <span>A</span>
            </div>
            <p>DApp Here</p>
          </div>
          <div className={css.app__button_click}>
            <div className={css.app__button}>
              <span>A</span>
            </div>
            <p>DApp Here</p>
          </div>
          <div className={css.app__button_click}>
            <div className={css.app__button}>
              <span>A</span>
            </div>
            <p>DApp Here</p>
          </div>
          <div className={css.app__button_click}>
            <div className={css.app__button}>
              <span>A</span>
            </div>
            <p>DApp Here</p>
          </div>
          <div className={css.app__button_click}>
            <div className={css.app__button}>
              <span>A</span>
            </div>
            <p>DApp Here</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
