'use strict';
import services from "./src"
import io from "./src/io"

module.exports.hello = async (event) => {
  const result = services.hello(event);
  return io.handler.returnSuccess(result);
};
