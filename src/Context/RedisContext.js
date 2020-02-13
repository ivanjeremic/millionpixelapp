import React from "react";

export const RedisContext = React.createContext();

export const RedisProvider = ({ children }) => {
  const [runit, setRunit] = React.useState();
  const RedisReducer = (state, action) => {
    switch (action.type) {
      case "REDIS":
        return {
          ...state,
          tooltipVisible: true ? false : true
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(RedisReducer, {
    redis: true
  });

  const activateRedis = () => {
    dispatch({ type: "REDIS" });
  };

  if (state.redis) {
    const redis = require("redis");
    const client = redis.createClient();

    client.on("error", function(error) {
      console.error(error);
    });

    setRunit(
      client.hmset(["key", "foo", "bar"], function(err, res) {
        console.log("WORKS", res);
      })
    );
  }

  console.log("activateRedis", state.redis);

  return (
    <RedisContext.Provider
      value={{
        redis: state.redis,
        activateRedis,
        runit
      }}
    >
      {children}
    </RedisContext.Provider>
  );
};
