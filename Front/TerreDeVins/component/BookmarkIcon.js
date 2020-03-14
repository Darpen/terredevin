import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBookmark(props) {
  return (
    <Svg width={20} height={20} {...props}>
      <Path d="M15.5 20a.501.501 0 01-.38-.175L9.5 13.268l-5.62 6.557A.5.5 0 013 19.5v-18a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v18a.5.5 0 01-.5.5zm-6-8a.5.5 0 01.38.175L15 18.149V2.001H4v16.148l5.12-5.974A.5.5 0 019.5 12z" />
    </Svg>
  );
}

export default SvgBookmark;