import React from "react";
import MouseTooltip from "react-sticky-mouse-tooltip";
import contentbg from "./bg10.gif";
import bgblack from "./bgblack.png";
import "./styles.css";
import { StateContext } from "./Context/StateContext";
import { BuyPixelContext } from "./Context/BuyPixelContext";
import Header from "./Header";

export default function App() {
  const { coordinates } = React.useContext(BuyPixelContext);
  const [text, setText] = React.useState("");
  const [data, setData] = React.useState([
    {
      title: "facebook",
      gridColumn: "1/1000",
      gridRow: "1/80",
      image: `url(${bgblack}) repeat #333333`,
      link: "https://facebook.com"
    },
    {
      title: "Google",
      gridColumn: "100/500",
      gridRow: "100/500",
      image: `url(${bgblack}) repeat #333333`,
      link: "https://google.com"
    }
  ]);

  const MouseToolTipComp = props => {
    const {
      tooltipVisible,
      toggleTooltipTrue,
      toggleTooltipFalse
    } = React.useContext(StateContext);

    React.useEffect(() => {
      if (text) {
        toggleTooltipTrue();
      } else {
        toggleTooltipFalse();
      }
    }, []);

    return (
      <>
        <MouseTooltip
          style={{ background: "black", padding: "1em" }}
          visible={tooltipVisible}
          offsetX={15}
          offsetY={10}
        >
          {props.mytitle}
        </MouseTooltip>
      </>
    );
  };

  const AdComp = () => {
    return (
      <>
        {data.map(item => (
          <div
            style={{
              background: item.image,
              color: "white",
              gridColumn: item.gridColumn,
              gridRow: item.gridRow
            }}
            onMouseEnter={() => setText(item.title)}
            onMouseLeave={() => setText("")}
          >
            <MouseToolTipComp mytitle={text} />
          </div>
        ))}
      </>
    );
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <Header />
      <div
        style={{ background: `url(${contentbg}) repeat #999999` }}
        className="App"
      >
        <AdComp />
      </div>
    </div>
  );
}
