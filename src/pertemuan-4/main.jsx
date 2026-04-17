import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkList from "./FremworkList";
import FrameworkListSearchFilter from "./FremworkListSearchFilter";
import ResponsiveText from "./ResponsiveDesign";

createRoot(document.getElementById("root")).render(
  <div>

    {/* <FrameworkList/> */}
    {/* <FrameworkListSearchFilter/> */}
    <ResponsiveText/>
 
  </div>
);
