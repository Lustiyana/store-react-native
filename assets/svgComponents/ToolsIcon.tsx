/** @format */

import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ToolsIcon(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.326 16.781a.485.485 0 100 .97.485.485 0 000-.97z"
        fill="#000"
      />
      <Path
        d="M22.407 0H2.425A2.428 2.428 0 000 2.425v14.841a2.428 2.428 0 002.425 2.425h7.566v2.231h-.485a2.41 2.41 0 00-1.715.71 2.41 2.41 0 00-.71 1.715c0 .268.217.485.485.485h9.7a.485.485 0 00.485-.485 2.428 2.428 0 00-2.425-2.425h-.485v-2.231h7.566a2.428 2.428 0 002.425-2.425V2.425A2.428 2.428 0 0022.407 0zM2.425.97h19.982c.802 0 1.455.653 1.455 1.455v12.416h-2.231V3.686a.485.485 0 00-.485-.485h-3.88a.485.485 0 00-.485.485v11.155h-2.428a44.641 44.641 0 00-.039-1.476c-.085-1.975-.278-3.298-.379-3.88 1.001-.737 1.274-2.103.662-3.164l-1.68-2.911a.485.485 0 00-.84 0l-1.682 2.912c-.577 1-.373 2.296.533 3.06-.105.58-.316 1.951-.408 3.982-.022.485-.036.98-.041 1.477H8.05V7.566a.482.482 0 00-.048-.21L8 7.35 6.06 3.47a.485.485 0 00-.868 0l-1.94 3.88-.003.008a.482.482 0 00-.048.209v7.275H.97V2.425C.97 1.623 1.623.97 2.425.97zm15.326 13.871V4.171h2.91v.97h-.485a.485.485 0 100 .97h.485v1.455h-.485a.485.485 0 100 .97h.485v1.455h-.485a.485.485 0 100 .97h.485v1.94h-.485a.485.485 0 100 .97h.485v.97h-2.91zm-5.255-4.884c.177 0 .352-.02.524-.058.09.577.222 1.598.3 3.002h-1.805c.082-1.403.22-2.44.316-3.036.215.061.439.092.665.092zm0-.97c-1.108 0-1.823-1.206-1.261-2.18l1.261-2.185 1.261 2.184c.56.97-.145 2.181-1.26 2.181zm-1.026 4.884h1.893c.01.319.017.643.02.97H11.45c.003-.325.01-.65.021-.97zm-5.359.97v-6.79h.97v6.79h-.97zm-1.94 0v-6.79h.97v6.79h-.97zm.3-7.76l1.155-2.31 1.155 2.31h-2.31zm12.227 16.781H8.134a1.45 1.45 0 01.343-.544c.275-.275.64-.426 1.029-.426h5.82c.632 0 1.172.405 1.372.97zm-2.827-1.94h-2.91v-2.231h2.91v2.231zm8.536-3.201H2.425A1.457 1.457 0 01.97 17.266v-1.455h22.892v1.455c0 .802-.653 1.455-1.455 1.455z"
        fill="#000"
      />
      <Path
        d="M13.386 16.781h-2.91a.485.485 0 100 .97h2.91a.485.485 0 100-.97z"
        fill="#000"
      />
    </Svg>
  );
}

export default ToolsIcon;
