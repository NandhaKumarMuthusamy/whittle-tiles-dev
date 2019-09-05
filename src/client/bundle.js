import {registerTileComponent} from "@ombiel/cm-tile-sdk";
import MyCoursesDynamic from "./tiles/my-courses-dynamic/components/my-courses-dynamic";
import MyCoursesStatic from "./tiles/my-courses-static/components/my-courses-static";
import MyCoursesImage from "./tiles/my-courses-image/components/my-courses-image";
import ASAPConnected from "./tiles/asap-connected/components/asap-connected";
import MyCoursesRoleSso from "./tiles/my-courses-role-sso/components/my-courses-role-sso";

registerTileComponent(MyCoursesDynamic,"MyCoursesDynamic");

registerTileComponent(MyCoursesStatic,"MyCoursesStatic");

registerTileComponent(MyCoursesImage,"MyCoursesImage");

registerTileComponent(ASAPConnected,"ASAPConnected");

registerTileComponent(MyCoursesRoleSso,"MyCoursesRoleSso");
