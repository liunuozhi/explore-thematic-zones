import React from "react";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import Tooltip from "@material-ui/core/Tooltip";

function UserGuideHelper() {
  return (
    <Tooltip title="Hold shift + mouse to change angle. Click bar to select. Click other place to diselect. ">
      <HelpOutlineRoundedIcon />
    </Tooltip>
  );
}

export default UserGuideHelper;
