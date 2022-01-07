import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import classNames from "classnames";
import PropTypes from "prop-types";
import { JDESIGN } from "../_util";

const Jbutton = (props) => {

  const handleClick = () => {
    const { onClick } = props;
    if (onClick) {
      onClick();
    }
  }

  const { children, type, disabled } = props;
  const cls = classNames(`${JDESIGN}-btn`, `${JDESIGN}-btn-${type}`);

  return (
    <Button className={cls} onClick={handleClick} disabled={disabled}>
      {children}
    </Button>
  );
};

// 指定 props 的默认值：
Jbutton.defaultProps = {
  type: "default",
};

Jbutton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Jbutton;
